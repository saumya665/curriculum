/*
 * repeatingElements - takes in array of numbers, return an array of all duplicate numbers.
 * @param {array} a
 * @return {array} b
 */

const findDuplicates=(obj,keys=Object.keys(obj), values=Object.values(obj), i=0, newArr=[])=>{
    if( i === values.length ) { return newArr };
    if (values[i] === 2) {
      newArr.push(keys[i]);
    }
  return findDuplicates(obj, keys, values, i+1, newArr);
  };


const solution = (arr, i=0, obj={})=>{
  // create an object from an array
  if (i === arr.length){
    return findDuplicates(obj);
  }
  !obj[arr[i]] ? obj[arr[i]] = 1 : obj[arr[i]] +=1;
  return solution(arr, i+1, obj);
};

module.exports = {
  solution
};
