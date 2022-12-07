import assert from 'node:assert/strict'

const hello = message => `Hello ${message}`
var output = hello('world')
  const result = 'unused variable'

console.log(output)

assert(output === 'Hello world')
