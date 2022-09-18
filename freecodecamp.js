// Source: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range
// Problem: Sum All Numbers in a Range

// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. 
// The lowest number will not always come first.
// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

// Solution:
function sumAll(arr) {
    const lowestNum = arr[0] < arr[1] ? arr[0] : arr[1];
    const highestNum = arr[0] > arr[1] ? arr[0] : arr[1];
    let total = 0;
    for(let i = lowestNum; i <= highestNum; i++){
        total += i
    }
    
    return total;
}

// console.log(sumAll([1, 4]));

// ***************************************// End //************************************** //

// Source: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy
// Problem: Seek and Destroy

// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
// Note: You have to use the arguments object.

// Solution:
function destroyer(arr, ...args) {
    const result = [];
    arr.forEach(element => {
        if(args.includes(element) === false){
            result.push(element);
        }
    });
    return result;
}

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

// ***************************************// End //************************************** //

// Source: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person
// Problem: Make a Person
// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
// Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. 
// These methods must be the only available means of interacting with the object.

// Solution:
const Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let [firstName, lastName] = firstAndLast.split(' ');
    this.getFullName = function() {
        return firstName + ' ' + lastName;
    };
    this.getFirstName = function() {
        return firstName;
    }
    this.getLastName = function() {
        return lastName;
    }
    this.setFirstName = function(first) {
        firstName = first;
    }
    this.setLastName = function(last) {
        lastName = last;
    }
    this.setFullName = function(fullName) {
        const [fName, lName] = fullName.split(' ');
        firstName = fName;
        lastName = lName;
    }
};

const bob = new Person('Bob Ross');
bob.setLastName("Curry")
// console.log(bob.getFullName())

// ***************************************// End //************************************** //

// Source: https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference
// Problem: Find the Symmetric Difference
// The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.
// Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. 
// Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

// Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).

// with n2 time complexity
function symDiffInTwo(arr1, arr2){
    const output = [];

    for(const item of arr1){
        if(!output.includes(item) && !arr2.includes(item)){
            output.push(item);
        }
    }

    for(const item of arr2){
        if(!output.includes(item) && !arr1.includes(item)){
            output.push(item);
        }
    }
    return output;
}

function symDiffInTwo(arr1, arr2){
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const totalArrWithNoDuplicates = [...set1, ...set2];
    
    const intRepeats = {};
    
    for(const key of totalArrWithNoDuplicates){
        if(key in intRepeats){
            intRepeats[key]++
        } else {
            intRepeats[key] = 1
        }
    }
    
    const output = [];
    for(const key in intRepeats){
        if(intRepeats[key] === 1) output.push(+key);
    }
    return output;
}

function sym(args) {
    let output = arguments[0];
    for(let i = 1; i < arguments.length; i++){
        output = symDiffInTwo(output, arguments[i]);
    }
    return output;
}

// console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]));

// ***************************************// End //************************************** //

// Source: https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/inventory-update
// Problem: Inventory Update

// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. 
// Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. 
// The returned inventory array should be in alphabetical order by item.

function updateInventory(arr1, arr2) {
    const cart = {}

    for(let i = 0; i < arr1.length; i++){
        cart[arr1[i][1]] = arr1[i][0];
    }

    for(let i = 0; i < arr2.length; i++){
        if(cart[arr2[i][1]]){
            cart[arr2[i][1]] += arr2[i][0];
        } else {
            cart[arr2[i][1]] = arr2[i][0];
        }
    }

    const output = []
    for(const key in cart){
        output.push([cart[key], key])
    }

    return output.sort((arr1, arr2) => arr1[1].localeCompare(arr2[1]));
}

// Example inventory lists
const curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

const newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

// console.log(updateInventory(curInv, newInv));

// ***************************************// End //************************************** //

// Source: https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/pairwise
// Problem: Pairwise

function pairwise(arr, arg) {
    const usedNum = {};
    let totalIndices = 0;
    for(let i = 0; i < arr.length - 1; i++){
        if(usedNum[i]){
            continue
        }
        const iVal = arr[i];
        for(let j = i + 1; j < arr.length; j++) {
            if(usedNum[j]){
                continue
            }
            const jVal = arr[j];
            if(iVal + jVal === arg) {
                usedNum[i] = true;
                usedNum[j] = true;
                totalIndices += i + j;
                break;
            }
        }
    }
    return totalIndices;
}

// console.log(pairwise([1,4,2,3,0,5], 7));

// ***************************************// End //************************************** //

// Source: https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-1-multiples-of-3-and-5
// Problem: Problem 1: Multiples of 3 and 5

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

function multiplesOf3and5(number) {
    let total = 0;
    for(let i = 3; i < number; i++){
        const multipleOf3 = i % 3 === 0;
        const multipleOf5 = i % 5 === 0;
        if(multipleOf3 || multipleOf5){
            total += i;
        }
    }
    return total;
}

// console.log(multiplesOf3and5(49));

// ***************************************// End //************************************** //

// Source: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/everything-be-true
// Problem: Everything Be True

function truthCheck(collection, pre) {
    for(const item of collection){
        if(Boolean(item[pre]) === false) return false;
    }
    return true;
}

// truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");

// ***************************************// End //************************************** //

// Source: https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-2-even-fibonacci-numbers
// Problem: Problem 2: Even Fibonacci Numbers

function fiboEvenSum(n) {
    const fibonacciSequence = [1,2];
  
    for(let i = 2; i < n; i++){
      fibonacciSequence[i] = fibonacciSequence[i - 2] + fibonacciSequence[i - 1];
    }
    const evenFib = fibonacciSequence.filter((num) => num % 2 === 0).reduce((acc, crr) => acc + crr);
    console.log(evenFib);
}

// console.log(fiboEvenSum(8));