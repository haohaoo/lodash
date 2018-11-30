import isSymbol from '../isSymbol.js'

/** Used as references for various `Number` constants. */
const NAN = 0 / 0

/**
 * The base implementation of `toNumber` which doesn't ensure correct
 * conversions of binary, hexadecimal, or octal string values.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 */

/**
 * ToNumber 的基本实现，不能保证二进制，十六进制，八进制的转换
 * 
 */

function baseToNumber(value) {
  // FIXED: why not judge 'number' type, +* can return a number even it was number 
  if (typeof value == 'number') {
    return value
  }
  // judge symbol
  if (isSymbol(value)) {
    return NAN
  }
  // SKILL: Acorrding +* to number conversition
  return +value
}

export default baseToNumber
