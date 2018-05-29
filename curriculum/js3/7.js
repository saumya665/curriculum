/*
 * findGreatest - Takes in the first node of a
 *     linked list, return the greatest number
 * Example:
 * input:
 *    a = {v: 2};
 *    b = {v: 3};
 *    c = {v: 1};
 *    a.next = b;
 *    b.next = c;
 *    solution(a);
 * output: 3
 * @param {object} node
 * @returns {number}
*/

const solution = (a, max=a.v)=>{
  if (!a.next) return max;
  if (a.v > max) {
    max = a.v
  }
  return solution(a.next, max);
};


module.exports = {
  solution,
};
