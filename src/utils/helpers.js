/**
 * Tests a given value on being a string.
 *
 * @param value *   Value to test
 * @return {boolean}
 */
export const isString = value =>
  Object.prototype.toString.call(value) === '[object String]'

/**
 * Tests a given value on being an Object.
 *
 * @param value *   Value to test
 * @return {boolean}
 */
export const isObject = value =>
  Object.prototype.toString.call(value) === '[object Object]'

/**
 * Compares a given value with a selected value.
 *
 * @param query     string
 * @param selected  string
 * @return {boolean}
 */
export const isSelected = (query, selected) =>
  isString(query) &&
  isString(selected) &&
  query.toLowerCase().trim() === selected.toLowerCase().trim()
