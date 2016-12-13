#!/usr/bin/env node

'use strict'

const { lookup, types } = require('mime-types')
const { version } = require('./package.json')
const arg = process.argv[2]
const { log } = console
const v = () => log(`mime-types-cli v ${version}`)
const help = () => log(`
  mime-types-cli v ${version}
  please provide an extension, or all
  usage example:
  mimetypes html
  mimetypes application/xml
  mimetypes styles.css
  mimetypes all
`)

const getKeyByValue = (object, value) =>
  Object.keys(object).find(key => object[key] === value)

const main = (type) => {
  if (!type) return help()
  if (type === '-v' || type === '--version') return v()

  if (type === 'all') {
    return log(JSON.stringify(types, null, 2))
  }

  const lookupByType = lookup(type)
  if (lookupByType) return log(`${type}: ${lookupByType}`)
  else if (getKeyByValue(types, type)) return log(getKeyByValue(types, type))
  else return help()
}

main(arg)
