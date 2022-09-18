
// "use strict";

(function() {

    // Promise.resolve('message').then((m) => console.log(m))
    // console.log('m')

// Problem - Swap two variables without using 3rd variable
let swapA = 10;
let swapB = 6;
// This is one way
swapB = [swapA, swapA = swapB][0];

// ES6 approach using array destructuring.
// [swapA, swapB] = [swapB, swapA];
// console.log(swapA, swapB);

// ***************************************// End //************************************** //


// Problem - loop through multi dimentional array.
const multiDimentionalArray = [['Satish', 'Bhutagadda'], ['Konala', 'Satish'], ['Madhurima', 'Bhutagadda']];

function loopMultiDimentionalArray(arr) {
    for(let [firstName, lastName] of arr){
        console.table('Full Name:', `${firstName} ${lastName}`);
    }
}

// console.log(loopMultiDimentionalArray(multiDimentionalArray));

// ***************************************// End //************************************** //

function log(...args){
    return console.log(...args)
}

// scope question with var i vs let i
// let variable decaration is now virtually declared inside the for loop body 
// and each iteration gets it's own brand new variable declared by the let keyword.
// every new value is getting captured inside the closer scope of settimeout function.
for(let i = 1; i<5; i++){
    setTimeout(() => {
        // console.log(i);
    }, 1000);
}

// ***************************************// End //************************************** //

// deep compare object function

const compareObj1 = {
    a: 'aa',
    b: 'bb'
}

const compareObj2 = compareObj1;

function _compareObj(a, b) {
    for(let i= 0; i < Object.keys(a).length; i++){
        let isMatched = true;
        console.log(i);
        // length comparison
        if(Object.keys(a).length !== Object.keys(b).length) {
            isMatched = false;
            break;
        }
        // keys comparison
        const aKeys = Object.keys(a);
        const bKeys = Object.keys(b);
        if(aKeys[i] !== bKeys[i]){
            isMatched = false;
            break;
        }
        // values comparison
        if(a[aKeys[i]] !== b[bKeys[i]]){
            isMatched = false;
            break;
        }
        // console.log(a[aKeys[i]], b[bKeys[i]])
    }
}
// _compareObj(compareObj1, compareObj2);

// ***************************************// End //************************************** //

// Write a "mul" function which will properly when invoked as below syntax

// Problem

// console.log(mul(2)(3)(4)); // output : 24
// console.log(mul(4)(3)(4)); // output : 48

// Answer
function mulFunction (x) {
    return function (y) { // anonymous function
        return function (z) { // anonymous function
        return x * y * z;
        };
    };
}

// ***************************************// End //************************************** //

// Problem
// Write a function that would allow you to do this?

// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27

// Answer
function createBase(baseValue){
    return function(innerValue){
        console.log(baseValue+innerValue);
    }
}

// ***************************************// End //************************************** //

// FizzBuzz Challenge

// Problem
// Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.

// Answer
for(let fizzVar = 1; fizzVar <= 100; fizzVar++){
    let f = fizzVar % 3 == 0,
    b = fizzVar % 5 == 0;
    // console.log(f ? (b ? 'FizzBuzz' : 'Fizz') : b ? 'Buzz' : fizzVar);
}

// ***************************************// End //************************************** //

// Problem
// Given two strings, return true if they are anagrams of one another

// For example: Mary is an anagram of Army

// Answer

const mary = 'Mary';
const army = 'Army';
// console.log(isAnagram(mary, army));
function isAnagram(firstWord, secondWord){
    firstWord = firstWord.toLowerCase();
    secondWord = secondWord.toLowerCase();
    
    firstWord = firstWord.split('').sort().join('');
    secondWord = secondWord.split('').sort().join('');
    
    return firstWord == secondWord;
}

// ***************************************// End //************************************** //
// Problem
// How would you use a closure to create a private counter?

// Answer
function counter(defaultValue){
    return {
        incrementBy: function(val){
            defaultValue += val;
            return this;
        },
        decrementBy: function(val){
            defaultValue -= val;
            return this;
        },
        couterValue: function(){
            return defaultValue;
        }
    }
}

// const _counter = counter(10);
// _counter.incrementBy(1).decrementBy(10).incrementBy(100);
// console.log(_counter.couterValue())

// ***************************************// End //************************************** //

// Problem
// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

// Answer //Used function recurtion
// let val = 0;
// function sumTo(n){
//     if(n !== 0){
//         val = val + n;
//         sumTo(n - 1);
//         return val;
//     }
// }
// ----------------
// function sumTo(n){
//     if(n == 1) {
//         return 1
//     } else {
//         return n + sumTo(n - 1);
//     }
// }

// console.log(sumTo(4));

// ***************************************// End //************************************** //
// Problem
// Check repeated item and log how many times it's got repeated

// Answer
const repeatedArray = [1,2,3,5,6,7,2,6,3, 3, 3];

function logRepeats(srcArray){
    const outputObj = srcArray.reduce((accumulator, currentVal) => {
        accumulator[currentVal.toString()] = accumulator.hasOwnProperty(currentVal) ? ++accumulator[currentVal] : accumulator[currentVal.toString()] = 1;
        return accumulator;
    }, {});
    const mostRepeatedNumber = Object.keys(outputObj).find((key, i) => outputObj[key] == Math.max(...Object.values(outputObj)))
    return mostRepeatedNumber;
}

// console.log(logRepeats(repeatedArray));

// ***************************************// End //************************************** //
// Problem
// Find the missing numbers from 1 - 10

// Answer
const oneToTen = [1,9,3,4];

function findMissingNumbers(sortedArray){
  sortedArray = sortedArray.sort((a, b) => a-b);
  const missingNumbers = new Array();
  for(let i = 1; i <= sortedArray[sortedArray.length - 1]; i++){
    if(sortedArray.indexOf(i) === -1) {
      missingNumbers.push(i)
    }
  }
  return missingNumbers; 
}

// console.log(findMissingNumbers(oneToTen))

// ***************************************// End //************************************** //
// Problem
// Swapping two variables without using 3rd variable

let a = 10;
let b  = 15;

// Answer
a = a+b
b = a - b
a = a - b
// console.log(a, b)

// ***************************************// End //************************************** //
// Problem
// Bubble sort implementation

// Answer
function bubbleSort(array){
    for(let i = 0; i < array.length - 1; i++){
        console.log('i', i);
        for(let j = 0; j < array.length - i - 1; j++){
            console.log('j', j);
            // 3 > 2
            if(array[j] > array[j+1]){
                // 2 - 3 ----- 3 - 2 
                [array[j+1], array[j]] = [array[j], array[j+1]]
            }
        }
    }
    console.log(array)
    return array
}
// bubbleSort(oneToTen);

// ***************************************// End //************************************** //
// Problem
// Write a pure function that accepts list of strings, returns of the longest string. Use no loops

// Answer with for loop
// function longestString(array){
//     let longestStr = '';
//     for(let i = 0; i < array.length; i++){
//         if(array[i].length > longestStr.length){
//             longestStr = array[i]
//         }
//     }
//     return longestStr;
// }
// Answer without for loop
function longestString(array){
    return array.reduce((accumulator, str, i) => {
        if(str.length > accumulator.length){
            accumulator = str;
        }
        return accumulator;
    }, '');
}

// console.log(longestString(['fasdf', 'fasdfsadf', 'fsf', 'iepqiep']))

// ***************************************// End //************************************** //

// Problem
// Write a generator using a higher order function and closure.

// Answer
function infinite(){
    let i = 0;
    return function(){
        return i++
    }
}
const generator = infinite();
// console.log(generator());

// ***************************************// End //************************************** //

// Problem
// write a generator using a higher order function that will generate integers starting at 'from' and going up to a 'to' value.
// Once the 'to' value has been generated, the generator will return undefined.

// Answer
function range(from, to){
    return function(){
        return from < to ? ++from : undefined
    }
}
const r = range(5, 10);
// console.log(r());
// console.log(r());
// console.log(r());
// console.log(r());
// console.log(r());

// ***************************************// End //************************************** //

// Problem
// Write a sumUp method with mathematical equations, use no loops

// Answer
function sumUp(n) {
    return (n / 2) * (1 + n);
}
// console.log(sumUp(4))

// ***************************************// End //************************************** //

// Problem
// Write an algorithm that takes an "array of numbers" as input and calculates the sum of those numbers.
// Define the Time Complexity of that algorithm and determine what is the lowest possible Time Complexity is for this problem.

// Answer // We can achive this by implementing linear algorithm (Big O(n))
const randomNumbers = [4,3,1,8];

function sumNumbers(numbers){
    let sumOfAllNumbers = 0;
    for(const number of numbers){
        sumOfAllNumbers += number;
    }
    return sumOfAllNumbers
}

// log(sumNumbers(randomNumbers));

// ***************************************// End //************************************** //

// Problem
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Example:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Answer

const sumTwo = function(nums, targetNumber){
    let prevValue = {}
    for(let i = 0; i < nums.length; i++){
        const currentNumber = nums[i];
        const neededValue = targetNumber - currentNumber;
        const prev = prevValue[neededValue];
        // console.log('currentNumber', currentNumber)
        // console.log('neededValue', neededValue)
        // console.log('prev', prev)
        debugger
        if(prev !== null && prev !== undefined){
            return [prev, i]
        } else {
            prevValue[currentNumber] = i;
        }
        console.log(prev);
    }
}

// log(sumTwo([2,7,11,15], 13));

// ***************************************// End //************************************** //

// Problem
// Write a function called power which accepts a base and an exponent.
// the function should return the power of the base to the exponent.

// Answer with for loop
function pow(x,n) {
    let r = 0;
    for(let i = 0; i < n; i++){
        r += x * x;
    }
    return r
}

// Answer with recurtion
let o = 0;
function pow(x, n){
  if(n == 1){
    return x
  } else {
    return x * pow(x, n-1)
  }
}

// console.log('output', pow(2,4));

// ***************************************// End //************************************** //

// Problem
// write a function which returns product1toN of (n)

function product1ToN(n) {
    let r = 1;
    for(let i = 1; i <= n; i++){
      console.log(i)
        r *= i;
    }
    return r 
}

// console.log('output', product1ToN(10));

// ***************************************// End //************************************** //

// Problem

// filtering innner data

// Answer

// const filterValue = 'satish';
// var filteredArray = obj
// .filter(element => element.personal
//   .some(subElement => subElement.name === filterValue)
// )
// .map(element => {
//   let n = Object.assign({}, element, {'personal': element.personal.filter(
//     subElement => subElement.name === filterValue
//   )})
//   return n;
// })

// console.log(filteredArray);

// ***************************************// End //************************************** //

// Problem

// how to access object with string object chain.
// Example
// const obj = {
//     name: 'john',
//     personal: {
//       age: 10,
//       gender: 'm'
//     }
// }
// access gender value with obj.'personal.gender' value.

// Answer

function getDescendantProp(obj, desc) {
    var arr = desc.split('.');
    while (arr.length) {
        obj = obj[arr.shift()]; 
    }
    return obj;
}

// var out = people.filter(person => {
//     return Object.keys(filters).every(filter => {
//         return filters[filter] === person[filter];
//     });
// });

// console.log(getDescendantProp(obj, 'personal.gender'));

// ***************************************// End //************************************** //

// Source: Codevolution channel
// Problem - Factorial of a number
// Problem Description - Given and integer 'n', find the factorial of that integer.
// Description - In mathematics, the factorial of a non-negative integer 'n', denoted n!,
// is the product of all positive integers less than or equal to 'n'

// Factorial of zero is 1.

// sample outputs: 
// factorial(4) = 4*3*2*1 = 24
// factorial(5) = 5*4*3*2*1 = 120

/**
 * @param { number } factorialNum
 * @return { number }
*/

function factorial(factorialNum){
    let result = 1;
    for(let i = 2; i <= factorialNum; i++) {
        result = result * i;
    }
    return result;
}

// console.log(factorial(5));
// Time Complexity: Linear - O(n)

// ***************************************// End //************************************** //

// Source: Codevolution channel
// Problem - Find Prime Number
// Problem Description - Given a natual number 'n', determines if the number is prime or not
// Description - A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers. A natural number greater than 1 that is not prime is called a composite number. For example, 5 is prime because the only ways of writing it as a product, 1 × 5 or 5 × 1, involve 5 itself.
// Prime number a number that is divisible only by itself and 1
// sample outputs: 
// isPrime(5) = true (1*5 or 5*1)
// isPrime(4) = false (1*4 or 2*2 or 5*1)

/**
 * @param { number } n
 * @return { boolean }
*/

function isPrime(n) {
    if(n < 2) {
        return false;
    }
    for(let i = 2; i < n; i++) {
        if(n % i === 0) return false;
    }
    return true;
}

// console.log(isPrime(7));
// Time Complexity: Linear - O(n)

// ***************************************// End //************************************** //

// Source: Codevolution channel
// Problem - Power of Two
// Problem Description - Give a positive integer 'n', determine if the number is a power of 2 or not.
// Description - If a number is divisible by 2 and all it's preceding once, it is a power of TWO.
// Note: 1 is a power of two in matematics
// sample outputs: 
// isPowerOfTwo(1) (1*1) = true
// isPowerOfTwo(5) = false
// EX: 6/2 = 3(reminder 0), 3/2 = 3(reminder 1.5) -> 6 is not power of Two
// EX: 4/2 = 2(reminder 0), 2/2 = 1(reminder 0) -> 4 is a power of Two!
/**
 * @param { number } n
 * @return { boolean }
*/

function isPowerOfTwoBitwise(n) {
    // return false for nagative numbers
    if(n < 1) return false;
    return (n & (n-1)) === 0;
}

// console.log(isPowerOfTwoBitwise(8));
// Time Complexity: Constant - O(1)

function isPowerOfTwo(n) {
    // return false for nagative numbers
    if(n < 1) return false;
    while(n > 1) {
        if(n % 2 !== 0){
            return false;
        }
        n = n / 2;
        // console.log(n);
    }
    return true;
}

// console.log(isPowerOfTwo(6));
// Time Complexity: Linear - O(logn)

// ***************************************// End //************************************** //

// Source: Codevolution channel
// Problem - Recursive Fibonacci sequence
// Problem Description - Given a number 'n', find the nth element of the Fibonacci sqeuence
// Description: In mathematics, the Fibonacci sequence is a sequence in which
// each number is the sum of preceding two numbers.
// The first two numbers in the sequence are 0 and 1.
// sample outputs:
// recursiveFibonacci(0) = 0
// recursiveFibonacci(6) = 8

/**
 * @param {number} rFib;
 * @return {Array<number>};
*/
let count = 0;
function recursiveFibonacci(rFib) {
    if(rFib < 2) {
        return rFib;
    }
    console.log('called', count++);
    return recursiveFibonacci(rFib - 1) + recursiveFibonacci(rFib - 2);
}

// console.log(recursiveFibonacci(4));
// Time Complexity: O(2^n) - Recursive;

// ***************************************// End //************************************** //

// Source: Codevolution channel
// Problem - Recursive factorial of a number
// Problem Description - Given an integer 'n', find the factorial of that integer
// Description: The factorial of a number is the function that multiplies the number by every natural number below it.
// sample outputs:
// recursiveFactorial(4) = 24
// recursiveFactorial(5) = 120

/**
 * @param {number} rFactorial;
 * @return {number};
*/
function recursiveFactorial(rFactorial) {
    if(rFactorial === 0) return 1;
    
    return rFactorial * recursiveFactorial(rFactorial - 1);
}

// console.log(recursiveFactorial(5));
// Time Complexity: Linear - O(n)


// ***************************************// End //************************************** //

// Source: Codevolution channel
// Problem - Linear Search
// Problem Description - Given an array of 'n' elements and target element 't',
// find the index of 't' in the array. Return -1 if the target element is not found.
// sample outputs:
// arr = [-5,2,10,4,6], t =10 -> Should return 2
// arr = [-5,2,10,4,6], t =6 -> Should return 4

/**
 * @param {Array<number>} arr;
 * @param {number} t;
 * @return {number};
*/
function findIndex(arr, t) {
    // console.log(arguments);
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === t) return i;
    }
    return -1;
}

