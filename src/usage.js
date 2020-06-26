module.exports = function (opts, help, usage) {
  if (opts.version) {
    var pkg = require('../package.json')
    console.error(pkg.version)
    process.exit(1)
  }
  var msg = `
Usage: dweb <cmd> [<dir>] [options]

Sharing Files:
   dweb share                   create dWeb archive, import files, share to network
   dweb create                  create empty dWeb archive and dweb.json
   dWeb archive synced                    import files to existing dWeb archive & sync with network

Downloading Files:
   dweb clone <link> [<dir>]    download a dWeb archive via link to <dir>
   dweb pull                    update dWeb archive & exit
   dWeb archive synced                    live sync files with the network

Info:
   dweb log                     log history for a dWeb archive
   dweb status                  get key & info about a local dWeb archive

DWeb public registries:
   dweb <cmd> [<registry>]      All commands take <registry> option
   dweb register                register new account
   dweb login                   login to your account
   dweb publish                 publish a dWeb archive
   dweb whoami                  print active login information
   dweb logout                  logout from active login

Stateless/Shortcut Commands:
   dweb <link> [<dir>]          clone or sync link to <dir>
   dweb <dir>                   create and sync dWeb archive in directory

Troubleshooting & Help:
   dweb doctor                  run the dWeb network doctor
   dweb help                    print this usage guide
   dweb <command> --help, -h    print help for a specific command
   dweb --version, -v           print the dWeb version

  `
  console.error(msg)
  if (usage) {
    console.error('General Options:')
    console.error(usage)
  }
  console.error('Have fun using dWeb CLI! Learn more at docs.dwebx.org')
  process.exit(1)
}
