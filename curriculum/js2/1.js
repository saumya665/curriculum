/**
 * Given an array, return the same array where
 *   all elements <= 5 are changed to 0
 * @param {array} a
 * @returns {array}
 */

const solution = (a,i=0) => {
  if(i==a.length){
    return a;
  }
  if(a[i]<=5){
    a[i]=0;
  }
  return solution(a,i+1);
};


module.exports = {
  solution,
};