// console.log(findIndex([-5,2,10,4,6], 10));
// Time Complexity: Linear - O(n) 


// ***************************************// End //************************************** //

// Source: Codevolution channel
// Problem - Binary search
// Problem Description - Given a sorted array of 'n' elements and target element 't',
// find the index of 't' in the array. Return -1 if the target element is not found.
// sample outputs:
// arr = [-5,2,4,6,10], t = 10 -> Should return 4
// arr = [-5,2,4,6,10], t = 6 -> Should return 3

/**
 * @param {Array<number>} arr;
 * @param {number} targetElm;
 * @return {number};
*/
function findIndexBinarySearch(arr, targetElm) {
    let startPoint = 0;
    let endPoint = (arr.length - 1);
    
    while(startPoint <= endPoint) {
        let midPoint = Math.floor((startPoint + endPoint) / 2);
        // console.log(midPoint);
        if(targetElm === arr[midPoint]) return midPoint;
        
        if(targetElm < arr[midPoint]) {
            endPoint = midPoint -1;
        } else {
            startPoint = midPoint + 1;
        }
    }
    return -1;
}

// console.log(findIndexBinarySearch([-5,-1,1,2,4,6,7,8,9,10,11,12,13,14,16,17,18,19,20], 7));
// Time Complexity: Linear - O(logn)

