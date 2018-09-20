function camelCase(string){
  string = string.split(" ")
  var size = string.length;
  var letter = "";
  var array = [];
  var testString = "";
  var newString
  for (i = 1; i < size; i ++){
    testString = string[i];
    letter = testString[0];
    letter = letter.toUpperCase();
    testString = testString.slice(1);
    newString = letter.concat(testString);
    string[i] = newString;
  }
  string = string.join("");
  return string;
}
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

