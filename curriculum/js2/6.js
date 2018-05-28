/**
 * Given an array, return a new array of numbers larger than 5
 * @param {array} a
 * @returns {array}
 */

const solution = (a,i=0, newarr=[]) => {
  if(i===a.length){
    return newarr;
  }
  if (a[i]>5) {
    newarr.push(a[i]);
  }
  return solution(a,i+1, newarr);
};

module.exports = {
  solution,
};