// ***************************************// End //************************************** //

// Source: Codevolution channel
// Problem - Recursive Binary search
// Problem Description - Given a sorted array of 'n' elements and target element 't',
// find the index of 't' in the array. Return -1 if the target element is not found.
// sample outputs:
// arr = [-5,2,4,6,10], t = 10 -> Should return 4
// arr = [-5,2,4,6,10], t = 6 -> Should return 3

/**
 * @param {Array<number>} arr;
 * @param {number} targetInt;
 * @return {number};
*/
function findIndexRecursiveBinarySearch(arr, targetInt, {startPoint = 0, endPoint = (arr.length -1)} = {}) {
    // console.log(startPoint, endPoint);
    if(startPoint > endPoint) return -1;
    
    let midPoint = Math.floor((startPoint + endPoint) / 2);
    if(targetInt === arr[midPoint]) return midPoint;
    
    if(targetInt < arr[midPoint]){
        return findIndexRecursiveBinarySearch(arr, targetInt, {startPoint, endPoint: (midPoint - 1)});
    } else {
        return findIndexRecursiveBinarySearch(arr, targetInt, {startPoint: (midPoint + 1), endPoint});
    }
}

// console.log(findIndexRecursiveBinarySearch([-5,-1,1,2,4,6,7,8,9,10,11,12,13,14,16,17,18,19,20], 7));
// Time Complexity: Linear - O(logn)


