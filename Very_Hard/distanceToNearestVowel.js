/*
WWrite a function that takes in a string and for each character, returns the distance to the nearest vowel. If the character is a vowel itself, return 0.

Examples
distanceToNearestVowel("aaaaa") ➞ [0, 0, 0, 0, 0]

distanceToNearestVowel("babbb") ➞ [1, 0, 1, 2, 3]

distanceToNearestVowel("abcdabcd") ➞ [0, 1, 2, 1, 0, 1, 2, 3]

distanceToNearestVowel("shopper") ➞ [2, 1, 0, 1, 1, 0, 1]
Notes
All input strings will contain at least one vowel.
Strings will be lowercased.
Vowels are: a, e, i, o, u.
*/

function distanceToNearestVowel(str) {
  const vowelMap = getVowelMap(str);
  const res = [];
  for(let c in str){
    if(Object.keys(vowelMap).includes(str[c])){
      res.push(0);
    }
    else{
      res.push(findMinDistance(vowelMap,c,str))
    }
  }
  return res;
}

function findMinDistance(vowelMap,c,str){
  let minDist = str.length;
  for(let vowel of Object.keys(vowelMap)){
    for(let i in vowelMap[vowel]){
      let curDist = Math.abs(c - vowelMap[vowel][i])
      if(curDist < minDist){
        minDist = curDist;
      }
    }
  }
  return minDist;
}

function getVowelMap(str){
  const vowelMap = {a:[],e:[],i:[],o:[],u:[]};
  for(let c in str){
    if(Object.keys(vowelMap).includes(str[c])){
      vowelMap[str[c]].push(c);
    }
  }
  return vowelMap;
}

exports.solution = distanceToNearestVowel;
