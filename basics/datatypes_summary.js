//JavaScript is a dynamically typed language.
// This means that the type of a variable is determined at runtime, based on the value it    holds, rather than being checked at compile time


// how data store and access us basis pr two categrization of data
// datatype two types primitive and non primitive
//  Primitive


//  7 types : String, Number, Boolearn, null, undefined, Symbol(foe making anything unique), BigInt( for handling very large value)


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false same value 
// pass symbol ka kaam hi yhi h same value pas but result ki value same nhi hota.

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
/*  type of val  result 
  undefined                   "undefined"
  null                           "object"
  boolean                        "boolean"
  number                           "number"
  string                           "string"
  object(native and does               "object"
   not implement[call])

   object(nativeor host and does   "function"
   implement[call])

    object(host and does not implement[call])   
    
    
    implementation   defined  expect may not 
                                     be    "undefined", "boolean"'
                                     "number or "string"
    
  







*/ 