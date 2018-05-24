/**
 * Greatest Common Denominator - returns greatest common denominator
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

const solution = (a, b) => {
  if(i>=a || i>=b){
    return i;
  }
  if(a%i==0 && b%i==0){
    return i;
  }
};

module.exports = {
  solution,
};
