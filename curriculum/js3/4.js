/*
 * xpair - takes in array and a number, return true if any pairs add
 * up to the number.
 * @param {array} a
 * @param {number} b
 * @returns {boolean}
 */

const solution = (arr, num, i=0)=>{
  if (i === arr.length-1) return false;
  const innerLoop=(arr, num, j=i+1)=>{
    if (j === arr.length) return solution(arr,num,i+1);
    if (arr[i] +arr[j] === num) return true; 
    return innerLoop(arr, num, j+1);
  };
  return innerLoop(arr, num, i);
};

module.exports = {
  solution,
};
