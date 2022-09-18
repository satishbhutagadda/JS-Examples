hackerrank1-js.txt

// Q1 - 1. Identifying Triangles
// Determine if three values form the sides of a triangle.
// In the assembly line, the factory assembles three parts 'a' 'b' 'c' of a triangle toy. A valid toy is one where the three sides can connect at their endpoints.
// There are two forms of valid triangles to identify.

// <ul>
// 	<li>If 2 parts are of equal length, the form is 'Isosceles'</li>
// 	<li>If all 3 parts are of equal length, the form is 'Equilateral'</li>
// </ul>

// If a toy is not valid or is not one of those 2 forms, it is 'None of these'.

// Example:

// <em>triangleToy=['2 2 1', '3 3 3', '3 4 5', '1 1 3']</em>


// <ul>
// 	<li>The first triangle is valid and has 2 equal parts, so the form is 'Isosceles'</li>
// 	<li>The second is valid and has 3 equal parts, so the form is 'Equilateral'</li>
// 	<li>The third is valid but not one of the two specificforms.</li>
// 	<li>The fourth is not valid.</li>
// 	<li>The result is<em>["Isosceles", "Equilateral", "None of these", "None of these"]</em>
// </li>
// </ul>


// Function Description 

// Complete the function <em>triangleType</em> in the editor.


// <em>triangleType</em> has the following parameter(s):

// <em>string triangleToy[n]:</em> an array of strings comprised of three space-separated integers



// Returns:

// <em>string[n]: </em>an array of answer strings in the order processed.
// <!--
// Complete the function in the editor below. It has the following parameter:

// <table class="challenge-params">
// 	<tbody>
// 		<tr>
// 			<th>Name</th>
// 			<th>Type</th>
// 			<th class="description">Description</th>
// 		</tr>
// 		<tr>
// 			<td class="code">abc</td>
// 			<td class="code">string array</td>
// 			<td class="left">Each index <em>i</em> contains a string of three integer values in the form <em>a b c</em></td>
// 		</tr>
// 	</tbody>
// </table>

// The function must return an array of <em>n</em> strings where each index <em>i</em> contains the answer for <em>abc<sub>i</sub></em>. Each answer <em>must</em> be one of the following case-sensitive values:

// <ul>
// 	<li><em>Isosceles</em></li>
// 	<li><em>Equilateral</em></li>
// 	<li><em>None of these</em></li>
// </ul>
// -->



// <p class="section-title" title="Guarantees about the test case dataset.">Constraints

// <ul>
// 	<li><em>1 ≤ n ≤ 5000</em></li>
// 	<li><em>1 ≤ a, b, c ≤ 2000</em></li>
// </ul>


// <!--       <StartOfInputFormat> DO NOT REMOVE THIS LINE-->

// <details><summary class="section-title">Input Format for Custom Testing</summary>

// <div class="collapsable-details">
// Input from stdin will be processed as follows and passed to the function.



// The first line contains an integer <em>n</em>, the size of the array <em>triangleToy</em>.

// Each of the next <em>n</em> lines contains a string <em>triangleToy[i]</em> where <em>0 ≤ i &lt; n</em>.


// </div>
// </details>

// <details open="open"><summary class="section-title">Sample Case 0</summary>

// <div class="collapsable-details">
// <p class="section-title">Sample Input 0

// <pre>STDIN       Function 
// -----       -------- 
// 4        →  <em>triangleToy[] size n = 4</em>
// 36 36 30  →  <em>triangleToy = ['36 36 30', '47 8 60', '46 96 90', '86 86 86']</em>
// 47 8 60
// 46 96 90
// 86 86 86</pre>

// <p class="section-title">Sample Output

// <pre>Isosceles
// None of these
// None of these
// Equilateral</pre>

// <p class="section-title">Explanation


// <ul>
// 	<li>The first triangle is valid and has 2 parts of equal length.</li>
// 	<li>The second triangle is not valid.</li>
// 	<li>The third triangle is valid, but not one of the two specific types.</li>
// 	<li>The fourth has 3 parts of equal length.</li>
// </ul>
// </div>
// </details>
// </div>
// </div></div></section></div></div>










