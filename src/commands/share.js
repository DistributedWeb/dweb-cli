module.exports = {
  name: 'share',
  command: share,
  help: [
    'Create and share a dWeb archive',
    'Create a dWeb archive, import files, and share to the network.',
    '',
    'Usage: dweb share'
  ].join('\n'),
  options: [
    {
      name: 'import',
      boolean: true,
      default: true,
      help: 'Import files from the directory to the database.'
    },
    {
      name: 'ignoreHidden',
      boolean: true,
      default: true,
      abbr: 'ignore-hidden'
    },
    {
      name: 'watch',
      boolean: true,
      default: true,
      help: 'Watch for changes and import updated files.'
    }
  ]
}

function share (opts) {
  var DWeb = require('dwebs-core')
  var neatLog = require('neat-log')
  var archiveUI = require('../ui/archive')
  var trackArchive = require('../lib/archive')
  var onExit = require('../lib/exit')
  var parseArgs = require('../parse-args')
  var debug = require('debug')('dweb')

  if (!opts.dir) {
    opts.dir = parseArgs(opts).dir || process.cwd()
  }

  debug('Sharing archive', opts)

  var views = [archiveUI]
  var neat = neatLog(views, { logspeed: opts.logspeed, quiet: opts.quiet, debug: opts.debug })
  neat.use(trackArchive)
  neat.use(onExit)
  neat.use(function (state, bus) {
    state.opts = opts

    DWeb(opts.dir, opts, function (err, dweb) {
      if (err && err.name === 'IncompatibleError') return bus.emit('exit:warn', 'Directory contains incompatible dWeb metadata. Please remove your old .dweb folder (rm -rf .dweb)')
      else if (err) return bus.emit('exit:error', err)
      if (!dweb.writable && !opts.shortcut) return bus.emit('exit:warn', 'Archive not writable, cannot use share. Please use sync to resume download.')

      state.dweb = dweb
      bus.emit('dweb')
      bus.emit('render')
    })
  })
}
