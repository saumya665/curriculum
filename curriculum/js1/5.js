/**
 * Call X - takes in a number X and a function,
 *    Call the function X number of times
 * @param {number} a
 * @param {function} b
 */

const solution = (num, funct) => {
  if (num === 0)  return;
  funct();
  return solution(num-1, funct);
};

module.exports = {
  solution,
};