// Solution

// const triangleToy = ['1 2 3', '2 2 2'];
// const keyObj = {
//   2: "Isosceles",
//   3: "Equilateral"  
// }
// const result = [];
// for(let i = 0; i < triangleToy.length; i++){
//   const str = triangleToy[i].split(' ');
//   const storeObj = {} 
//   for(let j = 0; j < str.length; j++){
//     // console.log(storeObj[str[j]]);
//     if(storeObj[str[j]]) {
//       storeObj[str[j]]++
//     } else {
//       storeObj[str[j]] = 1;
//     }
//   }
//   // console.log(Object.values(storeObj)); 
//   const maxValue = Math.max(...Object.values(storeObj));
//   maxValue > 1 ? result.push(keyObj[maxValue]) : result.push('None of these');
  
// }
// console.log(result);

hackerrank2-js.txt

// 1. Compliance Priorities

// A system used by a compliance department contains a queue of all current compliance issues along with their priorities. The priorities range from 1 to 99. Create an algorithm that will reassign priorities so that the value of the maximum priority assigned is minimized, keeping the relative priorities between all issues the same.

// Example: priorities = [1, 4, 8, 4]

// There are three priority levels: 1, 4 and 8. The array elements are reassigned to priorities [1, 2, 3, 2]. Their relative priorities are maintained while the value of the maximum priority is minimized.

// Given the priorities of the issues, return a list that contains the reassigned priority values without reordering.

// Function Description
// Complete the reassignedPriorities function in the editor below. It must return an integer array that represents the reassigned priorities of each element in the original order.

// reassignedPriorities has the following parameter(s):

// int priorities[n]: an array of integers that represents current priorities



// Constraints

// <ul>
// 	<li>1 ≤ n ≤ 10<sup>5</sup></li>
// 	<li>1 ≤ priorities[i] ≤ 99</li>
// </ul>

// Input Format For Custom Testing

// The first line contains an integer, n, that denotes the size of priorities.

// Each line i of the n subsequent lines (where 0 ≤ i &lt; n) contains priorities[i].


// Sample Case 0

// Sample Input For Custom Testing

// STDINFunction
// -------------
// 4→priorities[] size n = 4
// 1→priorities = [1, 3, 7, 3]
// 3
// 7
// 3


// Sample Output

// 1
// 2
// 3
// 2


// Explanation



// There are three priority levels: 1, 3, 7. They can be reassigned priorities of 1, 2 and 3 respectively. Replacing the values in priorities returns [1, 2, 3, 2].
// Sample Case 1


// Sample Input For Custom Testing

// STDINFunction
// -------------
// 5→priorities[] size n = 5
// 2→priorities = [2, 9, 3, 2, 3]
// 9
// 3
// 2
// 3


// Sample Output

// 1
// 3
// 2
// 1
// 2


// Explanation


// There are three priority levels: 2, 3, 9. These can be reassigned priorities of 1, 2 and 3 respectively. Replacing the values in priorities returns [1, 3, 2, 1, 3].



// solution: 
// const arr = [2, 9, 3, 2, 3];
// function test(a){
//   const argCopy = Object.assign([], a);
//   const sortedAndNoDuplicates = [...new Set(a.sort((a, b) => a-b))]
  
//   console.log(sortedAndNoDuplicates)
//   let priority = {}
//   for(let i = 0; i < sortedAndNoDuplicates.length; i++){
//     priority[sortedAndNoDuplicates[i]] = i+1;
//   }
//   return argCopy.map((key) => priority[key]);
// }
// console.log(test(arr))

hackerrank3-js

// 1. Picking Tickets
// Find the largest number of ticket prices that cover an unbroken range of integers.