// ***************************************// End //************************************** //

// Source: Codevolution channel
// Problem - Bubble sort
// Problem Description - Given an array of integers, sort that array.
// sample outputs:
// arr = [8, 20, -2, 4, -6] -> Should return [-6, -2, 4, 8, 20]

/**
 * @param {Array<number>} arr;
 * @return {Array<number>};
*/
function bubbleSortOne(arr) {
    let swapped = false;
    do {
        swapped = false;
        for(let i = 0; i < arr.length - 1; i++) {
            if(arr[i] > arr[i+1]) {
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                swapped = true;
            }
        }
    } while(swapped);
    return arr;
}
// 1st iteration execution
// i = 0 > If condition fails -> [8, 20, -2, 4, -6] 
// i = 1 > If condition sucess -> [8, -2, 20, 4, -6]
// i = 2 > If condition sucess -> [8, -2, 4, 20, -6]
// i = 3 > If condition sucess -> [8, -2, 4, -6, 20]

// same will continue untill array sorted.
// console.log(bubbleSortOne([8, 20, -2, 4, -6]));
// Time Complexity: O(2^n)

// ***************************************// End //************************************** //

// Source: Codevolution channel
// Problem - Insertion sort
// Problem Description - Given an array of integers, sort that array.
// Tip: Javascript's sort method uses insertion sort algorithm
// sample outputs:
// arr = [-6, 20, 8, -2, 4] -> Should return [-6, -2, 4, 8, 20]

