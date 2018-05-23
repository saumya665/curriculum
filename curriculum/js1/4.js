/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

const solution = (num, str, i=0, newStr="") => {
  if (i === num) return newStr;
 return solution(num, str, i+1, newStr + str);
}

module.exports = {
  solution,
};
