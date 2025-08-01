/*
Create a function that takes a string and returns dashes on the left and right side of every vowel (a e i o u).

Examples

dashed("Carpe Diem") ➞ "C-a-rp-e- D-i--e-m"

dashed("Fight for your right to party!") ➞ "F-i-ght f-o-r y-o--u-r r-i-ght t-o- p-a-rty!"
Notes
A string can contain uppercase and lowercase vowels.
*/

function dashed(sentence) {
  let res = ""
  let vowls = new Set(["a","e","i","o","u","A","E","I","O","U"])
  for(let i = 0; i < sentence.length; i++){
    if(vowls.has(sentence[i])){
      res += "-" + sentence[i] + "-"
    }
    else{
      res += sentence[i]
    }
  }
  return res
}

exports.solution = dashed;