/*
Write a function that accepts an integer N and returns an N * N spiral matrix.

Examples
matrix(2) ➞ [
  [1, 2],
  [4, 3]
]

matrix(3) ➞ [
  [1, 2, 3],
  [8  ,9, 4],
  [7, 6, 5]
]

matrix(4) ➞ [
  [1,   2,  3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10,  9,  8, 7]
]
*/

function matrix(n) {
  const resMat = Array.from({ length: n }, () => Array(n).fill(0));
  let k = 2;
  let i = 0;
  let j = 0;
  let direction = "right";
  resMat[0][0] = 1;
  if(n === 1){
    return [1];
  }
  while(k <= n*n){
    [i,j] = move(direction,i,j);
    if(!isValid(resMat,i,j)){
      if(direction == "right"){
        j--;
        direction = "down";
        [i,j] = move(direction,i,j);  
      }
      else if(direction ==="down"){
        i--;
        direction = "left";
        [i,j] = move(direction,i,j);
      }
      else if(direction === "left"){
        j++;
        direction = "up";
        [i,j] = move(direction,i,j);
      }
      else if(direction === "up"){
        i++;
        direction = "right";
        [i,j] = move(direction,i,j);
      }
    }
    resMat[i][j] = k++;
  }
  return resMat;
}

function isValid(mat,i,j){
  if(i >= mat.length || j >= mat[0].length || mat[i][j] != 0){
    return false;
  }
  return true;
}

function move(direction,i,j){
  switch(direction){
    case "right": 
      i = i;
      j += 1;
      break
    case "down":
      i += 1;
      j = j;
      break
    case "left":
      i = i;
      j -= 1;
      break
    case "up":
      i -= 1;
      j = j;
      break;
  }
  return [i,j];
}

console.log(matrix(3));

exports.solution = matrix;