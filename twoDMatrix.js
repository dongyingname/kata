/*
this is an exercise on creating a 2 d matrix.
*/
var mA=[];
 mA[1] = [];
 mA[5] = [];
 mA[5][1] = 3;

console.log(mA);
var matrix = [];

var H= 10;
var W= 7;// a 7 * 10 matrix



for ( var y = 0; y < H; y++ ) {
    matrix[ y ] = [];
/*
matrix[a][b] where a represents row and b represents row a's b th element
*/
    for (var x = 0; x < W; x++) {
        matrix[ y ][ x ] = x + y;
    }
}

//matrix = matrix.join('\n');
console.log(matrix);

