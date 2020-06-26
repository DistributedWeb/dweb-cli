var test = require('tape')
var ram = require('random-access-memory')
var DWeb = require('..')

test('dwebs-core: require dwebs-core + make a dWeb archive', function (t) {
  DWeb(ram, function (err, dweb) {
    t.error(err, 'no error')
    t.ok(dweb, 'makes dWeb archive')
    t.pass('yay')
    t.end()
  })
})
