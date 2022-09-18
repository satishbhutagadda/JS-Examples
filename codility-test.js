// Problem Statement:

// There are N empty glasses with a capacity of 1, 2, ..., N liters (there is exactly one glass of each unique capacity). 
// You want to pour exactly K liters of water into glasses. Each glass may be either full or empty (a glass cannot be partially filled). 
// What is the minimum number of glasses that you need to contain K liters of water?

// Write a function:
// function solution(N, K);
// that, given two integers N and K, returns the minimum number of glasses that are needed to contain exactly K liters of water.
// If it is not possible to pour exactly K liters of water into glasses then the function should return −1.
// Examples:
// 1. Given N = 5 and K = 8, the function should return 2. There are five glasses of capacity 1, 2, 3, 4 and 5. You can use two glasses with capacity 3 and 5 to hold 8 liters of water.
// 2. Given N = 4 and K = 10, the function should return 4. You must use all the glasses to contain 10 liters of water.
// 3. Given N = 1 and K = 2, the function should return −1. There is only one glass with capacity 1, so you cannot pour 2 liters of water.
// 4. Given N = 10 and K = 5, the function should return 1. You can use the glass with capacity 5.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..1,000,000];
// K is an integer within the range [1..1,000,000,000].

// Solution:

/**
 * @param { number } availableGlasses;
 * @param { number } targetLiters;
 * @return { number }
*/

function fillTargetLitersWithAvailableLiterGlasses(availableGlasses, targetLiters){
    let totalLiters = 0;
    const availableGlassesInLiters = [];
    // get the available glasses
    for(let i = 1; i <= availableGlasses; i++) {
        totalLiters += i;
        availableGlassesInLiters.push(i);
    }
    
    // return -1 if totalLiters less than targetLiters;
    if(totalLiters < targetLiters) return -1;

    if(totalLiters === targetLiters) return availableGlassesInLiters.length;
    
    if(availableGlassesInLiters.includes(targetLiters)) return 1;

    // loop through the available glasses and return the how many glasses being used to fill the target liter.
    for(let i = 0; i < availableGlassesInLiters.length; i++) {
        for(let j = 0; j < availableGlassesInLiters.length; j++) {
            if(i !== j){
                if((availableGlassesInLiters[i] + availableGlassesInLiters[j]) === targetLiters) return 2;
            }
        }
    }
}

// console.log(fillTargetLitersWithAvailableLiterGlasses(5, 8))


// ***************************************// End //************************************** //

// Problem Statement:
// You are given a string S containing lowercase English letters. 
// Your task is to calculate the minimum number of letters that need to be removed in order to make it possible to build a palindrome from the remaining letters.
// When building the palindrome, you can rearrange the remaining letters in any way.

// A palindrome is a string that reads the same both forwards and backwards.
// Some examples of palindromes are: "kayak", "radar", "mom".
// Write a function:
// function solution(S);
// which, given a string of length N, returns the minimum number of letters that need to be removed.
// Examples:
// 1. Given S = "ervervige", your function should return 2. After removing the letter "g" and one "e", we may create a word "reviver", which is a palindrome.
// 2. Given S = "aaabab", your function should return 0. We may create a word "aabbaa", which is a palindrome and uses all of the letters.
// 3. Given S = "x", your function should return 0. String "x" is a palindrome itself, so we do not have to delete any letter.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..200,000]
// S contains only lowercase English letters.

// ***************************************// End //************************************** //

// Problem: Demo task
// Write a function: function solution(A);
// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
// Given A = [1, 2, 3], the function should return 4.
// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].


function solution(A) {
    let _a = [...new Set([...A])].sort((a, b) => a-b);
    console.log('_a', _a)
    return missingNum(_a) ? missingNum(_a) : _a[_a.length - 1]+1 >= 1 ? _a[_a.length - 1]+1 : 1;
}

function missingNum(array){
    let missingPositiveNum;
    for(let i = 1; i <= array[array.length - 1]; i++){
        if(missingPositiveNum) break;
        if(i >= 1 && array.indexOf(i) === -1){
            console.log('i', i)
            missingPositiveNum = i;
        }
    }
    return missingPositiveNum;
}

// console.log(solution([1, 3, 6, 4, 1, 2]))

// ***************************************// End //************************************** //

// Problem Statement:

// A palindrome is a word, which reads the same backward as forward. Some examples of palindromes are: 'kayak', "radar", "mom'. 
// Write a function: 
// class Solution { public String solution(int N, int K); } 
// that, given two integers N and K, returns a palindrome of length N which consists of K distinct lower-case letters (a-z).
// Examples: 
// 1 . Given N = 5, K = 2, your function may retum "abbba". There are many other possibilities;
// for example, it could also return "zdzdz". On the other hand, "aaaaa" is an incorrect answer as it contains only one distinct letter.
// 2. Given N = 8, K = 3, your function may retum "ppsccspp. 
// 3. Given N = 3, K = 2, your function may retum "opo'.
// Assume that: 
// • N is an integer within the range [1..2001;
// • K is an integer within the range [1..26]; 
// • Creation of the required palindrome is always possible. 
// In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment. 

/**
 * @param { number } numberOfChars;
 * @param { number } numberOfLetters;
 * @return { boolean };
 */
