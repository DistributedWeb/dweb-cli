module.exports = {
  name: 'keys',
  command: keys,
  help: [
    'View & manage dweb keys',
    '',
    'Usage:',
    '',
    '  dweb keys              view dweb key and discovery key',
    '  dweb keys export       export dweb secret key',
    '  dweb keys import       import dweb secret key to make a dWeb archive writable',
    ''
  ].join('\n'),
  options: [
    {
      name: 'discovery',
      boolean: true,
      default: false,
      help: 'Print Discovery Key'
    }
  ]
}

function keys (opts) {
  var DWeb = require('dwebs-core')
  var parseArgs = require('../parse-args')
  var debug = require('debug')('dweb')

  debug('dweb keys')
  if (!opts.dir) {
    opts.dir = parseArgs(opts).dir || process.cwd()
  }
  opts.createIfMissing = false // keys must always be a resumed archive

  DWeb(opts.dir, opts, function (err, dweb) {
    if (err && err.name === 'MissingError') return exit('Sorry, could not find a dWeb archive in this directory.')
    if (err) return exit(err)
    run(dweb, opts)
  })
}

function run (dweb, opts) {
  var subcommand = require('subcommand')
  var prompt = require('prompt')

  var config = {
    root: {
      command: function () {
        console.log(`dweb://${dweb.key.toString('hex')}`)
        if (opts.discovery) console.log(`Discovery key: ${dweb.archive.discoveryKey.toString('hex')}`)
        process.exit()
      }
    },
    commands: [
      {
        name: 'export',
        command: function foo (args) {
          if (!dweb.writable) return exit('dWeb archive must be writable to export.')
          console.log(dweb.archive.metadata.secretKey.toString('hex'))
        }
      },
      {
        name: 'import',
        command: function bar (args) {
          if (dweb.writable) return exit('dWeb archive is already writable.')
          importKey()
        }
      }
    ]
  }

  subcommand(config)(process.argv.slice(3))

  function importKey () {
    // get secret key & write

    var schema = {
      properties: {
        key: {
          pattern: /^[a-z0-9]{128}$/,
          message: 'Use `dweb keys export` to get the secret key (128 character hash).',
          hidden: true,
          required: true,
          description: 'dweb secret key'
        }
      }
    }
    prompt.message = ''
    prompt.start()
    prompt.get(schema, function (err, data) {
      if (err) return done(err)
      var secretKey = data.key
      if (typeof secretKey === 'string') secretKey = Buffer.from(secretKey, 'hex')
      // Automatically writes the metadata.ogd file
      dweb.archive.metadata._storage.secretKey.write(0, secretKey, done)
    })

    function done (err) {
      if (err) return exit(err)
      console.log('Successful import. dWeb archive is now writable.')
      exit()
    }
  }
}

function exit (err) {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  process.exit(0)
}
