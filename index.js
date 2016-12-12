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

const main = (type) => {
  if (!type) {
    return help()
  }

  if (type === 'all') {
    return log(JSON.stringify(types, null, 2))
  }

  if (types[type]) {
    return log(`${type}: ${types[type]}`)
  }

  const getkeybyvalue = (object, value) =>
    Object.keys(object).find(key => object[key] === value)

  if (getkeybyvalue(types, type)) {
    return log(getkeybyvalue(types, type))
  }

  return help()
}

main(arg)
