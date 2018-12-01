import SetCache from './SetCache.js'
import arrayIncludes from './arrayIncludes.js'
import arrayIncludesWith from './arrayIncludesWith.js'
import map from '../map.js'
import cacheHas from './cacheHas.js'

/** Used as the size to enable large array optimizations. */
const LARGE_ARRAY_SIZE = 200

/**
 * The base implementation of methods like `difference` without support
 * for excluding multiple arrays.
 *
 * @private
 * @param {Array} array The array to inspect. 目标数组
 * @param {Array} values The values to exclude. 要排除的值
 * @param {Function} [iteratee] The iteratee invoked per element. 每个元素的过滤器
 * @param {Function} [comparator] The comparator invoked per element.每个元素调用的比较器。
 * @returns {Array} Returns the new array of filtered values. 返回过滤后的新数组
 */
function baseDifference(array, values, iteratee, comparator) {
  // arrayIncludes 用于检测是否包含值
  let includes = arrayIncludes
  let isCommon = true
  const result = []
  // 获取对比样本长度
  const valuesLength = values.length

  // 空校验
  if (!array.length) {
    return result
  }
  if (iteratee) {
    values = map(values, (value) => iteratee(value))
  }
  if (comparator) {
    includes = arrayIncludesWith
    isCommon = false
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas
    isCommon = false
    values = new SetCache(values)
  }
  outer:
  for (let value of array) {
    const computed = iteratee == null ? value : iteratee(value)

    value = (comparator || value !== 0) ? value : 0
    if (isCommon && computed === computed) {
      let valuesIndex = valuesLength
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer
        }
      }
      result.push(value)
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value)
    }
  }
  return result
}

export default baseDifference
