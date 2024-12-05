

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
arr = [1, 2, 3];
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




//------------------------------------Optional Chaining ("Question mark" '?')-------------------------------------------------------
//                 (allows us to check and deadl with undefined values within Typescript)

const arr1 = [{ name: "Tim" }, { name: "Joe" }, { name: "Ray" }];

const el = arr1.pop(); // ".pop() removes/returns the last element from the array"
console.log(el);

//const el2 = arr1.pop().name; // this will throw an error as value inside the "name" property of last element/object could possibly be undefined

const el2 = arr1.pop()?.name;
console.log(el2);
// The ?. operator checks whether the value before it is null or undefined before trying to access a property or method.
// If the value is null or undefined, it prevents further access and evaluates to undefined instead of throwing an error.
// In this case, ?.name safely attempts to access the name property of the object returned by pop().








//-------------------------------------------Bang ("Exclamation point" '!')------------------------------------------------------------

const el3 = arr1.pop()!.name;
// Tells TypeScript to ignore null or undefined checks for the result
// Only use ! if you can guarantee the value won't be null or undefined
console.log(el3);






//------------------------------------------------Basic Function Types---------------------------------------------------------------------



//==========================Example of a basic function that adds two numbers=============================================>>

function add(x: number, y: number): number /* |string */{  
    return x + y;
    
    // if(x == 0 && y == 0){ 
    //     return "invalid";  //---------> This will throw an error as we are expecting the function to return a "number".
    // }
}
const result = add(50, 100);
console.log(result);





//============================Basic function to make a name==========================================================>>


function makeName(firstName: string, lastName: string, middleName?: string){
    // The "?" after middleName marks it as an optional parameter.
    // This allows the function to be called with or without a middleName.

    if (middleName){ 
        return firstName + " " + middleName + " " + lastName;
    }
    else{
        return firstName + " " + lastName;
    }
}

const fullName = makeName("Stephen", "Hawking");
console.log(fullName);


function callFunc(  //callFunc take 4 parametres 
    func: (f: string, l: string, m?: string) => string, 
    // First parameter name is "func" which a function itself that matches a particular type signature
    // func - A function that takes 2 required strings (f and l) and an optional third string (m), and returns a string.

    param1: string, // string to pass as the 1st argument.
    param2: string, // string to pass as the 2nd argument.
    param3?: string // string to pass as the 3rd argument.
){
    // Usage=>
    console.log(func(param1, param2, param3));
    // "func" is the function parameter passed to callFunc.
    // This line calls the function func with param1, param2, and param3 as its arguments. 
}
callFunc(makeName, "Dr", "Albert", "Einstein"); // callFunc is called and done its job.





//======================Basic function to perform different mathematical operations==============================================================================>>


// Define a multiplication function that takes two numbers and returns their product
function mul(x: number, y: number): number {
    return x * y;
}

// Define a division function that takes two numbers and returns the quotient
function div(x: number, y: number): number {
    return x / y;
}

// Define a subtraction function that takes two numbers and returns the difference
function sub(x: number, y: number): number {
    return x - y;
}

// Define a function to apply an array of functions to their respective value pairs
function applyFunc(
    funcs: ((a: number, b: number) => number)[], // Array of functions that take two number arguments and return a number
    values: [number, number][] // Array of pairs of numbers to use as arguments for the functions
): number[] {
    // Initialize an empty array to store the results
    const results = [] as number[];

    // Loop through each function in the funcs array
    for (let i = 0; i < funcs.length; i++) {

        // Debug statement: Log the length of the funcs array on the first iteration
        if (i == 0) { 
            console.log("func Length: " + funcs.length);
        }

        // Extract the argument pair from the values array
        const args = values[i];

        // Apply the current function to the current pair of arguments
        const result = funcs[i](args[0], args[1]);

        // Store the result in the results array
        results.push(result);
    }

    // Return the array of results
    return results;
}

// Example usage of applyFunc
console.log(applyFunc(
    [mul, div, add, sub], // Array of functions to apply
    [
        [2, 2],        // Arguments for the multiply function
        [100, 25],     // Arguments for the divide function
        [50, 50],      // Arguments for the add function (Refer to the first line of "Basic Function Types")
        [1000, 1000],  // Arguments for the subtract function
    ]
));
