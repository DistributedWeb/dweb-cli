# dweb-secret-storage

Store secret keys for dwebfs archives in the user's home directory.

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

## Install

```
npm install dweb-secret-storage
```

## Usage

Return for the `secret_key` storage in dwebfs/ddatabase. To avoid local ownership conflicts, pass the local directory as the first argument. `dweb-secret-storage` will check for a non-empty ownership file in the source directory storage.

```js
var secretStore = require('dweb-secret-storage')

var storage = {
  metadata: function (name, opts) {
    if (name === 'secret_key') return secretStore()(path.join(dir, '.dweb/metadata.ogd'), opts)
    return // other storage
  },
  content: function (name, opts) {
    return // other storage
  }
}

// store secret key in ~/.dweb/secret_keys
var archive = dwebfs(storage)
```

## API

### `secretStorage([dir])(ownershipFile, opts)`

* `dir`: directory to store keys under `dir/.dweb/secret_keys`. Defaults to users home directory.
* `ownershipFile`: non-empty file that denotes ownership. This helps avoid local ownership conflicts of the same dweb.

## License

[MIT](LICENSE.md)

[npm-image]: https://img.shields.io/npm/v/dweb-secret-storage.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/dweb-secret-storage
[travis-image]: https://img.shields.io/travis/joehand/dweb-secret-storage.svg?style=flat-square
[travis-url]: https://travis-ci.org/joehand/dweb-secret-storage
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard
