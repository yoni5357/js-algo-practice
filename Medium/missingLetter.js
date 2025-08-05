/*
What's the Missing Letter?
Given a string of letters in the English alphabet, return the letter that's missing from the string. The missing letter will make the string be in alphabetical order (from A to Z).

If there are no missing letters in the string, return "No Missing Letter".

Examples
missingLetter("abdefg") ➞ "c"

missingLetter("mnopqs") ➞ "r"

missingLetter("tuvxyz") ➞ "w"

missingLetter("ghijklmno") ➞ "No Missing Letter"
Notes
The given string will never have more than one missing letter.
*/

function missingLetter(str) {
  const abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let firstChar = str.charAt(0);
  let abcIndex = abc.indexOf(firstChar);
  for(let i = 0; i < str.length; i++){
    if(abc[abcIndex] !== str.charAt(i)){
      return abc[abcIndex];
    }
    abcIndex += 1;
  }
  return "No Missing Letter";
}

exports.solution = missingLetter;