// Consider an array of n ticket prices, tickets. A number, m, is defined as the size of some subsequence of tickets, s, where each element covers an unbroken range of integers. That is, if the elements in sare sorted, the absolute difference between any elements j and j + 1 is either 0 or 1. Determine the maximum length of a subsequence chosen from the ticketsarray.



// Example: tickets = [8, 5, 4, 8, 4]



// Valid subsequences, sorted, are {4, 4, 5} and {8, 8}. These subsequences have m values of 3 and 2, respectively. Return 3.



// Function Description 

// Complete the function maxTickets in the editor below.



// maxTickets has the following parameter(s):

// int tickets[n]: the ticket prices



// Returns

// int: the maximum possible value of m

// Constraints

// <ul>
// 	<li>1 ≤ n ≤ 10<sup>5</sup></li>
// 	<li>1 ≤ tickets[i] ≤ 10<sup>9</sup></li>
// </ul>



// Input Format For Custom Testing


// <!-- Input from stdin will be processed as follows and passed to the function. -->
// The first line contains an integer, n, the number of elements in tickets.<br>
// Each line i of the n subsequent lines (where 0 ≤ i &lt; n) contains an integer, tickets[i].





// Sample Case 0


// Sample Input 0

// STDINFunction
// -------------
// 4→tickets[] size n = 4
// 4→tickets = [4, 13, 2, 3]
// 13
// 2
// 3



// Sample Output 0

// 3



// Explanation 0



// There are two subsequences of tickets that contain consecutive integers when sorted: {2, 3, 4} and {13}. These subsequences have m values of 3 and 1, respectively.




// // Solution

// function maxTickets(tickets) {
//     const sortedTickets = tickets.sort((a, b) => a - b);
//     const isSubsequence = [];
//     for(let i = 1; i < sortedTickets.length; i++){
//         const prvTicket = sortedTickets[i-1];
//         if((prvTicket + 1) === sortedTickets[i] || prvTicket === sortedTickets[i]){
//             if(i === 1){
//                 isSubsequence.push(1);
//             }
//             ++isSubsequence[isSubsequence.length - 1];
//         } else {
//             isSubsequence.push(1);
//         }
//     }
//     return Math.max(...isSubsequence);
// }



// // ***************************************************************************************


// 5. JavaScript: Verify Input Value


// In this challenge, the task is to implement the functionmakeInputVerifier suchthat:

// <ul>
// 	<li>
// 	it takes 2 integer arguments, minimum and maximum.
// 	</li>
// 	<li>
// 	returns a new function that we'll call verify.
// 	</li>
// 	<li>
// 	the functionverifytakes a single integer argument, inputValue, and does the following:

// 	<ul>
// 		<li>
// 		IfinputValue is less than </i>minimum, it returns 'Input is less than minimum value'.
// 		</li>
// 		<li>
// 		IfinputValue is greaterthan or equalto</i>minimum and less than or equal to maximum,it returns 'Input is in range'.
// 		</li>
// 		<li>
// 		IfinputValue is greaterthan </i>maximum, it returns 'Input is morethan maximum value'.
// 		</li>
// 	</ul>
// 	</li>
// </ul>



// For example, callingmakeInputVerifier(3, 10) must return a functionverify, such that callingverify(5) returns 'Input in range' because 5 &gt; 3 (the minimum) and 5 &lt; 10 (the maximum).



// Your implementation of the functionwill be tested by a provided code stub on several input files. Each input file contains 3 integer parameters for the function calls. ThemakeInputVerifierfunction will be called with the first and second integer parameters (minimum and maximum respectively), and then the returned function will be called with the third parameter. Theresult of that latter callwill be printed to the standard output by the provided code.



// Constraints

// <ul>
// 	<li>
// 	minimum ≤ maximum
// 	</li>
// </ul>



// Input Format For Custom Testing


// The first line contains an integer, minimum, to be passed to the makeInputVerifier function.

// The second line contains an integer, maximum, to be passed to the makeInputVerifier function.

// The third line </i>contains an integer, </i>inputValue, to be passed to function </i>returned by the makeInputVerifier function.