/**
 * @param {Array<number>} arr;
 * @return {Array<number>};
*/
function insertionSort(arr) {
    if(arr?.length === 0) return arr;
    
    for(let i = 1; i<arr.length; i++) {
        let numberToInsert = arr[i];
        let j = i -1;
        while(j >= 0 && arr[j] > numberToInsert) {
            // console.log('j', j);
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = numberToInsert;
    }
    return arr
}

// 1st iteration execution
// i = 0 > 
// i = 1 > 
// i = 2 > 
// i = 3 > 
// same will continue untill array sorted.


// console.log(insertionSort([-6, 20, 8, -2, 4]));
// Time Complexity: O(n^2) - Quadratic

// ***************************************// End //************************************** //

// Source: Codevolution channel
// Problem - Quick sort
// Problem Description - Given an array of integers, sort that array.
// Tip: Javascript's sort method uses insertion sort algorithm
// sample outputs:
// arr = [-6, 20, 8, -2, 4] -> Should return [-6, -2, 4, 8, 20]

/**
 * @param {Array<number>} arr;
 * @return {Array<number>};
*/
function quickSort(arr) {
    // Base condition to exit recurtion
    if(arr.length < 2) return arr;
    const pivot = arr[arr.length - 1];
    const leftArray = [];
    const rightArray = [];

    // since we already stored last element as pivot, we can avoid looping till last element
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] < pivot) {
            leftArray.push(arr[i]);
        } else {
            rightArray.push(arr[i]);
        }
    }
    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}

