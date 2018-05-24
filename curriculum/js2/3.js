/**
 * Given an array, return the same array
 *   where all elements that are not prime are changed to 1
 *   Please reuse your js1 solution
 * @param {array} a
 * @returns {array}
 */
 const isPrime=(num,i=2)=>{
    if(num<2){
      return false;
    }
    if (i === num) {
      return true
    }
    if(num%i===0){
      return false;
    }
    return isPrime(num, i+1);
  };


const solution = (a,i=0) => {
  if (i===a.length){
      return a;
  }
  if (isPrime(a[i])===true) {
     a[i]=1;
  };
  return solution(a,i+1);
};

module.exports = {
  solution,
};
