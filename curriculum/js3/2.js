/**
 * mostCommon - takes in array, return most common number
 * @param {array} arr
 * @return {number}
 */


const indexMax=(obj)=>{
  //return the number with largest max from object
  keys=Object.keys(obj);
  values=Object.values(obj);
 return keys[values.indexOf(Math.max(...values))];
};

const solution = (arr, i=0, mostCom={})=>{
  if (i === arr.length) return indexMax(mostCom);
  !mostCom[arr[i]] ? mostCom[arr[i]] = 1 : mostCom[arr[i]] += 1;
  return solution(arr, i+1, mostCom);
  //populate object from the array
};

module.exports = {
  solution
}