// <!-- </StartOfInputFormat> DO NOT REMOVE THIS LINE-->

// Sample Case 0


// Sample Input For Custom Testing

// 10
// 20
// 15


// Sample Output

// Input is in range


// Explanation

// Calling makeInputVerifier(10, 20) returns a function verify(15)that returns 'Input is in range' because 15 &gt; 10 and 15 &lt; 20.



// Sample Case 1


// Sample Input For Custom Testing

// 10
// 20
// 5


// Sample Output

// Input is less than minimum value


// Explanation

// Calling makeInputVerifier(10, 20) returns a function verify(5)that returns 'Input is less than minimum value' because 5 &lt; 10.



// Sample Case 2


// Sample Input For Custom Testing

// 10
// 20
// 25


// Sample Output

// Input is morethan maximum value


// Explanation

// Calling makeInputVerifier(10, 20) returns a function verify(25)that returns 'Input is morethan maximum value' because 25 &gt; 20.





// // *************************************************************************************************


// Q6. Reach the End in Time


// A 2-D grid consisting of some blocked (represented as '#') and some unblocked (represented as '.') cells is given. The starting position of a pointer is in the top-left corner of the grid. It is guaranteed that the starting position is in an unblocked cell. It is also guaranteed that the bottom-right cell is unblocked. Each cell of the grid is connected with its right, left, top, and bottom cells (if those cells exist). It takes 1 second for a pointer to move from a cell to its adjacent cell. If the pointer can reach the bottom-right corner of the grid withinmaxTimeseconds, return the string 'Yes'. Otherwise, return the string 'No'.



// Example

// rows = 3

// grid = ['..##', '#.##', '#...']

// maxTime = 5

// ..##
// #.##
// #...

// It will take the pointer5seconds to reach the bottom right corner.As long asmaxTime ≥ 5, return 'Yes'.



// Function Description

// Complete the function reachTheEnd in the editor below.



// reachTheEnd has the following parameter(s):

// string grid[r]:the rows of the grid

// int maxTime: the maximum time to complete the traversal



// Returns:

// string: the final string; either 'Yes' or 'No'



// Constraints

// <ul>
// 	<li>1 ≤ rows ≤ 500</li>
// 	<li>0 ≤ maxTime ≤ 10<sup>6</sup></li>
// </ul>



// Input Format For Custom Testing


// The first line contains an integer,rows, that denotes the number of rows of the 2-D grid

// In each of the next rowslines, thei<sup>th</sup>line contains a string denoting the configuration of the i<sup>th</sup> row of the grid.

// The last line contains an integer, maxTime,that represents the maximum time in seconds the pointer has to reach the bottom right cell.



// Sample Case 0


// Sample Input

// STDIN     Function
// -----     -----
// 2      →  size of grid[] rows = 2
// .. →grid = ['..', '..']
// ..
// 3      →  maxTime = 3



// Sample Output

// Yes



// Explanation

// The grid has 2 rows and 2 columns and the time within which the pointer needs to reach the bottom-right cell is 3 seconds. Starting from the top-left cell, the pointer can either move to the top-right unblocked cell or bottom-left unblocked cell then to the bottom-right cell. It takes 2 seconds to reach the bottom-right cell on either path. Thus, the pointer reaches the bottom-right cell within the 3 seconds allowed, and 'Yes' is returned.



// Sample Case 1


// Sample Input

// STDIN     Function
// -----     -----
// 2      →  grid[] size rows = 2
// .# → grid = ['.#', '#.']
// #.
// 2      →  maxTime = 2



// Sample Output

// No



// Explanation

// The grid has 2 rows and 2 columns and the time within which the pointer needs to reach the bottom-right cell is 2 seconds. It can neither move to the top-right cell nor to the bottom-left cell and so the pointer cannot reach the bottom-right cell, regardless of the time constraint.

// Test Codility

Question 01:

