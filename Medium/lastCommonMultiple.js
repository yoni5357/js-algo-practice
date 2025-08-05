/*
Write a function that returns the least common multiple (LCM) of two integers.

Examples
lcm(9, 18) ➞ 18

lcm(8, 5) ➞ 40

lcm(17, 11) ➞ 187
Notes
Both values will be positive.
The LCM is the smallest integer that divides both numbers such that the remainder is zero.
*/

function lastCommonMultiple(a,b) {
  // if (a % b === 0 || b % a === 0){
  //   return Math.max(a,b);
  // }
  // else{
  //   return a * b;
  // }
  let bigger = Math.max(a,b);
  let smaller = Math.min(a,b);
  let lcm = smaller;
  while(lcm % bigger){
    lcm += smaller;
  }
  return lcm;
}

exports.solution = lastCommonMultiple;
