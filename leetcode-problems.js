// 01 - Roman to Integer
// Ref: https://leetcode.com/problems/roman-to-integer

/**
 * @param {string} s
 * @return {number}
*/
var romanToInt = function(s) {
    const romanChars = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    };
    const sArray = s.split('');
    const validRomanChars = Object.keys(romanChars);

    // Constraints
    // 1 <= s.length <= 15
    // if(1 <= sArray.length && sArray.length <= 15){
    //   return;
    // }
    
    // s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
    for(let sKey of sArray) {
      if(!validRomanChars.includes(sKey)) {
        console.log('char', sKey);
        return;
      }
    }

    let romanOutput = 0;
    for(let i = 0; i < sArray.length; i++) {
      const currentNumber = romanChars[sArray[i]];
      const nextNumber = romanChars[sArray[i + 1]];

      if(currentNumber < nextNumber) {
        romanOutput -= currentNumber;
      } else {
        romanOutput += currentNumber;
      }
    }
    return romanOutput;
};

// console.log('Final Output: ', romanToInt('MCMXCIV'));

// 02 - Palindrome Linked List
// Ref: https://leetcode.com/problems/palindrome-linked-list

/**
 * @param {Array<number>} head
 * @return {boolean}
*/

var isPalindrome = function(head) {
  let _isPalindrome = true;
  for(let i = 0; i < head.length; i++) {
    if(head[i] !== head[head.length -1 - i]) {
      _isPalindrome = false;
    }
  }
  return _isPalindrome;
};

// console.log(isPalindrome([1,2,1]));
// Solution works in local but it shows wrong in leetcode. research more!


// 03 - 383. Ransom Note
// Ref: https://leetcode.com/problems/ransom-note

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
*/
var canConstruct = function(ransomNote, magazine) {
  let isRansomeNote = true;
  const magazineMap = magazine.split('').reduce((acc, char) => {
    acc.hasOwnProperty(char) ? ++acc[char] : acc[char] = 1;
    return acc;
  }, {});
  for(let i = 0; i < ransomNote.length; i++) {
    if(magazineMap.hasOwnProperty(ransomNote[i]) && magazineMap[ransomNote[i]]) {
      --magazineMap[ransomNote[i]];
    } else {
      isRansomeNote = false;
    }
  }
  return isRansomeNote;
};

// console.log(canConstruct('aa', 'aab'));

// 04 - 412. Fizz Buzz
// Ref: https://leetcode.com/problems/fizz-buzz

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const answer = [];
    for(let i = 1; i <= n; i++){
      const fizz = i % 3 === 0,
      buzz = i % 5 === 0;
      
      answer.push(fizz ? (buzz ? 'FizzBuzz' : 'Fizz') : buzz ? 'Buzz' : i.toString());
    }
    return answer;
};

// console.log(fizzBuzz(15));

// 05 - 876. Middle of the Linked List
// Ref: https://leetcode.com/problems/middle-of-the-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {Array<number>} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  const middleIndex = head?.length % 2 == 0 ? (head?.length / 2 + 1) : Math.round(head?.length / 2);
  const outputArray = [];
  for(let i = middleIndex - 1; i < head.length; i++){
    outputArray.push(head[i]);
  }
  return outputArray;
};

// console.log(middleNode([1,2,3,4,5,6]));

// ***************************************// End //************************************** //

// 70. Climbing Stairs
// Ref: https://leetcode.com/problems/climbing-stairs/

/**
 * @param { number } n
 * @return {number}
 */
 var climbStairs = function(n) {
  const noOfways = [1, 2];
  for(let i = 2; i <= n; i++) {
    noOfways[i] = noOfways[i - 1] + noOfways[i - 2];
  }
  return noOfways[n-1];
};

// console.log(climbStairs(4));

// ***************************************// End //************************************** //

// Longest Common Substring | DP-29
// Ref: https://www.geeksforgeeks.org/longest-common-substring-dp-29/
// Problem - Given two strings ‘subStr1’ and ‘subStr2’, find the length of the longest common substring. 
// Sample - Input : subStr1 = “ScriptJava”, subStr2 = “Java” 
// Output : 4 
// Explanation:
// The longest common substring is “Java” and is of length 4.

/**
 * @param { string } str1
 * @param { string } str2
 * @return {number}
 */

function longestCommonSubstrLength(str1, str2) {
  // return 0 if str2 is empty!
  if(str2.length === 0) return 0;

  const dp = Array(str1.length + 1).fill(0).map(() => Array(str2.length + 1).fill(0));
  let maxLength = 0;
  let indexOfLongestString;

  for(let i = 1; i <= str1.length; i++){
    for(let j = 1; j <= str2.length; j++){
      if(str1[i - 1] === str2[j - 1]) {
        dp[i][j] = 1+dp[i - 1][j - 1];
        
        if(maxLength < Math.max(maxLength, dp[i][j])){
          maxLength = Math.max(maxLength, dp[i][j]);
          indexOfLongestString = i;
        }
      }
    }
  }
  
  const longestString = str1.substring(indexOfLongestString - maxLength, indexOfLongestString);

  console.log(dp); // check log
  console.log(longestString);

  return maxLength;
};

// console.log(longestCommonSubstrLength('ScriptJava', 'Java'));

// Time Complexity: O(str1.length * str2.length) -> O(10 * 4)
// Space Complexity: O(str1.length * str2.length) -> O(10 * 4)

// ***************************************// End //************************************** //

// Longest Common subsequence
// Ref: add
// Problem - add
// Sample - Input : subStr1 = "hometown", subStr2 = "omkwn" 
// Output : 4
// Explanation:
// The longest common subsequence length 4.

/**
 * @param { string } str1
 * @param { string } str2
 * @return {number}
 */

function longestCommonSubsequence(str1, str2){
  const dp = Array(str1.length + 1).fill(0).map(() => Array(str2.length + 1).fill(0));
  for(let i = 1; i <= str1.length; i++){
    for(let j = 1; j <= str2.length; j++){
      if(str1[i - 1] === str2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
        // console.log(str1[i - 1], str2[j - 1]);
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }
  
  // console.log(dp);

  return dp[str1.length][str2.length];
}

// console.log(longestCommonSubsequence('hometown', 'omkwn'));
// console.log(longestCommonSubsequence('javascript', 'vauxpt'));

// Time Complexity: O(str1.length * str2.length) -> O(10 * 4)
// Space Complexity: O(str1.length * str2.length) -> O(10 * 4)

// ***************************************// End //************************************** //

// Reverse word in sentence
// Ref: add
// Problem - add
// Sample - Input : str = "I Love You"
// Output : "You Love I"
// Explanation:

/**
 * @param { string } str
 * @return {string}
 */

function reverceWordSentence(str){
  const reversedStr = str.split('').reverse().join('');
  let wordSP = 0;
  let wordEP = 0;
  let word = '';
  
  console.log('reversedStr: ', reversedStr);
  for(let i = 0; i<reversedStr.length; i++){
    // console.log(reversedStr[i]);
    if(reversedStr[i] === ' '){
      // console.log(i);
      wordEP = i;

      if(wordEP > wordSP){
        while(wordEP > 0) {
          wordEP--;
          console.log(reversedStr[wordEP]);
        }
      }
    }
  }
  return reversedStr;
}

// console.log(reverceWordSentence("I Love You"));

// Time Complexity: 
// Space Complexity: 