#!/usr/bin/env node

'use strict'

const { types } = require('mime-types')
const arg = process.argv[2]
const { log } = console
const help = () => log(`
  please provide an extension, or all
  usage example:
  mimetypes html
  mimetypes all
`)

if (!arg) {
  return help()
}

if (arg === 'all') {
  return log(JSON.stringify(types, null, 2))
}

if (types[arg]) {
  return log(`${arg}: ${types[arg]}`)
}

const getkeybyvalue = (object, value) =>
  Object.keys(object).find(key => object[key] === value)

if (getkeybyvalue(types, arg)) {
  return log(getkeybyvalue(types, arg))
}

return help()
