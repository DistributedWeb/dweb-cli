# dweb-json

read &amp; write dweb.json files. Uses toiletdb under the hood.

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

## Install

```
npm install dweb-json
```

## Usage

```js
var DatJSON = require('dweb-json')

var datjson = DatJSON(archive)

datjson.create({title: 'a dweb', description: 'exciting'}, function (err) {
  if (err) throw err
})

datjson.read(function (err, data) {
  console.log(data)
})
```

Write to a `dweb.json` on the file system also:

```js
var DatJSON = require('dweb-json')

var datjson = DatJSON(archive, {file: path.join(dweb.path, 'dweb.json')})

datjson.create({title: 'a dweb', description: 'exciting'}, function (err) {
  if (err) throw err
})
```

**TODO: replace file option with dwebfs indexing**

## API

### `var datjson = DatJSON(archive, [opts])`

create a new datJson db

Options:

* `opts.file` - dweb.json file path, updates will be written to file system and archive

#### `datjson.create([data], cb)`

Create a new `dweb.json` file in the archive with the default keys (`url`, `title`, `description`). Pass in any additional data to add on initial create.

#### `datjson.write(key, val, cb)` or `datjson.write(data, cb)`

Write a single `key` and `value` or an object, `data`, to the `dweb.json` file. Use `file` option above to also update the file on the file system.

#### `datjson.delete(key, cb)`

Delete a `key` from the `dweb.json` file.

#### `datjson.read(cb)`

Read the current `dweb.json`.

## License

[MIT](LICENSE.md)

[npm-image]: https://img.shields.io/npm/v/dweb-json.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/dweb-json
[travis-image]: https://img.shields.io/travis/datproject/dweb-json.svg?style=flat-square
[travis-url]: https://travis-ci.org/datproject/dweb-json
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard
