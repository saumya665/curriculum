/**
 * biggestValue - takes in object, returns largest value
 * @param {object} obj
 * @returns {number} max
 */

const MaxValue=(arr,i=0, max=arr[0])=>{
  if (i === arr.length) {
    return max;
  }
  if (arr[i]>max) {
    max = arr[i];
  }
  return MaxValue(arr, i+1, max);
}

const solution = (obj)=>{
  values= Object.values(obj); //returns array of values of object
  return MaxValue(values);
}

module.exports = {
  solution
}
