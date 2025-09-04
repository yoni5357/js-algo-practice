/*
Write a function that sorts array while keeping the array structure. Numbers should be first then letters both in ascending order.

Examples
numThenChar([
 [1, 2, 4, 3, "a", "b"],
 [6, "c", 5], [7, "d"],
 ["f", "e", 8]
]) ➞ [
 [1, 2, 3, 4, 5, 6],
 [7, 8, "a"],
 ["b", "c"], ["d", "e", "f"]
]

numThenChar([
 [1, 2, 4.4, "f", "a", "b"],
 [0], [0.5, "d","X",3,"s"],
 ["f", "e", 8],
 ["p","Y","Z"],
 [12,18]
]) ➞ [
 [0, 0.5, 1, 2, 3, 4.4],
 [8],
 [12, 18, "X", "Y", "Z"],
 ["a", "b", "d"],
 ["e", "f", "f"],
 ["p", "s"]
]
Notes
Test cases will containg integer and float numbers and single letters.
*/

function numThenChar(arrs) {
  const sorted = flatenSort(arrs);
  let k = 0;
  for (let i = 0; i < arrs.length; i++){  
    for(let j = 0; j < arrs[i].length;j++){
      arrs[i][j] = sorted[k];
      k++;
    }
  }
  return arrs;
}

function flatenSort(arrs){
  const flatArr = arrs.flat();
  flatArr.sort((a,b) => {
    if(typeof a === "number" && typeof b === "number"){
      return a-b;
    }
    else if(typeof a === "string" && typeof b === "number"){
      return 1;
    }
    else if(typeof a === "number" && typeof b === "string"){
      return -1;
    }
    else{
      return a.charCodeAt(0)-b.charCodeAt(0);
    }
  })
  return flatArr;
}

console.log(numThenChar( [[1, 2, 4, 3, "a", "b"],
 [6, "c", 5], [7, "d"],
 ["f", "e", 8]]));

exports.solution = numThenChar;