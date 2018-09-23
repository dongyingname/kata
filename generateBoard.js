function generateBoard(whiteQueen,blackQueen){
 var array = [];
 for (var i = 0;i < 8;i ++){
  array[i] = [];
  for (var j = 0;j < 8;j ++){
    if (i == whiteQueen[0] && j == whiteQueen[1]){
      array[i][j] = 1;
    }
    else if (i == blackQueen[0] && j == blackQueen[1]){
      array[i][j] = 1;
    }
    else{
      array[i][j] = 0;
    }
  }
 }
return array;
}
function queenThreat(whiteQueen,blackQueen){
  var diffX = Math.abs(whiteQueen[0] - blackQueen[0]);
  var diffY = Math.abs(whiteQueen[1] - blackQueen[1]);
  if (diffX == diffY){
    return true;
  }
  else{
    return false;
  }
}
//console.log(generateBoard([0, 0],[7, 5]));
//console.log(queenThreat([0, 0],[7, 5]));