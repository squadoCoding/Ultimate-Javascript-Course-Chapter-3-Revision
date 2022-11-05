// Chapter-3: Loops and Functions in Javascript
// Loops: We basically use loops to execute a piece of code repeatedly.
// For example if we are assigned a task of printing numbers 1-100 to the console, then we can use loops to do this without copy-pasting 100 console logs.

// We have the following types of loops in javascript
/*
1.for loops
2.while loops
3.for of loops
4.for in loops
5.do-while loops
*/

// for loops
// for (let i = 1; i <= 100; i++) {
//   console.log(`no.${i}`);
// }

// while loop
// let i = 0
// while (i < 10) {
//   console.log(i + 1);
//   i++;
// }
// Note: if the condition you given to the loop is never false then it can create a problem, it can hang you computer as it will never terminate.

// do-while loops: Even if condition is false, do-while loops execute once because it checks the condition after executing the code inside the "do" block and based on the condition decides whether it will execute the "do" block again or not.
// we use do-while loops when we want to execute the code at least once even if condition is false.
// do {
//   console.log("do-while loops executed");
// } while (false);

// let [i,num] = [0,12];

// do{
//   console.log(`${num} x ${i+1} = ${num*(i+1)}`);
//   i++;
// }while(i <10);

// Other varients of for loop (for in and for of loops)
// for in loops help us to loop through keys of an object
// const obj = {
//   name: "Siddhant",
//   favLang: "Javascript",
//   hobby: "coding",
//   class: 8,
//   roll: 19
// };

// for (let key in obj) {
//   console.log(key);
// }

// for of loops help us to loop through values of an iterable javascript object
// the following code will throw error as obj is not iterable object
// for (let value of obj) {
//   console.log(value);
// }
// the following line will work and will notthrow any error as we are looping through iterable objects
// const arr = ["hi", 5, false, null];
// const str = "I am a good boy";

// for (let item of arr) {
//   console.log(item);
// }
// for (let char of str) {
//   console.log(char);
// }

// Functions: Functions are piece of code which we and invoke anywhere in the program and use it's functionality again and again.We use functions to saperate a particular logic from the rest of the program.

// normal functions
// function will only run when it is invoked/called
// function sum(a, b, c) {
//   return a + b + c;
// }

// const mySum = sum(3, 4, 5);
// console.log(mySum);

// arrow functions
// const double = (n) => {
//   return n * 2;
// }

// const num = 50;
// const num2 = double(num);
// console.log(num2);

// A javascript function is a piece of code designed to perfrom a particular task