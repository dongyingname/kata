function conditionalSum(values, condition) {
  var output = 0;
  var size = values.length;
  if (values[0] == undefined || !Number.isInteger(values[0])){
    output = 0;
  }
  else if (condition == "even"){
    for (var i = 0; i < size; i ++){
      if (values[i] % 2 == 0){
        output += values[i];
      }
    }
  }
  else if (condition == "odd"){
    for (var j = 0; j < size;j ++){
      if (values[j] % 2 != 0){
        output += values[j];
      }
    }
  }
return output;
}
/////////////////////////////////////////////
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));