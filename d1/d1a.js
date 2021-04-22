/* 1) MAX CHAR

Given a string, return the character that is most
commonly used in the string.

--- Examples
    maxChar("abcccccccd") === "c"
    maxChar("apple 1231111") === "1"
*/

const maxChar = function (str) {
  let max = 0;
  let maxChar = "";
  let array = str.split("");
  for (i = 0; i < array.length; i++) {
    if (str.split(array[i]).length > max) {
      max = str.split(array[i]).length;
      maxChar = array[i];
    }
  }
  return maxChar;
};

// console.log(maxChar("abcccccccd"));

/* 2) ANAGRAMS

Check to see if two provided strings are anagrams of each other.
One string is an anagram of another if it uses the same characters
in the same quantity. Only consider characters, not spaces
or punctuation.  Consider capital letters to be the same as lower case

--- Examples
  anagrams('rail safety', 'fairy tales') --> True
  anagrams('RAIL! SAFETY!', 'fairy tales') --> True
  anagrams('Hi there', 'Bye there') --> False
*/

function anagramChecker(string1, string2) {

  string1 = string1.replace(/[^\w]/g, "").toLowerCase()
  string2 = string2.replace(/[^\w]/g, "").toLowerCase()

  const charMap1 = getCharMap(string1)
  const charMap2 = getCharMap(string2)


  for (let char in charMap1) {
    if (charMap1[char] !== charMap2[char]) {
      return false
    }
  }

  return true

}

function getCharMap(string) {
  let charMap = {}

  for (let char of string) {
    charMap[char] = charMap[char] + 1 || 1

  }
  return charMap
}

// console.log(anagramChecker('Hi there', 'Bye there'))

/* 3) ANAGRAMS 2

Given a word and a list of possible anagrams, select the correct sublist.

--- Examples 

    "listen" and a list of candidates like "enlists" "google" "inlets" "banana" the program should return a list containing "inlets".
*/

let listOfWords = ["enlists", "google", "inlets", "banana"];

const anagram2 = function (str, list) {
  let result = [];

  list.forEach(word => {

    if (anagramChecker(str, word)) {
      result.push(word)
    }

  });
  return result
};

// console.log(anagram2("listen", listOfWords));

/* 4) PALINDROME
 
Given a string, return true if the string is a palindrome
or false if it is not.  Palindromes are strings that
form the same word if it is reversed. Do include spaces
and punctuation in determining if the string is a palindrome.
 
--- Examples:
 
    palindrome("abba") === true
    palindrome("abcdefg") === false
 */

const reverse1 = function (string) {
  return string.split("").reverse().join("");
};

const palindrome = (input) => {
  return input === reverse1(input);
};

// console.log(palindrome("abba"))

/* 5) REVERSE INT
 
Given an integer, return an integer that is the reverse
ordering of numbers.
 
--- Examples
 
    reverseInt(15) === 51
    reverseInt(981) === 189
    reverseInt(500) === 5
    reverseInt(-15) === -51
    reverseInt(-90) === -9
 */

const reverseInteger = function (n) {
  const reversed = n.toString().split('').reverse().join('');
  return Math.sign(n) * parseInt(reversed);
};

// console.log(reverseInteger(-123))

/* 6) STEPS
 
Write a function that accepts a positive number N.
The function should console log a step shape
with N levels using the # character.  Make sure the
step has spaces on the right hand side!
 
--- Examples
 
    steps(2)
        '# '
        '##'
    steps(3)
        '#  '
        '## '
        '###'
    steps(4)
        '#   '
        '##  '
        '### '
        '####' */

halfTree = function (n) {
  let print = "";
  for (i = 0; i < n; i++) {
    print += "#";
    console.log(print);
  }
};

// halfTree(4)

/* 7) REVERSE STRING
 
Given a string, return a new string with the reversed
order of characters
 
--- Examples
 
    reverse('apple') === 'leppa'
    reverse('hello') === 'olleh'
    reverse('Greetings!') === '!sgniteerG'
 */

const reverse = function (string) {
  return string.split("").reverse().join("");
};

/* 8) CHUNK
 
Given an array and chunk size, divide the array into many subarrays
where each subarray is of length size
 
--- Examples
 
    chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
    chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
    chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
    chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
    chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
*/

function chunkify(array, chunk) {
  let result = []

  for (i = 0; i < array.length; i += chunk) {

    result.push(array.slice(i, chunk + i))

  }

  return result
}

// console.log(chunkify([1, 2, 3, 4, 5, 6, 7, 8], 3));

/* 9) PYRAMID
 
Write a function that accepts a positive number N.
The function should console log a pyramid shape
with N levels using the # character.  Make sure the
pyramid has spaces on both the left and right hand sides
 
--- Examples
 
    pyramid(1)
        '#'
    pyramid(2)
        ' # '
        '###'
    pyramid(3)
        '  #  '
        ' ### '
        '#####' */

const pyramid = function (n) {
  for (i = 0; i < n; i++) {
    let stars = "#".repeat(2 * i + 1)
    let spacesBefore = " ".repeat(n - i - 1)
    console.log(spacesBefore + stars)
  }
};

// pyramid(5);

/* 10) SPYRAL MATRIX
 
Write a function that accepts an integer N
and returns a NxN spiral matrix.
 
--- Examples
 
    matrix(2)
        [[1, 2],
        [4, 3]]
    matrix(3)
        [[1, 2, 3],
        [8, 9, 4],
        [7, 6, 5]]
    matrix(4)
        [[1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10,  9,  8, 7]]
 
*/

const spiralMatrix = function (n) {
  let result = [];

  for (i = 0; i < n; i++) {
    result[i] = [];

    for (j = 0; j < n; j++) {
      result[i].push(i);
    }
  }

  return result;
};

// console.log(spiralMatrix(4));




/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var licenseKeyFormatting = function(s, k) {

  let array = s.toUpperCase().split("-").join("").split("")

  let length = array.length

  for (i = length; i > 0; i = i - k) {

    if (i != length) {
      array[i - 1] = array[i - 1] + "-"
    }
  }

  return array.join("")
 
  
};

console.log(licenseKeyFormatting("5F3Z-2e-9-w",
4));