// 1st iteration execution
// i = 0 > 
// i = 1 > 
// i = 2 > 
// i = 3 > 
// same will continue untill array sorted.

// console.log(quickSort([-6, 20, 8, -2, 4]));
// Time Complexity: Worst case: O(n^2), Avg case: O(nlogn)

// ***************************************// End //************************************** //

// Source: Codevolution channel
// Problem - Quick sort
// Problem Description - Given an array of integers, sort that array.
// Desciption: Quick sort follows Divide and Conquer algorithm. It is dividing elements in to smaller parts based on some condition and performing the sort operations on those divided smaller parts. Hence, it works well for large datasets.
// sample outputs:
// arr = [-6, 20, 8, -2, 4] -> Should return [-6, -2, 4, 8, 20]

/**
 * @param {Array<number>} arr;
 * @return {Array<number>};
*/
function mergeSort(arr) {
    // Base condition to exit recurtion
    if(arr.length < 2 ) return arr;
    
    const midPoint = Math.floor(arr.length / 2);
    const leftArray = arr.splice(0, midPoint);
    return merge(mergeSort(leftArray), mergeSort(arr));
}

function merge(leftArray, rightArray) {
    const sortedArray = [];
    
    // console.log(leftArray, rightArray);
    while(leftArray.length && rightArray.length) {
        if(leftArray[0] <= rightArray[0]) {
            sortedArray.push(leftArray.shift());
        } else {
            sortedArray.push(rightArray.shift());
        }
    }
    return [...sortedArray, ...leftArray, ...rightArray];
}

// 1st iteration execution
// i = 0 > 
// i = 1 > 
// i = 2 > 
// i = 3 > 
// same will continue untill array sorted.

// console.log(mergeSort([-6, 20, 8, -2, 4]));
// Time Complexity: O(nlogn)

// ***************************************// End //************************************** //

