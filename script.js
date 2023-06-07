// alert('Connected');
// console.log('Connected');

// 1. Data and Variable Types

// Data types includes;
// string, number, boolean, object, array, null etc.

// Variable types includes;
// const, let and var

// === Declaration and assignment of variables ===
const name = 'Desmond';  //string
const surname = "Nwosu"; //string
let age = 15; //number
var job = 'Tutor'; //string
let married = false; //boolean i.e true or false
var height = '1.5m'; //string
let nickname = '007'; //string
const state = "Imo";



age = 16;  //reassigning a variable
// name = "Daniel"; const cannot be reassigned a new value

console.log(name);
console.log(age);

// === String Concatenation ===
console.log(name + ' ' + surname);


//Desmond Nwosu hails from Imo state and he is a 15 years old tutor

console.log(name + " " + surname + " hails from " + state 
+ " state and he is a " + age + " years old " + job);


// Template String
console.log(`${name} ${surname} hails from ${state} state and he is a ${age} years old ${job}`)

// Arithmetic Operations
console.log(12 + 2); //add
console.log(12 - 2); //substract
console.log(12 / 2); //divide
console.log(12 * 2 ); //multiply
console.log(12 ** 2); //power
console.log(12 % 7); //remainder



//Comparison and Logical Operators 

// Comparison Operators includes 
// ==    is equal to
// ===  is equivalent to
// !=   is not equal to
// !==  is not equivalent to


//Logical Operators
/* 
&&  and
||  or  
*/

// Equality and Equivalence
console.log(3 + 5 == 8); //true
console.log(3 + 5  === 8); //true
console.log(8 == "8"); //true
console.log(8 === "8"); //false

console.log("3" + "5" == 8); //false
console.log("3" + "5" === "8"); //false

console.log("3" + 5 == 8); //false
console.log("3" + 5 === 35); //false


//Inequality and Inequivalence
console.log(9 + 5 != 14 ); //false
console.log(9 + 5 !== 14 ); //false
console.log(9 + 5 != 10); //true
console.log(9 + 5 !== 10); //true
console.log(9 != "9"); //false
console.log(9 !== "9"); //true
console.log(9 + 5 != "14"); //false
console.log(9 + 5 !== "14"); //true
console.log("9" + "5" != "14"); //true
console.log("9" + "5" !== "14"); //true
console.log("9" + "5" != "95"); //false
console.log("9" + "5" !== "95"); //false
console.log("9" + "5" !== 95); //true

console.log("==== Conditional Statements ====");

// Conditional Statements
// if statement
// if else statement
// if else if statement
// ternary operator
// conditional and statement
// switch statement

if(2 + 4 === 6){
   console.log("Correct")
}else{
    console.log("Incorrect")
}


//if else if statement
if(2 + 4 === 
    6){
    console.log("1st is correct");
}else if(3 * 8 === 24){
    console.log("2nd is correct");
}else if(45 - 30 === 15){
    console.log("3rd is correct");
}else if(16 / 2 === 8){
    console.log("4th is correct");
}else{
    console.log("None is correct");
}


//Ternary Operator for if else statement
2 + 4 === 6 ? console.log("Correct") : console.log("Incorrect");

//Ternary Operator for if else if statement
2 + 4 === 6 ? console.log("1st is correct") :
3 * 8 === 24 ? console.log("2nd is correct") :
45 - 30 === 15 ? console.log("3rd is correct") :
16 / 2 === 8 ? console.log("4th is correct") :
console.log("None is correct");


//Conditional and statement
2 + 4 === 6 && console.log("Correct");


//Take Home : Switch statement


//Conditional Logical Operations
if(2 + 2 === 14 || 3 * 8 === 24){
    console.log(true);
}else{
    console.log(false);
};

if(2 + 2 === 14 && 3 * 8 === 24 ){
    console.log(true);
}else {
    console.log(false);
}

