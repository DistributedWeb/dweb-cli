var discovery = require('dweb-dns-discovery')

var disc1 = discovery()
var disc2 = discovery()

disc2.on('peer', function (name, peer) {
  console.log(name, peer)
})

disc1.announce('test', 4244)
