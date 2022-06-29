#!/usr/bin/env node

const {
  charset,
  contentType,
  extension,
  extensions,
  lookup,
  types
} = require('mime-types')

const arg = process.argv[2]
const { log } = console
const help = () =>
  log(`
  mime-types-cli
  please provide an extension, types (all), or extensions (all)
  usage example:
  mimetypes html
  mimetypes application/xml
  mimetypes styles.css
  mimetypes types
  mimetypes extensions
`)

const main = (type) => {
  if (!type) {
    return help()
  }

  if (type === 'extensions') {
    return log(JSON.stringify(extensions, null, 2))
  }

  if (type === 'types') {
    return log(JSON.stringify(types, null, 2))
  }

  const lookupByType = lookup(type)
  const lookupByExtension = extension(type)
  const lookupByCharset = charset(type)
  const lookupByContentType = contentType(type)
  if (lookupByType) {
    return log(`${type}: ${lookupByType}`)
  }
  if (lookupByExtension) {
    return log(`${type}: ${lookupByExtension}`)
  }
  if (lookupByContentType) {
    return log(`${type}: ${lookupByContentType}`)
  }
  if (lookupByCharset) {
    return log(`${type}: ${lookupByCharset}`)
  }
  return help()
}

main(arg)
