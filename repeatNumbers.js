function repeatNumbers(input){
  var arrayB=[];
  var arrayC=[];
  var inputSize=input.length;
  for (var i = 0;i < inputSize;i ++){
    for (var j = 0;j < input[i][1]; j ++){
      arrayB.push(input[i][0]);
    }
    arrayC[i]=arrayB.join("");
    arrayC[i]=parseInt(arrayC[i], 10);

    arrayB=[];
   }
  arrayC=arrayC.join(', ');
  return arrayC;
 }
 ///////////////////////////////////////////////////////
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));


