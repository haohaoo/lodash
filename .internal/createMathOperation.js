import baseToNumber from './baseToNumber.js'
import baseToString from './baseToString.js'

/**
 * Creates a function that performs a mathematical operation on two values.
 *
 * @private
 * @param {Function} operator The function to perform the operation.
 * @param {number} [defaultValue] The value used for `undefined` arguments.
 * @returns {Function} Returns the new mathematical operation function.
 */

/**
 *  curry function
 *  for example
 *  const add = createMathOperation((augend, addend) => augend + addend, 0)
 *  this time add is a function
 *  (value, other) => {
 *    ......
 *    return (value, other) => {
 *      value + addend
 *    }
 *  }
 *  add(4, 6) // 10
 */

function createMathOperation(operator, defaultValue) {
  return (value, other) => {
    // check double undefined
    if (value === undefined && other === undefined) {
      return defaultValue
    }
    // check single undefined, return effective value
    if (value !== undefined && other === undefined) {
      return value
    }
    if (other !== undefined && value === undefined) {
      return other
    }
    // conversition to same type
    if (typeof value == 'string' || typeof other == 'string') {
      value = baseToString(value)
      other = baseToString(other)
    }
    else {
      value = baseToNumber(value)
      other = baseToNumber(other)
    }
    // implement operator
    return operator(value, other)
  }
}

export default createMathOperation