There are N empty glasses with a capacity of 1, 2, ..., N liters (there is exactly one glass of each unique capacity). 
You want to pour exactly K liters of water into glasses. Each glass may be either full or empty (a glass cannot be partially filled). 
What is the minimum number of glasses that you need to contain K liters of water?

Write a function:
function solution(N, K);
that, given two integers N and K, returns the minimum number of glasses that are needed to contain exactly K liters of water. If it is not possible to pour exactly K liters of water into glasses then the function should return −1.
Examples:
1. Given N = 5 and K = 8, the function should return 2. There are five glasses of capacity 1, 2, 3, 4 and 5. You can use two glasses with capacity 3 and 5 to hold 8 liters of water.
2. Given N = 4 and K = 10, the function should return 4. You must use all the glasses to contain 10 liters of water.
3. Given N = 1 and K = 2, the function should return −1. There is only one glass with capacity 1, so you cannot pour 2 liters of water.
4. Given N = 10 and K = 5, the function should return 1. You can use the glass with capacity 5.
Write an efficient algorithm for the following assumptions:
N is an integer within the range [1..1,000,000];
K is an integer within the range [1..1,000,000,000].



Question 02:

You are given a string S containing lowercase English letters. 
Your task is to calculate the minimum number of letters that need to be removed in order to make it possible to build a palindrome from the remaining letters.
When building the palindrome, you can rearrange the remaining letters in any way.</p>

A palindrome is a string that reads the same both forwards and backwards.
Some examples of palindromes are: "kayak", "radar", "mom".
Write a function:
function solution(S);
which, given a string of length N, returns the minimum number of letters that need to be removed.
Examples:
1. Given S = "ervervige", your function should return 2. After removing the letter "g" and one "e", we may create a word "reviver", which is a palindrome.
2. Given S = "aaabab", your function should return 0. We may create a word "aabbaa", which is a palindrome and uses all of the letters.
3. Given S = "x", your function should return 0. String "x" is a palindrome itself, so we do not have to delete any letter.
Write an efficient algorithm for the following assumptions:
N is an integer within the range [1..200,000]
S contains only lowercase English letters.

// Test Amazon:

You are inside question view of Amazon Transaction Logs (example question)

1. Amazon Transaction Logs (example question)
Your Amazonian team is responsible for maintaining a monetary transaction service. The transactions are tracked in a log file.

A log file is provided as a string array where each entry represents a transaction to service. Each transaction consists of:

sender_user_id:  Unique identifier for the user that initiated the transaction.  It consists of only digits with at most 9 digits.
recipient_user_id:  Unique identifier for the user that is receiving the transaction.  It consists of only digits with at most 9 digits.
amount_of_transaction:  The amount of the transaction.  It consists of only digits with at most 9 digits.
The values are separated by a space. For example, "sender_user_id recipient_user_id amount_of_transaction".

 

Users that perform an excessive amount of transactions might be abusing the service so you have been tasked to identify the users that have a number of transactions over a threshold. The list of user ids should be ordered in ascending numeric value.

 
Example

logs = ["88 99 200", "88 99 300", "99 32 100", " 12 12 15"]

threshold = 2

 

The transactions count for each user, regardless of role are:

ID     Transactions
--     ------------
99     3
88     2
12     1
32     1
There are two users with at least threshold = 2 transactions: 99 and 88.  In ascending order, the return array is ['88', '99'].

 

Note:  In the last log entry, user 12 was on both sides of the transaction. This counts as only 1 transaction for user 12.

 

Function Description 

Complete the function processLogs in the editor below.

 

The function has the following parameter(s):

    string logs[n]: each logs[i] denotes the ith entry in the logs

    int threshold: the minimum number of transactions that a user must have to be included in the result

Returns:

    string[]: an array of user id's as strings, sorted ascending by numeric value

 

Constraints

1 ≤ n ≤ 105
1 ≤ threshold ≤ n
The sender_user_id, recipient_user_id and amount_of_transaction contain only characters in the range ascii['0'-'9'].

The sender_user_id, recipient_user_id and amount_of_transaction start with a non-zero digit.

