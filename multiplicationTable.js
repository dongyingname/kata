function multiplicationTable(num){
  var size = num.length;
  var matrix = [];
  var h = 4 * num;
  var w = 5 * num;
  for (var y = 0;y <= h;y ++){
    matrix[y] = []; // have to define row before assigning element to it
    if (y % 4 == 0){
      for (var x = 0; x <= w;x ++){
        if (x % 5 == 0){
          matrix[y][x] = '+';
        }
        else{
          matrix[y][x] = '-';
        }
      }
      matrix[y] = matrix[y].join('');
    }
    else if (y % 4 == 2){
      for (var x = 0;x <= w; x ++){
        if (x % 5 == 0){
          matrix[y][x] = '|';
        }
        else if (x % 5 == 3){
          matrix[y][x] = (Math.floor(x / 5) + 1) * (Math.floor(y / 4) + 1);
         /// matrix[y][x]= matrix[y][x].toString(); tried to used this to modify the number of elements so number fit
        }
        else{
          matrix[y][x] = " ";
        }
      }
      matrix[y] = matrix[y].join('');
    }
    else{
      for (var x = 0;x <= w; x ++){
        matrix[y][x] = ' ';
      }
      matrix[y] = matrix[y].join('');
    }
  }

  matrix = matrix.join('\n');
  return matrix;
}

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));