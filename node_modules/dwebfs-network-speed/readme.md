# dwebfs-network-speed

[![Travis](https://img.shields.io/travis/datproject/dwebfs-network-speed.svg?style=flat-square)](https://travis-ci.org/datproject/dwebfs-network-speed) [![npm](https://img.shields.io/npm/v/dwebfs-network-speed.svg?style=flat-square)](https://npmjs.org/package/dwebfs-network-speed)

Get upload and download speeds for a dwebfs archive.

## Usage

```js
var archive = dwebfs('.dweb')
var swarm = dweb-discovery(archive)
var speed = networkSpeed(archive, {timeout: 1000})

setInterval(function () {
  console.log('upload speed: ', speed.uploadSpeed)
  console.log('download speed: ', speed.downloadSpeed)
}, 500)
```

## API

### `var speed = networkSpeed(archive, [opts])`

* `archive` is a dwebfs archive.
* `opts.timeout` is the only option. Speed will be reset to zero after the timeout.

#### `speed.uploadSpeed`

Archive upload speed across all peers.

#### `speed.downloadSpeed`

Archive download speed across all peers.

#### `speed.downloadTotal`

Archive total download.

#### `speed.uploadTotal`

Archive total upload.

## License

MIT
