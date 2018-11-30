const objectProto = Object.prototype
const hasOwnProperty = objectProto.hasOwnProperty
const toString = objectProto.toString
const symToStringTag = typeof Symbol != 'undefined' ? Symbol.toStringTag : undefined

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 * 'getTag' 的基本实现，没有针对错误环境的回退
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  // null == undefined === null
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]'
  }
  if (!(symToStringTag && symToStringTag in Object(value))) {
    return toString.call(value)
  }
  const isOwn = hasOwnProperty.call(value, symToStringTag)
  const tag = value[symToStringTag]
  let unmasked = false
  try {
    value[symToStringTag] = undefined
    unmasked = true
  } catch (e) {}

  const result = toString.call(value)
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag
    } else {
      delete value[symToStringTag]
    }
  }
  return result
}

export default baseGetTag
