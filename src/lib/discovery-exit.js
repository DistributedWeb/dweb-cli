var output = require('neat-log/output')

module.exports = discoveryExit

function discoveryExit (state, bus) {
  bus.once('network:callback', checkExit)

  function checkExit () {
    if (state.dweb.network.connected || !state.opts.exit) return
    if (state.dweb.network.connecting) return setTimeout(checkExit, 500) // wait to see if any connections resolve
    var msg = output(`
      dWeb could not find any connections for that link.
      There may not be any sources online.

      Run 'dweb doctor' if you keep having trouble.
    `)
    bus.emit('exit:warn', msg)
  }
}