function palindromeWord(numberOfChars, numberOfLetters) {
    const aToZ = ['a','b','c','d','e','f','g','h','i'];
    let palindrome = [];
    const halfNumber = Math.floor(numberOfChars / 2);
    const isEvenNumber = (numberOfChars % 2 === 0);
    for(let i = 0; i < halfNumber; i++) {
        // if(!palindrome.length){
        //     palindrome = aToZ[i];
        // } else {
            palindrome[i] = aToZ[i];
        // }
    }
    return isEvenNumber ? `${palindrome.join('')}${palindrome.reverse().join('')}` : `${palindrome.join('')}${aToZ[2]}${palindrome.reverse().join('')}`

    // return palindrome;
}

// Look this later to restrict only number of letters to be in the output.
// Unresolved
// console.log(palindromeWord(5, 3));

// ***************************************// End //************************************** //

// Problem Statement:

// Write a function solution that, given an integer N, returns the maximum possible value obtainable by deleting one '5' digit from the decimal representation of N.
// It is guaranteed that N will contain at least one '5' digit. 
// Examples: 
// 1. Given N = 15958, the function should return 1958.
// 2. Given N = -5859, the function should retum -589.
// 3. Given N = -5000, the function should retum 0. After deleting the '5', the only digits in the number are zeroes, so its value is O..
// Assume that: 
// • N is an integer within the range.
// • N contains at least one '5' digit in its decimal representation.
// • N consists of at least two digits in its decimal representation.
// In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment. 

/**
 * @param { number } numbersWithAtleastOneFive;
 * @return { number };
 */
function deleteFiveAndReturnVal(numbersWithAtleastOneFive){
    numbersWithAtleastOneFive = numbersWithAtleastOneFive.toString();
    // const itHasAtleastOne5Number = Array.from(numbersWithAtleastOneFive, Number).includes(5);
    const digit5 = [];
    for(let i = 0; i < numbersWithAtleastOneFive.length; i++) {
        if(numbersWithAtleastOneFive[i] == 5){
            digit5.push(i);
        }
    }
    if(digit5.length < 1) {
        throw('Params should have at least one "5" digit!');
    };
    if(numbersWithAtleastOneFive.length < 2) {
        throw('Params should have at least two digits!');
    };

    const indexToBeFiltered = digit5.length === 1 ? digit5[0] :
        (Number.isInteger(Number(numbersWithAtleastOneFive[digit5[0] - 1])) ? digit5[0] : digit5[1]);
    const output = numbersWithAtleastOneFive.split('').filter((n, i) => i !== indexToBeFiltered).join('');
    return Number.parseInt(output);
}
// console.log(deleteFiveAndReturnVal(15958));
// console.log(deleteFiveAndReturnVal(-5859));
// console.log(deleteFiveAndReturnVal(-5000));

// ***************************************// End //************************************** //


/************************ \Uplers JS Codility test\ *************************/

// Task description
// Your task is to implement a function which adds type validation to an object.
/*Requirements:
Your function should receive an object as its only argument and return an object with the same properties, but with type validation added.
Types should be validated when:
>> the function creates the object;
>> someone updates a property;
>> someone adds a property.

The type validation should always be based on the last part of the property name. 
For example, the age_int property should always be an integer and throw an error when set to something else.
Here are possible types:

>> string: for example, "string type"
>> int: 12.00 and 12 are both integers
>> float: for example, 12.34
>> number: any int or float
>> bool: for example, true

Assumptions
Types are optional and validation should be skipped if the type isn't specified.
>> "_" always precedes the type name.

Hints
JavaScript Proxy might be useful.
Your solution will be evaluated based on its correctness; performance and coding style will not be assessed.
Do not edit the default export.

Available tools/packages
You can use:
JavaScript Node 14 / ES2020

Examples
Your function (typeCheck here) should behave as shown below:
const obj = {
    age_int: 2,
    name_string: "Adam",
    job: null,
}
const validatingObject = typeCheck(obj)
validatingObject.age_int = 2.25 // Throws error
validatingObject.age_int = 2
validatingObject.job = "fireman"
validatingObject.address_string = 20 // Throws error

const obj_2 = {
    employed_bool: "true",
}
const validatingObject = typeCheck(obj_2) // Throws error
*/

/**
 * @param { Object } obj;
 */

 const typedObj = {
    age_int: 2,
    name_string: "Adam",
    job: null
}

const types = {
    string: 'string',
    number: 'number',
    bool: 'boolean',
    int: 'int',
    float: 'float'
}

function typeCheck(obj){
    const handler = {
        get(target, property) {
            console.log(`Property ${property} has been read.`);
            return target[property];
        },
        set(target, property, value) {
            const propertyType = property?.split('_')[1];
            if(propertyType){
                switch(propertyType) {
                    case types.string: 
                        if(typeof value != types.string) throw(`Can't assign ${typeof value} type value to ${types.string} type!`);
                        break;
                    case types.number: 
                        if(typeof value != types.number) throw(`Can't assign ${typeof value} type value to ${types.number} type!`);;
                        break;
                    case types.bool: 
                        if(typeof value != types.bool) throw(`Can't assign ${typeof value} type value to ${types.bool} type!`);;
                        break;
                    case types.int: 
                        if(typeof value !== types.number || Number.isInteger(value) === false) throw(`Can't assign ${value} value to integer`);
                        break;
                    case types.float: 
                        if(typeof value !== types.number || Number.isInteger(value)) throw(`Can't assign ${value} value to float number`);
                        break;
                    default:
                        console.log(typeof value);
                }
            }
            return target[property] = value;
        }
    }
    return new Proxy(obj, handler);
}

const typedObjEx = typeCheck(typedObj);

// typedObjEx.year_float = 4556.12;
// console.log(typedObjEx.year_float);

// typedObjEx.age_int = 4556.12;
// console.log(typedObjEx.age_int);

// ***************************************// End //************************************** //