0 < length of sender_user_id, recipient_user_id, amount_of_transaction ≤ 9.
The result will contain at least one element.

Input Format Format for Custom Testing
Sample Case 0
Sample Case 1
Info
JavaScript (Node.js)
Autocomplete Ready




More
126272829303132333435363738394041
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'processLogs' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY logs
 *  2. INTEGER threshold
 */

Line: 26 Col: 1

Test Results

Custom Input

Run Code

Run Tests

Submit
callbackfn: (value: T, index: number, array: readonly T[]) => U, A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array., Calls a defined callback function on each element of an array, and returns an array that contains the results., hint







2. Items in Containers (example question)
Amazon would like to know how much inventory exists in their closed inventory compartments. Given a string s consisting of items as "*" and closed compartments as an open and close "|", an array of starting indices startIndices, and an array of ending indices endIndices, determine the number of items in closed compartments within the substring between the two indices, inclusive.

An item is represented as an asterisk ('*' = ascii decimal 42)
A compartment is represented as a pair of pipes that may or may not have items between them ('|' = ascii decimal 124).
 

Example

s = '|**|*|*'

startIndices = [1, 1]

endIndices = [5, 6]

 

The string has a total of 2 closed compartments, one with 2 items and one with 1 item. For the first pair of indices, (1, 5), the substring is '|**|*'. There are 2 items in a compartment.

For the second pair of indices, (1, 6), the substring is '|**|*|' and there are 2 + 1 = 3 items in compartments.

Both of the answers are returned in an array,  [2, 3].

 

Function Description . 

Complete the numberOfItems function in the editor below. The function must return an integer array that contains the results for each of the startIndices[i] and endIndices[i] pairs.

 

numberOfItems has three parameters:

  -  s: A string to evaluate

  -  startIndices: An integer array, the starting indices. 

  -  endIndices: An integer array, the ending indices. 

 

Constraints

1 ≤ m, n ≤ 105
1 ≤ startIndices[i]  ≤ endIndices[i] ≤ n
Each character of s is either '*' or '|'
Input Format For Custom Testing
The first line contains a string, s.

The next line contains an integer, n, the number of elements in startIndices.

Each line i of the n subsequent lines (where 1 ≤ i ≤ n) contains an integer, startIndices[i].

The next line repeats the integer, n, the number of elements in endIndices.

Each line i of the n subsequent lines (where 1 ≤ i ≤ n) contains an integer, endIndices[i].

Sample Case 0
Sample Input For Custom Testing

STDIN         Function 
-----         --------
*|*|      →   s = "*|*|"
1         →   startIndices[] size n = 1
1         →   startIndices = 1
1         →   endIndices[] size n = 1
3         →   endIndices = 3
Sample Output

0
Explanation

s = *|*|

n = 1

startIndices = [1]

n = 1

startIndices = [3]

 

The substring from index = 1 to index = 3 is '*|*'. There is no compartments in this string.

Sample Case 1
Sample Input For Custom Testing

STDIN         Function
-----         --------
*|*|*|    →   s = "*|*|*|"
1         →   startIndices[] size n = 1 
1         →   startIndices = 1
1         →   endIndices[] size n = 1
6         →   endIndices = 6
Sample Output

2
Explanation

s = '*|*|*|'

n = 1

startIndices = [1]

n = 1

endIndices = [6]

 

The string from index = 1 to index = 6 is '*|*|*|'. There are two compartments in this string at (index = 2, index = 4) and (index = 4, index = 6). There are 2 items between these compartments.

Info
JavaScript (Node.js)
Autocomplete Ready




More
12627282930313233343536373839404142
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'numberOfItems' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER_ARRAY startIndices
 *  3. INTEGER_ARRAY endIndices

Line: 26 Col: 1

Test Results

Custom Input

Run Code

Run Tests

Submit
callbackfn: (value: T, index: number, array: readonly T[]) => U, A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array., Calls a defined callback function on each element of an array, and returns an array that contains the results., hint

