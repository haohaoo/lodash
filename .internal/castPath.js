import isKey from './isKey.js'
import stringToPath from './stringToPath.js'

/**
 * Casts `value` to a path array if it's not one.
 * 如果它不是一个路径数组，则将`value`转换为路径数组
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (Array.isArray(value)) {
    return value
  }
  return isKey(value, object) ? [value] : stringToPath(value)
}

export default castPath