// Source: Codevolution channel
// Problem - Cartasian Product
// Problem Description - Given an array of integers, sort that array.
// Desciption: In mathematics, specifically set theory, the Cartesian product of two sets A and B, denoted A × B, is the set of all ordered pairs where a is in A and b is in B
// sample outputs:
// cartesianProduct([1,2], [3,4]) -> Should return [[1,3], [1,4], [2,3], [2,4]]

/**
 * @param {Array<number>} setA;
 * @param {Array<number>} setB;
 * @return {Arra<Array<number>>};
*/
function cartesianProduct(setA, setB) {
    const result = [];
    for(let i = 0; i < setA.length; i++){
        for(let j = 0; j < setB.length; j++){
            result.push([setA[i], setB[j]]);
        }
    }
    return result
}
// 1st iteration execution
// i = 0 > 
// i = 1 > 
// i = 2 > 
// i = 3 > 
// same will continue untill array sorted.

// console.log(cartesianProduct([1,2], [3,4,5]));
// Time Complexity: O(nlogn)


// ***************************************// End //************************************** //

// Problem - map
// Problem - polyfill for map function

Array.prototype.xMap = function (cbFn) {
  const output = []; // since, we need to return an array
  for(let i = 0; i < this.length; i++) {
    output.push(cbFn(this[i], i, this)); // pushing currentValue, index, array
  }
  return output; // finally returning the array
}

const testMapped = [1,2,3].xMap((val, index, arr) => val * val);

// console.log(testMapped);

// ***************************************// End //************************************** //

// Problem - filter
// Problem - polyfill for filter function

var logicAlbums = [
    {
      name: 'Bobby Tarantino',
      rating: 5,
    },
    { name: 'The Incredible True Story', rating: 4.5 },
    {
      name: 'Supermarket',
      rating: 4.9,
    },
    { name: 'Under Pressure', rating: 5 },
]
  

Array.prototype.xFilter = function (cbFn, context) {
    const output = [];
    for(let i = 0; i < this.length; i++){
        if(cbFn.call(context, this[i], i, this)) {
            output.push(this[i]);
        }
    }
    return output;
}

const testFiltered = [1,2,3].xFilter((v,i,arr) => v > 2)
// const testFiltered = logicAlbums.xFilter((v,i,arr) => v.rating < 4.9)

// console.log(testFiltered);

// ***************************************// End //************************************** //

// Problem - reduce
// Problem - polyfill for reduce function

Array.prototype.xReduce = function(cbFn, initialValue) {
    let accumulator = initialValue === undefined ? undefined : initialValue;
    for(let i = 0; i < this.length; i++){
        if(accumulator !== undefined) {
            accumulator = cbFn(accumulator, this[i], i, this);
        } else {
            accumulator = this[i];
        }
    }
    return accumulator
}

const testReduced = [1,2,3].xReduce((prev,current,i,arr) => prev + current);

// console.log(testReduced);

// ***************************************// End //************************************** //

// Problem - Currying
// Problem Description - Create a currying Functions accept 5 arguments

// Basic currying function example
function calc(calcFn){
    return function(a) {
        return function(b) {
            return calcFn(a,b);
        }
    }
}

const sum = (a,b) => a + b;
const multiply = (a,b) => a * b;
const subtract = (a,b) => a - b;

const sumTwoNumbers = calc(sum);

// console.log(sumTwoNumbers(5)(5));
// console.log(calc(multiply)(5)(5));
// console.log(calc(subtract)(5)(5));


// Advanced currying function with fixed number of arguments.
function curryWithFixedParam(cbFn){
    return function curried(...args) {
        if(args.length >= cbFn.length) {
            return cbFn.apply(this, args);
        } else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    }
}

// console.log(curryWithFixedParam(sum)(5)(2));
// console.log(curryWithFixedParam(subtract)(10, 2));

// Advanced currying function with 'n' number of arguments.
//>>>>>>>>>>>>>>>>>>>>>>>> Try other implementation with empty arg like this >>> ()

const sumNArgs = (...args) => args.reduce((prev, crr) => prev + crr);

