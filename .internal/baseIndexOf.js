import baseFindIndex from './baseFindIndex.js'
import baseIsNaN from './baseIsNaN.js'
import strictIndexOf from './strictIndexOf.js'

/**
 * The base implementation of `indexOf` without `fromIndex` bounds checks.
 * 没有`fromIndex`的`indexOf`的基本实现限制了检查。
 * 
 * @private
 * @param {Array} array The array to inspect. 源数组
 * @param {*} value The value to search for.
 * 要查找的值
 * @param {number} fromIndex The index to search from.
 * 从哪个索引开始
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  // 判断是否自身相等以执行严格 indexOf, 此处的 baseFindIndex 必返回 false
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex)
}

export default baseIndexOf
