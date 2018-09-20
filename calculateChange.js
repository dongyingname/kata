function calculateChange(total,cash){
  var change = cash - total;
  var twenty = Math.floor(change / 20);
  var ten = Math.floor((change - 20 * twenty) / 10);
  var five = Math.floor((change - 20 * twenty - 10 * ten) / 5);
  var two =  Math.floor((change - 20 * twenty - 10 * ten - 5 * five) / 2);
  var one = Math.floor((change - 20 * twenty - 10 * ten - 5 * five - 2 * two) / 1);
  var dime = Math.floor((change - 20 * twenty - 10 * ten - 5 * five - 2 * two - one) / 0.25);
  var nickel = Math.floor((change - 20 * twenty - 10 * ten - 5 * five - 2 * two - one- 0.25 * dime) / 0.05);
  var penny = Math.floor((change - 20 * twenty - 10 * ten - 5 * five - 2 * two -one - 0.25 * dime - 0.05 * nickel) / 0.01);
  var arrayProp = ["twentyDollar","tenDollar","fiveDollar","twoDollar","oneDollar","dime","nicel","penny"];
  var size = arrayProp.length;
  var arrayNum = [twenty,ten,five,two,one,dime,nickel,penny];
  var array =[];
  var count = 0;
  for (i = 0; i < size;i ++){
    if (arrayNum[i] != 0){
      array[count] = arrayProp[i] + ":" + arrayNum[i];
      count ++;
    }
  }

  return array;
}
/*
I considered total and cash were in dollars.
The function I created work but didn't quite match the given criteria, where both input were supposed to be cents.
*/
console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));