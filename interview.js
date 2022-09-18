(function (){
    // Interview questions asked


/************************ \Anton - RPSP\ *************************/
    // Output based Questions

    // Question - 1: Execution Context
    setTimeout(function timeout() {
        // console.log('Timeout');
    }, 0);
    let p = new Promise(function (resolve, reject) {
        // console.log('Create promise');
        resolve();
    });
    p.then(function () {
        // console.log('Handle promise');
    });

    // Output => 
    // 1. 'Create promise'  
    // 2. 'Handle promise'  
    // 3. 'Timeout promise'  
    // Explanation: Promise is a micro task and setTimeout is a macro task, so promise will execute first.


    // // Question - 2: this scope question

    let obj = {
        name: 'Test',
        inner: {
            func1: () => { console.log('1', this) },
        },
        func2: function () {
            console.log('2', this)
        }
    }

    // obj.inner.func1();
    // obj.func2();

    // Output => 
    // func1 will return => 1 Window object
    // func2 will return => 2 obj object
    // Explanation: func1 uses arrow function, arrow functions will maintain have current context, it always return this as global object which is window object.
    // func2 is a regular function and it will return current context which is obj


    // Question - 3: Variable scrope question

    function varScrope() {
        var x = 31;
        if (true) {
            var x = 71;
            console.log('1', x); //71
        }
        console.log('2', x); // 71
    }

    // varScrope()

    // Explanation: we declared 2 x variables in function scope, 2nd x will override the 1st x value

    // other case

    function varLetScope() {
        var x = 31;
        if (true) {
            let x = 71;
            console.log('1', x);//1 71
        }
        console.log('2', x); //2 31
    }

    // varLetScope();

    // Explanation: inner let x has block scope so it will not override function scope x var.
    // and we can re-declare block scope variables with same name as funtion scope vars.

    // Question - 4: Bind context

    let user = {
        name: "Tom",
        hi() {console.log(this.name)}
    };
    // user.hi(); //Tom

    let hi = user.hi;
    // how to print "Tom" in this scope? it will return empty now.
    // hi();//empty

    // Fix: bind the user context to hi => let hi = user.hi.bind(user);


    // Question - 5: How to return true by comparing two constructor functions?

    // console.log(new A() === new B()); // false

    function A() { }
    function B() { }

    // Solution: return same object from both function.;
    const testObj = {}
    function A() { return testObj }
    function B() { return testObj }
    // console.log(new A() === new B()); // true


    // Question - 6: Object reference question. What is the output of emptyObjB?

    var emptyObjA = {"test": "test"};
    var emptyObjB = emptyObjA;
    emptyObjA = null;

    // console.log(emptyObjB) // {test: 'test'}

    // Question - 6: coresion questions
    // What is the Output?
    "3"+3+3 // 333 - Explanation: when we have string starting with '+' operator, it will concatinate the other charactors too

    // What is the Output?x
    3+3+"3" // 63 - Explanation: since 1st two are numbers '+' operator will sum and concatenate last string

    // What is the Output?
    3+3*"3" // 12 - any math operator other than '+' will force to conver string to number,
    // So it will calculate 3*3 = 9 + 3 = 12. and calculation starts from right since '*' operator have more preference.


/************************ \Servicenow\ *************************/

    const str = 'waterbottle';
    const str1 = 'waterbottle';

    function checkTheOrder(s1, s2){
        // let revestedS1 = s1.split('').reverse().join('');
        // if(revestedS1 === s2){
        //     return true
        // }
        // return false

        const splittedArray = s1.split('')
        let reversedArray = [];
        for(let i = 0; i < splittedArray.length; i++){
            reversedArray.push(splittedArray[i].reverse())
        }

        if(reversedArray.join('') === s2){
            return true
        }
        return false
    }

    // console.log(checkTheOrder(str, str1));

    // (function(){
    //     console.log(1);
    //     setTimeout(function(){console.log(2)}, 1000);
    //     setTimeout(function(){console.log(3)}, 0);
    //     console.log(4);
    // })();

    Array.prototype.customMap = function(f){
        const data = [];
        for(let i = 0; i< this.length; i++){
            data.push(f(this[i], i, this));
        }
        return data
    }
    const resarr = [1,2,4].customMap((n) => {
        return n * n;
    })
    // console.log(resarr)

    // Problem
    // sort the piece of array with m and n index values.

    // missingsorting = [{i: 4}]
    // 1,2,4,7,10,11,7,12,6,7,16,18,19
    // 1,2,3,4,5,6,7,8,9,10,11,12,13,14
    // M, n
    // M = 3
    // n= 9

    const array = [1,2,4,7,10,11,7,12,6,7,16,18,19];

    function logMissortedNumber(arr){
        const missingsorting = [];
        let maxNumber = 0;
        for(let i = 1; i < arr.length; i++){
            maxNumber = Math.max(maxNumber, arr[i - 1]);
            // console.log(maxNumber)
            if(maxNumber > arr[i]) {
                missingsorting.push({[i]: arr[i]})
            }
        }
        console.log(arr)
        return missingsorting;
    }

    // console.log(logMissortedNumber(array))


    // Codility Test task

    // Write a function: function solution(A);
    // that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
    // For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
    // Given A = [1, 2, 3], the function should return 4.
    // Given A = [−1, −3], the function should return 1.
    // Write an efficient algorithm for the following assumptions:

    // N is an integer within the range [1..100,000]; each element of array A is an integer within the range [−1,000,000..1,000,000].

    function solution(A) {
        // write your code in JavaScript (Node.js 8.9.4)
        const sortedArr = [...new Set([...A.sort((a, b) => a - b).filter((num) => num > 0)])];
    
        for(let i = 1; i <= sortedArr.length; i++){
            if(i !== sortedArr[i - 1]){
                return i
            }
        }
        return sortedArr.length === 0 ? 1 : (sortedArr[sortedArr.length - 1] + 1);
    }

    // console.log(solution([ 1, 1, 2, 3, 4, 6 ]))


    // 2nd Time Interview

    // Level - 01
    // Question - 01: Difference between call, apply, bind with example
        // Answer: explained with example
    // Question - 02: write polyfill bind() Method
        // Answer: stuggled to write it. tried somehow
        let testBindObj = {
            name: "Tom"
        };
        
        function hiName(a,b) {return this.name + a + b}

        const printNameWithBind = hiName.bind(testBindObj);
        
        Function.prototype.customBind = function(context, ...args1) {
            const Fn = this;
            return function(...args2){
                return Fn.apply(context, [...args1, ...args2]);
            }
        }
        const printNameWithCustomBind = hiName.customBind(testBindObj, 'a');
        // console.log(printNameWithBind());
        // console.log(printNameWithCustomBind('f'));

    // Question - 03: ES6 Features worked? What higher order function used?
    // Question - 04: write polyfill for reduce() method
        // Wrote polyfill and it worked!

    // Question - 05: what is hoisting in JS and one output based question
    // what is the output?
    var globalVar = 'test';

    function serviceNowtest(){
        console.log(globalVar); // undefined
        var globalVar = 'test1';
    }
    
    // serviceNowtest();
    // console.log(globalVar); //test
        // Answer: given corrent response


/************************ \Freshworks\ *************************/
    // Problem: Given the list of values and a sum, return true if there is a pair for which the total is equal to the sum. Otherwise return false
    // Eg: [6, 5, 8, 3, 9, 11, 12] & 21 => 9+12=21
    // Interviewer - Satya Alasakani

    /**
     * @param { Array<number> } arr;
     * @param { number } target;
     * @return {boolean};
     */
    function isSumTwoEqualToTarget(arr, target) {
        for(let i = 0; i < arr.length; i++) {
            // console.log('i', arr[i]);
            for(let j = 0; j < arr.length; j++) {
                if(i !== j){
                    if(target === (arr[i]+ arr[j])){
                        return true;
                    }
                    // console.log('j', arr[j]);
                }
            }
        }
        return false
    }

    // console.log(isSumTwoEqualToTarget([6, 5, 8, 3, 9, 11, 12], 8));

/************************ \Epam Anywhere source\ *************************/
    // Problem: Find the most repetitive character in a particular string. 
    // For example: findMaxChar('dddbsjakeldpgd') you should return 'd' as your answer.

    /**
     * @param { string } duplicateStringChars;
     * @return { string };
     */
    function findMaxChar(duplicateStringChars){
        const chars = {};
        for(let i = 0; i < duplicateStringChars.length; i++){
            if(chars[duplicateStringChars[i]]){
                chars[duplicateStringChars[i]]++
            } else {
                chars[duplicateStringChars[i]] = 1
            }
        }
        const maxLengthOfChar = Math.max(...Object.values(chars));
        for(let [key, value] of Object.entries(chars)){
            if(value === maxLengthOfChar) return key;
        }
    }

    // console.log(findMaxChar('dddbsjakeldpgd'));

/************************ \Some interview\ *************************/
    // Problem: Find the last 2 largest numbers from array of integers. 
    // For example: [2,45,6,8,10,1] => [10, 45];

    /**
     * @param { Array<number> } arrayOfIntegers;
     * @return { Array<number> };
     */

    // with Self thinking sort algo
    // function findTheLargestTwoNumbers(arrayOfIntegers){
    //     for(let i = 0; i < arrayOfIntegers.length; i++){
    //         for(let j = 1; j < arrayOfIntegers.length; j++) {
    //             const prevNum = arrayOfIntegers[j - 1];
    //             if(prevNum > arrayOfIntegers[j]) {
    //                 arrayOfIntegers[j - 1] = arrayOfIntegers[j];
    //                 arrayOfIntegers[j] = prevNum;
    //             }
    //         }
    //         // console.log(arrayOfIntegers);
    //     }
    //     return [arrayOfIntegers[arrayOfIntegers.length - 2], arrayOfIntegers[arrayOfIntegers.length - 1]];
    // }


    // with insertion sort algorithm
    function findTheLargestTwoNumbers(arrayOfIntegers){
        for(let i = 1; i < arrayOfIntegers.length; i++){
            const NTI = arrayOfIntegers[i];
            let j = i - 1;
            while(j > 0 && arrayOfIntegers[j] > NTI){
                arrayOfIntegers[j+1] = arrayOfIntegers[j];
                j--;
            }
            // console.log(j+1)
            arrayOfIntegers[j+1] = NTI;
        }
        // return arrayOfIntegers;
        return [arrayOfIntegers[arrayOfIntegers.length - 2], arrayOfIntegers[arrayOfIntegers.length - 1]];
    }

    // console.log(findTheLargestTwoNumbers([2,45,6,8,10,1]))


    // Problem: Flatten the array.
    // For example: [[1], [2, 3, [4]], [5]] => [1,2,3,4,5];

    /**
     * @param { Array } nestedArrays;
     * @return { Array<number> };
     */

    function flattenTheArray(nestedArrays){
        const results = [];

        function findNested(arr){
            for(let i = 0; i < arr.length; i++){
                if(Array.isArray(arr[i])) {
                    findNested(arr[i]);
                } else {
                    results.push(arr[i]);
                }
            }
        }
        findNested(nestedArrays);
        
        return results
    }

    // console.log(flattenTheArray([[1], [2, 3, [4]], [5]]));


/************************ \TechMojo interview\ *************************/
    // Problem: write polyfill for Promise.all()

    Promise.customAll = function customAll(promises) {
        return new Promise((resolve, reject) => {
            const output = [];
            promises.forEach((promise, index) => {
                try {
                    promise.then((res) => {
                        output[index] = res;
                        const outputData = output.filter((res) => !!res)
                        if(promises.length === outputData.length) resolve(output);
                    });
                    
                } catch(error) {
                    return reject(error)
                }
            });
        })
    }

    const promiseTest = new Promise((resolve, reject) => {
        setTimeout(()=> resolve('Hello'), 1000);
    })

    const promiseTest2 = new Promise((resolve, reject) => {
        setTimeout(()=> resolve('Satish'), 1500);
    })

    // Promise.customAll([promiseTest, promiseTest2])
    // .then(res => console.log("result", res)).catch(err => console.log("err", err));

    // Problem: write deepclone method
        
    const obj123 = {
        a: 'a',
        b: {
            c: 'c',
            d: {
                e: 'e',
                f: [{
                    g: 'g'
                }]
            }
        }
    }

    // const objA = Object.assign({}, obj123);

    // console.log(objA);
    // console.log(obj123);

    /**
     * @param { Array<any> | any } dataObj;
     * @return { any };
     */


    function cloneObject(dataObj, output = {}) {
        for(let key in dataObj){
            output[key] = dataObj[key];
        }
        return output;
    }

    // console.log(cloneObject(obj123));

    // Problem: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou

    function whatIsInAName(collection, source) {
        console.log(collection);
        const arr = [];
        // Only change code below this line
        collection.forEach(collectionItem => {
            const result = Object.keys(source).every((sourceKey) => {
                if(collectionItem[sourceKey] && collectionItem[sourceKey] == source[sourceKey]) return true
            })
            if(result){
                arr.push(collectionItem);
            }
        });
        // Only change code above this line
        return arr;
    }
      
    // console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));    


    // 3rd level
    // Problem 01: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional
    // Problem: Arguments Optional
    // Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
    // For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

    // Solution
    function addTogether(a) {
        const calcFn = (b) => {
            if(isTypeOfNumber(a) && isTypeOfNumber(b)) return a + b;
            return
        }
        if(arguments.length === 1 && !isTypeOfNumber(arguments[0])) return;
    
        if(arguments.length === 2){
            return calcFn(arguments[1]);
        }

        return function(b){
            return calcFn(b);
        }
    }
    
    function isTypeOfNumber(int){
        return int && typeof int === 'number';
    }
      
    // console.log(addTogether(2,3));
    
    // console.log(addTogether(2)(3));

    // Problem 02: Create a timer

    // Solution: https://codesandbox.io/s/flamboyant-bouman-jnns0z?file=/src/app/app.component.ts

/************************ \F5 interview\ *************************/

    /*
    API:  token  -> 1234
    
    token => good or bad ?
    
    good => 1*1 + 2 *2 + 3*3 + 4*4 = 30
            3*3 + 0*0 => 9
            9*9 => 81
            8*8 + 1*1 => 65
            36+25 => 61
            36+1 => 37
            9+49 = 50
            25 + 0 = 25
            4 + 25 = 29
            4 + 81 = 85
            
    token -> 4 
            16
            37
            9+49 50
            25
            
                
                1
                
            => good 
        
        bad => not ending at 1.
    */
    function checkGoodOrBad(token, tokenTotal = 0, currentTotal = 0) {
        if(token == 1) return 'good'
        
        const tokenStr = Array.from(token);
        
        for(let tokenInt of tokenStr){
            tokenTotal+= tokenInt * tokenInt; // 30
        }
        
        if(token == currentTotal){
            return 'bad';
        } else {
            return checkGoodOrBad(tokenTotal, 0, tokenTotal);
        }
    }
    // console.log(checkGoodOrBad(13)); // good or bad. 


    const person = {
        id: 1,
        secret: '1secret',
        children: [
            {
                id: 2,
                secret: '2secret',
                children: [
                    
                ]
            },
            {
                id: 3,
                children: [
                    {
                        id: 4,
                        secret: '4secret',
                        children: []
                    }
                ]
            }
        ]
    }
    // obj : person
    // secret path: "1;2;3;4"
    // old code
    function getExactSecret(obj, secretPath){
        const path = secretPath.split(';');
        if(Array.isArray(path)){
            let activePerson = obj; // save current object
            for(let i = 1; i < path.length ; i++){
                // console.log(activePerson?.id);
                if(activePerson?.id == path[i-1] && activePerson.children.length) {
                    activePerson = activePerson.children.find((child) => {
                        return child.id == path[i]
                    });
                } else {
                    return;
                }
            }
            return activePerson?.secret;
        }
        return
    }

    function getExactSecret(obj, secretPath){
        const path = secretPath.split(';');
        if(path.length == 1) {
            if(obj.id == [path[0]]) return obj.secret;
            return;
        }
        
        let currentTarget = obj;
        for(let i = 1; i < path.length; i++){
            const childIndex = currentTarget.children.findIndex((child) => child.id == path[i]);
            if(currentTarget?.children?.length && childIndex > -1){
                currentTarget = currentTarget.children[childIndex];
            } else {
                return;
            }
        }

        return currentTarget.secret
    }

    // console.log(getExactSecret(person, "1;3;4")); // print 4secret
    // console.log(getExactSecret(person, "2")); // print undefined

/************************ \reputation interview\ *************************/

    // Problem: implement binary search

    /**
     * @param {Array<number>} arr;
     * @param {number} targetElm;
     * @return {number};
    */
    function binarySearch(arr, targetElm) {
        let startPoint = 0;
        let endPoint = (arr.length - 1);

        while(startPoint <= endPoint){
            const midPoint = Math.floor((startPoint + endPoint) / 2);
            if(targetElm === arr[midPoint]) return midPoint;

            if(targetElm < arr[midPoint]) {
                endPoint = midPoint - 1;
            } else {
                startPoint = midPoint + 1;
            }
        }

        return -1
    }

    // console.log(binarySearch([2,3,4,5,6,7,8,9], 0));


/************************ \Securiti.ai interview\ *************************/
    // Question 01 - Write a function which outputs like below consoles

    var add1 = x => x+1
    var mul2 = x => x*2
    var div4 = x => x/4

    // console.log(pipe(add1, mul2, div4)(3)) // = 2
    // console.log(pipe(mul2, add1, div4)(3)) // = 1.75
    // console.log(pipe(mul2, div4, add1)(3)) // = 2.5
    // console.log(pipe(mul2, div4, add1, mul2)(3)) // = 5


    // Answer: Wrote this function and returned expected output.
    function pipe(...cbFn) {
        return function(int){
            let output = int;
            for(let fn of cbFn){
                output = fn(output);
            }
            return output;
        }
    }


    // Question 02 - tell me the output of fallowing code.

    // setTimeout(() => {
    //     new Promise((resolve) => {
    //         resolve() 
    //         console.log(6)
    //     }).then(() => {
    //         console.log(4)
    //     })
    //     console.log(7)
    // });

    // new Promise((resolve) => {
    //     resolve()
    //     console.log(3)
    // }).then(() => {
    //     setTimeout(() => {
    //         console.log(5)
    //     })
    //     console.log(1)
    // })

    // console.log(2)

    // Answer: // 2 > 3 > 1 > 5 > 7 > 6 > 4
    // Actual Output: // 3 > 2 > 1 > 6 > 7 > 4 > 5


    // Question 03 - write the generator function
    // var mygenerator = generator("hi");
    // console.log(mygenerator.next()); // returns "h"
    // console.log(mygenerator.next()) // returns "i"
    // console.log(mygenerator.next()) // returns null

    // Answer: wrote this function and returned expected output
    function generator(str){
        let counter;
        return {
            next: function(){
                if(counter !== undefined) counter++;
                else counter = 0;
                return str[counter] ? str[counter] : null;
            }
        }
    }

    // Question 04 - implement cbMgr function and it should return below output.
    // cbMgr([f1, f2, f3]);
    // Expected Output: >> 
        // Started f1
        // 	Completed f1
        // 	Started f2
        // 	Completed f2
        // 	Started f3
        // Completed f3

    function f1(callback) {
        console.log('Started f1');
        setTimeout(() => {
            console.log('Completed f1');
            callback();
        }, 3000);
    }

    function f2(callback) {
        console.log('Started f2');
        setTimeout(() => {
            console.log('Completed f2');
            callback();
        }, 2000);
    }

    function f3(callback) {
        console.log('Started f3');
        setTimeout(() => {
            console.log('Completed f3');
            callback();
        }, 1000);
    }
    
    // Answer: tried with loop and recursion but output is not as expected! (Very bad!!)
    function cbMgr(arrOfCbFn, count = 0){
        // for(let cbFn = 1; cbFn < arrOfCbFn.length; cbFn++){
        //     arrOfCbFn[cbFn - 1](arrOfCbFn[cbFn]);
        // }
        if(count < arrOfCbFn.length){
            arrOfCbFn[count](arrOfCbFn[count+1]);
            // cbMgr(arrOfCbFn, count++);
        }
    }

    // cbMgr([f1, f2, f3]);

/************************ \L&T interview\ *************************/

    // Question 01 - Remove Duplicates and sort
    const duplicateIntArray = [4,2,6,8,2,1,4,6,9,8,3,2,5,8,4,1,4,6];
    function removeDuplicates(arr){
        const output = {};

        for(let i = 0; i < arr.length; i++){
            output[arr[i]] = arr[i];
        }

        return Object.values(output);
    }
    // console.log(removeDuplicates(duplicateIntArray));

    const arrUnsorted = [2,1,6,8,3];
    function bubbleSort(arr) {
        for(let i = 0; i < arr.length; i++) {
            for(let j = i+1; j < arr.length; j++) {
                if(arr[i] > arr[j]) {
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                }
            }
        }
        return arr;
    }
    // console.log(bubbleSort(arrUnsorted));

})()