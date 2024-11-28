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

var arr: number[]; //defined datatype of array "arr" to int
arr    = [1, 2, 3]; 
console.log(arr);

var nestArr = [["hello", 1, 3], [2, 3], ["hello", "world"], "hello world"]; //Nested array: array inside array
console.log(nestArr);
console.log("Length: " + nestArr[3].length); //length of index 3: "hello world" i.e. 11




//---------------------Tuple-----------------------------------------------------(fixed length array)-----------------

const coord: [number, number] = [10, 20]; //tuple with 2 elements
console.log("coord: " + coord[1]);

const coords: [number, number][] = [[-21, 20], [60, 20], [50, -100]]; //Tuples inside array
console.log(coords); //print all tuples
console.log(coords[1]); //print 2nd tuple
console.log(coords[1][0]); //print 1st element on 2nd tuple





//-----------------------Literals--------  ---------------(textual repesentation (notation) of a value as it is written in the source code)--------------

let direction: "north" | "south" | "east" | "west"; // We can only assign thses literals ("north" , "south" , "east" , "west") to the variable "direction"
direction = "north";
// direction = "hello"; // (hello is not assignable to type '"north" | "south" | "east" | "west"') hence will throw an error
console.log(direction);

let responseCode: 200 | 404 | 201;
responseCode = 404;
console.log(responseCode);

let bool1: true;
bool1 = true;
console.log(bool1);





//-------------------------------Enums--------------------------------------- "Enumeration" (enables developers to establish a collection of named constants (enumerators), each linked with an integer value)-----------------------

enum Size {
    Small = 100,
    Medium = 500,
    Large = 1000
}

var companySize: Size = Size.Large; // Assigning the `Large` enum member of `Size` to `companySize` (type-safe and descriptive).
var companySize1: Size = 500; // Assigning the numeric value `500`, which corresponds to `Size.Large`, directly to `companySize1` (less descriptive and potentially error-prone).

console.log(companySize);
console.log(companySize1);


if (companySize == Size.Large) {
    console.log("The company size is 'Large' and the number of employs are " + "'" + companySize + "+'");
} else if (companySize == Size.Small) {
    console.log("The company size is 'Small' and the number of employs are " + "'" + companySize + "+'");
}
else {
    console.log("The company size is 'Medium' and the number of employs are " + "'" + companySize + "+'");
}




enum Validation {
    emailField = "'@' symbol should be present",

    passwordFieldBasic = "At least 8 characters is required",

    passwordFieldAdvanced = `Password must meet the following requirements:
    - At least 8 characters in length.
    - Contains at least one uppercase letter(A-Z).
    - Contains at least one lowercase letter(a-z).
    - Contains at least one number(0-9).
    - Contains at least one special character(!@#$ %^&*).
    - Does not contain spaces.`
}

console.log(Validation.passwordFieldAdvanced);




//----------------------Any Type-----------------------------------------------(We use 'any type' typically when you're  in a very complex situation and you'r not able to predict what the type of the variables gonna be)--------------------

let value1: any = 1; // Avoid using "any" if you can.



//----------------------------Unknown Type----------------(is a type which is safe counterpart to the "any type")-------------------
//---------------------("Unknown Type" provides a powerful way to handle values of uncertain types while maintaining type safety)

let value2: unknown = 10;
// console.log(value2 + 1); This will throw an error because type is unknown.

if (typeof value2 == "number") {
    console.log(value2++);
}
else if (typeof value2 == "string") {
    console.log(value2.length);
}
//else { This will also throw an error because type is unknown.
//    value2--;




//------------------------------Type Casting---------------------------------------------------------

let value3: unknown = 100;
// Casting `value3` to a number allows us to safely perform arithmetic operations.
console.log((value3 as number) + 1); // Casts `value3` as a number and adds 1 successfully.

// console.log(value3 + 1); would throw an error because `value3` is of type `unknown`
// and cannot be used in arithmetic operations without "explicit" casting.
// console.log(value3 + 1);






