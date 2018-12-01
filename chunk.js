import slice from './slice.js'

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 */
function chunk(array, size) {
  // 取 size 中最大值
  size = Math.max(size, 0)
  // length 的有效值校验 以防报错
  const length = array == null ? 0 : array.length
  // 传入参数无效的话，返回该函数应返回数据类型的空值
  if (!length || size < 1) {
    return []
  }
  let index = 0 // 切割索引
  let resIndex = 0 // 新数组索引
  // Math.ceil 向上取整
  // 创建切割份数的新数组
  const result = new Array(Math.ceil(length / size))

  while (index < length) {
    // 切割源数组
    result[resIndex++] = slice(array, index, (index += size))
  }
  return result
}

export default chunk
