function camel(string){
  string = string.split(" ");
  var l = string.length;
  for(var i = 1; i < l; i ++){
    string[i] = string[i].split('');
    string[i][0] = string[i][0].toUpperCase();
    string[i] = string[i].join('');
 /*tried string[i][0] =string[i][0].toUpperCase() and didn't work,
needed to reform the string string[i] in to an array; then modify each letter as an element
join then together afterwards.
 */
  }
  string = string.join(" ");
  return (string);
}
//console.log(camel("this is a string"));
//////////////////////////////////////////////////////////////////
function title(string){
  string = string.split(" ");
  var l = string.length;
  for(var i = 0; i < l; i ++){
    string[i] = string[i].split('');
    string[i][0] = string[i][0].toUpperCase();
    string[i] = string[i].join('');
  }
  string = string.join(" ");
  return (string);
}
//console.log(pascal("this is a string"));
//////////////////////////////////////////////////////////////////
function snake(string){
  string = string.split(" ");
  var l = string.length;
  var newString = '';
  for(var i = 0; i < l; i ++){
    if (i != l - 1){
      newString += string[i] + '_';
    }
    else {
      newString += string[i];
    }
  }
  return (newString);
}
//console.log(snake("this is a string"));
////////////////////////////////////
function kebab(string){
  string = string.split(" ");
  var l = string.length;
  var newString = '';
  for(var i = 0; i < l; i ++){
    if (i != l - 1){
      newString += string[i] + '-';
    }
    else {
      newString += string[i];
    }
  }
  return (newString);
}
///console.log(kebab("this is a string"));
////////////////////////////////////////////////////////////
function pascal(string){
  string = title(string);
  string = string.split(" ");
  string = string.join("");
  return string;
}
///console.log(title("this is a string"));
/////////////////////////////////////////////////////////////
function vowel(string){
  string = string.split(" ");
  var l = string.length;
  var vowels = ['a','e','i','o','u'];
  var sizeVowels = vowels.length;
  for (var i = 0;i < l;i ++){
    string[i] = string[i].split('');
    var sizeSub = string[i].length;
    for (var j = 0;j < sizeSub;j ++){
      for (var k =0; k < sizeVowels; k ++){
        if (string[i][j] == vowels[k]){
          string[i][j] = vowels[k].toUpperCase();
        }
      }
    }
    string[i] = string[i].join('');
  }
  string = string.join(" ");
  return string;
}
//console.log(vowel("this is a string"));
///////////////////////////////////////
function consonant(string){
  string = string.split(" ");
  var l = string.length;
  var vowels = ['A','E','I','O','U'];
  var sizeVowels = vowels.length;

  for (var i = 0;i < l;i ++){
    string[i] = string[i].toUpperCase();
    string[i] = string[i].split('');
    var sizeSub = string[i].length;
    for (var j = 0;j < sizeSub;j ++){
      for (var k = 0; k < sizeVowels; k ++){
        if (string[i][j] == vowels[k]){
          string[i][j] = string[i][j].toLowerCase();

        }

      }
    }
    string[i] = string[i].join('');
  }
  string = string.join(" ");
  return string;
}
//////////////////////////////////
function upper(string){
  string = string.split(" ");
  var l = string.length;
  for (var i = 0;i < l;i ++){
    string[i] = string[i].toUpperCase();
  }
  string = string.join(" ")
  return string;
}
///console.log(upper("this is a string"));
////////////////////////////////////////
function lower(string){
   string = string.split(" ");
  var l = string.length;
  for (var i = 0;i < l;i ++){
    string[i] = string[i].toLowerCase();
  }
  string = string.join(" ")
  return string;
}
///console.log(lower("SKJADBJASBDK"));
/////////////////////////////////////////
function  makeCase(string,command){
  var ifArray = command.length == 2;
  if (ifArray){
      switch (command[0]){
        case "title":
          string = title(string);
        break;
        case "vowel":
          string = vowel(string);
        break;
        case "consonant":
          string = consonant(string);
        break;
        case "upper":
          string = upper(string);
        break;
        case "vowel":
          string = upper(string);
        break;
      }
      switch (command[1]){
        case "snake":
          string = snake(string);
        break;
        case "kebab":
          string = kebab(string);
        break;
      }
    }
  else {
    switch (command){
      case "camel":
          string = camel(string);
        break;
        case "pascal":
          string = pascal(string);
        break;
       case "title":
          string = title(string);
        break;
        case "vowel":
          string = vowel(string);
        break;
        case "consonant":
          string = consonant(string);
        break;
        case "upper":
          string = upper(string);
        break;
        case "vowel":
          string = upper(string);
        break;
        case "snake":
          string = snake(string);
        break;
        case "kebab":
          string = kebab(string);
        break;
      }

  }
return string;
}
/*my makeCase function only works in the following condition:
if the case input is a 2-element matrix, neither of the elements can be vowel or pascal as they don't make sense in this case;
the snake or kebab case cant be put in as the 1st element and can only be put in as the second.

*/
console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));