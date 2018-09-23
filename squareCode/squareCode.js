var prompt = require("prompt-sync")();
var string = prompt("Type in a sentence without any space:");
var numCol = Math.ceil(Math.sqrt(string.length));
var numRow = Math.ceil(string.length / numCol);
var arrayOld = [];
var arrayNew = [];
var count = 0;
for(var i = 0;i < numRow;i ++){
  arrayOld[i] = [];
  for (var j = 0;j < numCol;j ++){
    arrayOld[i][j] = string[count];
    count ++;
  }
}
for(var i = 0;i < numCol;i ++){
  arrayNew[i] = [];
  for (var j = 0;j < numRow;j ++){
    arrayNew[i][j] = arrayOld[j][i];
  }
  arrayNew[i] = arrayNew[i].join('');
}
arrayNew = arrayNew.join(' ');

console.log(arrayNew);