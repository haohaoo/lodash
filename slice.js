/**
 * Creates a slice of `array` from `start` up to, but not including, `end`.
 *
 * **Note:** This method is used instead of
 * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
 * returned.
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position. A negative index will be treated as an offset from the end.
 * @param {number} [end=array.length] The end position. A negative index will be treated as an offset from the end.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * var array = [1, 2, 3, 4]
 *
 * _.slice(array, 2)
 * // => [3, 4]
 */
function slice(array, start, end) {
  // 参数校验
  let length = array == null ? 0 : array.length
  if (!length) {
    return []
  }
  // 参数 init
  start = start == null ? 0 : start
  end = end === undefined ? length : end

  if (start < 0) {
    // 起始索引小于0且取反不大于数组长度，则意味从数组最后开始取的索引数 -2 为倒数第二个数开始取
    start = -start > length ? 0 : (length + start)
  }
  // 结束索引超过数组长度则取数组长度
  end = end > length ? length : end
  if (end < 0) {
    end += length
  }
  // 使用位运算右移0位，运算符永远都会返回正整数，因为此时的 end - start 必定为正，所以为向下取整。保证当用户输入为小数时得到的计算结果为整数
  length = start > end ? 0 : ((end - start) >>> 0)
  // 2.5 >>> 0  => 2
  // js 进行位运算会得到带符号位的32位的补码
  // 所以会抛弃后面32位（小数点位）的数据
  start >>>= 0

  let index = -1
  // 创建期望长度的数组
  const result = new Array(length)
  while (++index < length) {
    // 从 start 位开始切割保存
    result[index] = array[index + start]
  }
  return result
}

export default slice
