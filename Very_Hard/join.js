/*
Write a function that connects each previous word to the next word by the shared letters. Return the resulting string (removing duplicate characters in the overlap) and the minimum number of shared letters across all pairs of strings.

Examples
join(["oven", "envier", "erase", "serious"]) ➞ ["ovenvieraserious", 2]

join(["move", "over", "very"]) ➞ ["movery", 3]

join(["to", "ops", "psy", "syllable"]) ➞ ["topsyllable", 1]

// "to" and "ops" share "o" (1)
// "ops" and "psy" share "ps" (2)
// "psy" and "syllable" share "sy" (2)
// the minimum overlap is 1

join(["aaa", "bbb", "ccc", "ddd"]) ➞ ["aaabbbcccddd", 0]
Notes
More specifically, look at the overlap between the previous words ending letters and the next word's beginning letters.
*/

function join(strList) {
  let minOverlap;
  let res = strList[0];
  for(let i = 1; i < strList.length; i++){
    let currOverlap = 0;
    let lStr = strList[i-1];
    let rStr = strList[i];
    let l = 0;
    let r = 0;
    while(lStr[l] !== rStr[r]){
      l++;
    }
    while(lStr[l] === rStr[r]){
      currOverlap++;
      l++;
      r++;
    }
    minOverlap = Math.min(minOverlap,currOverlap);
    res += rStr.slice(r);
  }
  return res;
}

//doesnt work

console.log(join(["oven", "envier", "erase", "serious"]));

exports.solution = join;