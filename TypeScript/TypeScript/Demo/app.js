"use strict";
//--------------------Primitive Data types------------------------------
let x;
let y;
let z;
x = 7.25;
y = 69;
z = 100;
console.log("x = " + x);
console.log("y = " + y);
console.log("z  = " + z);
let a;
let b;
let c;
a = "Hello World";
b = "1";
c = `${x}`; //to embedd other data types into a string
console.log("a = " + a);
console.log("b = " + b);
console.log("c = " + c);
let bool;
bool = true;
console.log("bool = " + bool);
let result1 = null; //variable containes nothing
let result2 = undefined; //nothing has been stored yet
console.log("result1 = " + result1);
console.log("result2 = " + result2);
//------------------------Array-----------------------------------------------
var arr0 = [1, 2, 3, "hello"]; // "arr0" is name of array
console.log(arr0);
// arr0[0] + 1; //This will give an error because the arr in not exclusive for int here
var arr = [1, 2, 3]; //defined datatype of array "arr" to int
console.log(arr);
var nestArr = [["hello", 1], [2, 3], ["hello", "world"], "hello world"]; //Nested array: array inside array
console.log(nestArr);
console.log("Length: " + nestArr[3].length); //length of index 3: "hello world" i.e. 11
//---------------------Tuple-----------------------------------------------------(fixed length array)
const coord = [10, 20]; //tuple with 2 elements
console.log("coord: " + coord[1]);
const coords = [[-21, 20], [60, 20], [50, -100]];
console.log(coords);
console.log(coords[1]);
console.log(coords[1][0]);
//# sourceMappingURL=app.js.map