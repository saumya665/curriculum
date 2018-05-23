/**
 * Call X - takes in a number X and a function,
 *    Call the function X number of times
 * @param {number} a
 * @param {function} b
 */

const solution = (num, funct, i=0) => {
  if (i === num) { return };
  funct();
  return solution(num, funct, i+1);
};

module.exports = {
  solution,
};
