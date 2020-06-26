var DAT_DOMAIN = 'dweb.local'
var DEFAULT_DISCOVERY = [
  'discovery1.dwebx.net',
  'discovery2.dwebx.net'
]
var DEFAULT_BOOTSTRAP = [
  'bootstrap1.dwebx.net:6881',
  'bootstrap2.dwebx.net:6881',
  'bootstrap3.dwebx.net:6881',
  'bootstrap4.dwebx.net:6881'
]

var DEFAULT_OPTS = {
  dns: { server: DEFAULT_DISCOVERY, domain: DAT_DOMAIN },
  dht: { bootstrap: DEFAULT_BOOTSTRAP }
}

module.exports = function (opts) {
  return Object.assign({}, DEFAULT_OPTS, opts) // opts takes priority
}
