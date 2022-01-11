import assert from 'node:assert/strict'

const hello = message => `Hello ${message}`
const output = hello('world')

console.log(output)

assert(output === 'Hello world')