function curryWithNnumberParams(cbFn, paramsLength){
    return function curried(...args){
        if(args.length === paramsLength){
            return cbFn(...args);
        } else {
            return function(...args2){
                return curried.apply(this, args.concat(args2))
            }
        }
    }
}

const curryWithNargs = curryWithNnumberParams(sumNArgs, 4);

// console.log(sumNArgs(1,2,3));
// You can call the function anyway you want!!!!!!!!!!!!
// console.log(curryWithNargs(1,2,3,4));
// console.log(curryWithNargs(1,2,3)(4));
// console.log(curryWithNargs(1)(2)(3)(4));
// console.log(curryWithNargs(1, 2)(3)(4));
// console.log(curryWithNargs(1, 2)(3, 4));
// console.log(curryWithNargs(1)(2, 3, 4));


// Problem: Write currying function which accepts many nested calls until it finds no params.

function curryFunctionWithManyCalls(cbFn) {
    const totalArgs = [];
    return function curry(arg) {
        arg && totalArgs.push(arg);
        if(arg === undefined) {
            console.log('end', totalArgs);
            return cbFn(...totalArgs);
        } else {
            return function(arg2) {
                return curry(arg2);
            }
        }
    }
}

const curryManyCallsTemp = curryFunctionWithManyCalls(sumNArgs);

// console.log(curryManyCallsTemp(1)(2)(3)())

// ***************************************// End //************************************** //

// Problem: Write insertion sort algorithm to sort the array of integers;

// Solution:
const unsortedArr = [2,45,6,8,10,1];
function insertionSort1(arr){
    for(let i = 1; i < arr.length; i++){
        const numberToInsert = arr[i];
        let j = i - 1;
        const iterationLog = []; //test
        while(j >= 0 && arr[j] > numberToInsert){
            // console.log(arr[j]);
            iterationLog.push(arr[j]); //test
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = numberToInsert;
        // console.log(j+1, arr[j+1], arr);
        // console.log(numberToInsert, iterationLog);
        iterationLog.length = 0; //test
    }
    return arr;
}
// console.log(insertionSort1(unsortedArr));

// ***************************************// End //************************************** //

// Problem: get the common substring of all possible chars of 'abc' => a,ab,bc,b,ba,bc,c,ca,cc...

/**
 * @param { string } testStr;
 * @returns { string }
*/
function printAllPossibleSubstrings(testStr){
    for(let i = 0; i < testStr.length; i++){
        console.log(testStr[i]);
        for(let j = 1; j < testStr.length; j++){
            // console.log(j);
            // console.log(testStr.substring(j, j+2));
            console.log(`${testStr[i]}${testStr[j]}`);
        }
    }
}

// console.log(printAllPossibleSubstrings('abc'));


// ***************************************// End //************************************** //

// Problem: write a polyfill for split() method.

String.prototype.customSplit = function(delimiter) {
    const result = [];
    if(delimiter === '') return Array.from(this);
    const startSplit = (str) => {
        const index = str.indexOf(delimiter);
        if(index > -1){
            result.push(str.substring(0, index));
            startSplit(str.substring(index + delimiter.length));
        } else{
            result.push(str);
        }
    }
    startSplit(this);
    return result;
}

// console.log('this is the example text and this is the blank text'.customSplit('the'))

// ***************************************// End //************************************** //

// Problem: Memoized function 
// Problem Description: Write a function that returns memoized response when it receives same parameters.

function memoized(fn) {
    const cache = {};
    return function(a,b) {
        const paramsAsOne = JSON.stringify(`${a}${b}`);
        if(cache[paramsAsOne]) {
            console.log('value retrieved from cache for arguments: ', paramsAsOne);
        } else {
            cache[paramsAsOne] = fn(a,b);
            console.log('value retrieved by executing function for arguments: ', paramsAsOne);
        }
        return cache[paramsAsOne];
    }
}

const sumWithMemoize = memoized(sum);

// console.log(sumWithMemoize(10, 20));
// console.log(sumWithMemoize(10, 20));





})()