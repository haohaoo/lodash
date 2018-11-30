/**
 * The opposite of `before`. This method creates a function that invokes
 * `func` once it's called `n` or more times.
 * 与　before　相反, 当调用一次或 n 次后执行 func
 * 
 * @since 0.1.0
 * @category Function
 * @param {number} n The number of calls before `func` is invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * const saves = ['profile', 'settings']
 * const done = after(saves.length, () => console.log('done saving!'))
 *
 * forEach(saves, type => asyncSave({ 'type': type, 'complete': done }))
 * // => Logs 'done saving!' after the two async saves have completed.
 */
function after(n, func) {
  if (typeof func != 'function') {
    // new TypeError([message[, fileName[, lineNumber]]])
    throw new TypeError('Expected a function')
  }
  return function(...args) {
    // Deconstruction all of the arguments
    // if n > 1, return empty func
    // after calculate, n store in cache
    if (--n < 1) {
      // if n < 1 excute func
      return func.apply(this, args)
      // bind this, transfer arguments
    }
  }
}

export default after
