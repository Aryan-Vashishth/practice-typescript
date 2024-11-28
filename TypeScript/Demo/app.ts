//--------------------Primitive Data types------------------------------

let x: number;
let y: number;
let z: number;

x = 7.25;
y = 69;
z = 100;

console.log("x = " + x);
console.log("y = " + y);
console.log("z  = " + z);

let a: string;
let b: string;
let c: string;

a = "Hello World";
b = "1";
c = `${x}`; //to embedd other data types into a string

console.log("a = " + a);
console.log("b = " + b);
console.log("c = " + c);

let bool: boolean;
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

var arr: number[] = [1, 2, 3]; //defined datatype of array "arr" to int
console.log(arr);

var nestArr = [["hello", 1, 3], [2, 3], ["hello", "world"], "hello world"]; //Nested array: array inside array
console.log(nestArr);
console.log("Length: " + nestArr[3].length); //length of index 3: "hello world" i.e. 11


//---------------------Tuple-----------------------------------------------------(fixed length array)

const coord: [number, number] = [10, 20]; //tuple with 2 elements
console.log("coord: " + coord[1]);

const coords: [number, number][] = [[-21, 20], [60, 20], [50, -100]]; //Tuples inside array
console.log(coords); //print all tuples
console.log(coords[1]); //print 2nd tuple
console.log(coords[1][0]); //print 1st element on 2nd tuple