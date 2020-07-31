# DWeb Swarm Defaults

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

Use DWeb defaults for `dns` and `dht` servers in [dweb-discovery](https://github.com/datproject/dweb-discovery) or [dweb-discovery-swarm](https://github.com/distributedweb
g/dweb-discovery-swarm). The *dns* and *dht* servers are used to discover other peers.

### Using Other Discovery Servers

Run discovery servers with [dweb-dns-discovery](https://github.com/distributedweb
g/dweb-dns-discovery#cli) or a [bittorrent-dht](https://github.com/webtorrent/bittorrent-dht) server (such as https://github.com/hyperswarm/dht).

## Usage

Create a config object and pass it to discovery swarm.

Any options you specify will overwrite the defaults. See discovery swarm for options.

```javascript
var Swarm = require('dweb-discovery-swarm')
var defaults = require('dweb-swarm-defaults')

var config = defaults({
  stream: function () {
    return drive.createPeerStream()
  }
})
var swarm = Swarm(config)
```

## License

[MIT](LICENSE.md)

[npm-image]: https://img.shields.io/npm/v/dweb-swarm-defaults.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/dweb-swarm-defaults
[travis-image]: https://img.shields.io/travis/datproject/dweb-swarm-defaults.svg?style=flat-square
[travis-url]: https://travis-ci.org/datproject/dweb-swarm-defaults
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

