/*
A wristband can have 4 patterns:

horizontal: each item in a row is identical.
vertical: each item in a column is identical.
diagonal left: each item is identical to the one on it's upper left or bottom right.
diagonal right: each item is identical to the one on it's upper right or bottom left.
You are shown an incomplete section of a wristband.

Write a function that returns true if the section can be correctly classified into one of the 4 types, and false otherwise.

Examples
isWristband([
 ["A", "A"],
 ["B", "B"],
 ["C", "C"]
]) ➞ true 
// Part of horizontal wristband.

isWristband([
 ["A", "B"],
 ["A", "B"],
 ["A", "B"]
]) ➞ true 
// Part of vertical wristband.

isWristband([
 ["A", "B", "C"],
 ["C", "A", "B"],
 ["B", "C", "A"],
 ["A", "B", "C"]
]) ➞ true
// Part of diagonal left wristband.

isWristband([
 ["A", "B", "C"],
 ["B", "C", "A"],
 ["C", "A", "B"],
 ["A", "B", "A"]
]) ➞ true
// Part of diagonal right wristband.
*/

function isWristband(mat) {
  if(!isHorizontal(mat) && !isVertical(mat) && !isDiagonalLeft(mat) && !isDiagonalRight(mat)){
    return false
  }
  return true
}

function isHorizontal(mat){
  const rows = mat.length;
  const cols = mat[0].length;

  for(let i = 0; i < rows; i++){
    for(let j = 1; j < cols; j++){
      if(mat[i][j] != mat[i][j - 1]){
        return false;
      }
    }
  }
  // console.log("isHorizontal");
  return true;
}

function isVertical(mat){
  const rows = mat.length;
  const cols = mat[0].length;

  for(let j = 0; j < cols; j++){
    for(let i = 1; i < rows; i++){
      if(mat[i][j] != mat[i - 1][j]){
        return false;
      }
    }
  }
  // console.log("isVertical");
  return true;
}

function isDiagonalLeft(mat){
  const rows = mat.length;
  const cols = mat[0].length;

  for(let i = 1; i < rows; i++){
    for(let j = 1; j < cols; j++){
      if(mat[i][j] != mat[i - 1][j - 1]){
        return false;
      }
    }
  }
  // console.log("isDiagonalLeft");
  return true;
}

function isDiagonalRight(mat){
  const rows = mat.length;
  const cols = mat[0].length;

  for(let i = 1; i < rows; i++){
    for(let j = 0; j < cols - 1; j++){
      if(mat[i][j] != mat[i - 1][j + 1]){
        return false;
      }
    }
  }
  // console.log("isDiagonalRight");
  return true;
}

console.log(isWristband([["A", "B"], ["A", "B"], ["A", "C"], ["A", "B"]]));

exports.solution = isWristband;