#!/usr/bin/env node

'use strict'

const mimeTypes = require('./types')
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
  return log(JSON.stringify(mimeTypes, null, 2))
}

if (mimeTypes[arg]) {
  return log(`${arg}: ${mimeTypes[arg]}`)
}

const getkeybyvalue = (object, value) =>
  Object.keys(object).find(key => object[key] === value)

if (getkeybyvalue(mimeTypes, arg)) {
  return log(getkeybyvalue(mimeTypes, arg))
}

return help()
