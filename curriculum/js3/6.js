/*
 * filter - takes in an object and a function. Return a new object
 * with key/value if the function returns true.
 * Example:
 * input: {5:'blah blah',name:'ho', zolo:'4thech'},(k,v)=>{return v.length > 3}
 * output: {5:'blah blah', zolo:'4thech'}
 * @param {object} a
 * @param {function} b
 * @returns {object} c
*/

const solution = (obj, func, keys = Object.keys(obj),values = Object.values(obj), i=0, newObj={})=>{
  if (i === keys.length) return newObj;
  if (func(Object.entries(obj)[i]) === TRUE) {
    newObj.keys[i] = values[i]; 
  }
  return solution(obj, func, keys, values, i+1, newObj);
};

module.exports = {
  solution,
};
