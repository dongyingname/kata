function multiplicationTable(num){
  var matrix = [];
  var width = num * 6;
  var height = num * 4;
  var matrix = [];
      H = height;
      W = width;
  for (var y = 0; y < height; y ++){
    matrix[y] = [];
    for (var x = 0; x < width; x ++){
      if (y % 4 == 0){
        if (x % 6 == 0){
          matrix[y][x] = '+';
        }
        else{
          matrix[y][x] = '-';
        }
      }
      else if (y % 2 == 1){
        matrix[y][x] = " ";
      }
      else if (y % 4 == 2){
        if (x % 6 == 2){
          matrix[y][x] = (Math.floor(x / 6) + 1) * Math.floor(y / 4);
        }
      }
    }
  }
  matrix=matrix.join();
  return matrix;
};


console.log(multiplicationTable(5));