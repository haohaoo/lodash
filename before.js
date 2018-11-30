/**
 * Creates a function that invokes `func`, with the `this` binding and arguments
 * of the created function, while it's called less than `n` times. Subsequent
 * calls to the created function return the result of the last `func` invocation.
 * 执行小于 n 的次数，大于 n  返回 最后一次的执行结果
 *
 * @since 3.0.0
 * @category Function
 * @param {number} n The number of calls at which `func` is no longer invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * jQuery(element).on('click', before(5, addContactToList))
 * // => Allows adding up to 4 contacts to the list.
 */
function before(n, func) {
  let result
  if (typeof func != 'function') {
    throw new TypeError('Expected a function')
  }
  return function(...args) {
    if (--n > 0) {
      result = func.apply(this, args)
    }
    if (n <= 1) {
      // free memory
      func = undefined
    }
    return result
  }
}

export default before

// mine before
// 相较于 lodash 的写法，多创建了一个变量，多占用了一份内存
// 且该变量在 >= n 后无法释放
// mine算法思路： 正向去想递增小于, 多使用一个变量去记录已执行过的次数
// lodash: 分析 n 的变化与 0 1 之间的关系
function mineBefore(n, func) {
  if (typeof func != 'function') {
    throw new TypeError('Expected a function')
  }
  let hasCalc = 0
  let result
  return function(...args) {
    if (++hasCalc < n) {
      result = func.apply(this, args)
    }
    if (hasCalc >= n) {
      func = undefined
    }
    return result
  }
}
