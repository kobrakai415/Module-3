/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/

const twoSum = function (integer1, integer2) {
  // if (integer1 !== integer2) {
  //     return integer1 + integer2
  // } else {
  //     return (integer1 + integer2) * 3
  // }

  return integer1 !== integer2
    ? integer1 + integer2
    : (integer1 + integer2) * 3;
};
// console.log(twoSum(4, 4));

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

const check50 = function (num1, num2) {
  return num1 || num2 === 50 || num1 + num2 === 50 ? true : false;
};

// console.log(check50(40, 5));

/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/

const removeChar = function (str, position) {
  return str.slice(0, position) + str.slice(position + 1);

  // + str.slice(position)
};

// console.log(removeChar("hello", 2));
/*

4)
 Create a function to find the largest of three given integers.
*/

const largest = function (number1, number2, number3) {
  return Math.max(number1, number2, number3);
};

// console.log(largest(1, 6, 2));

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/

const checkRange = function (number1, number2) {

    if (number1 >= 40 && number1 <= 60 && number2 >= 40 && number2 <= 60) {
        console.log("Numbers are in range 40 - 60");
    }
    else if (number1 >= 70 && number1 <= 100 && number2 >= 70 && number2 <= 100) {
        console.log("Numbers are in range 70 - 100");
    }
    else {
        console.log("Numbers not in either range");
    }

}
// checkRange(60, 75)

/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/

const newString = function (str, copies) {
  for (i = 0; i < Math.abs(copies); i++) {
    console.log(str);
  }
};

// console.log(newString("hello", 5));

/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/

const cityName = function (city) {
  if (
    city.toLowerCase().startsWith("los") ||
    city.toLowerCase().startsWith("wew")
  ) {
    return city;
  }
};

// console.log(cityName("london"));

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/

const sumOf3 = function (array) {
  return array[0] + array[1] + array[2];
};

// console.log(sumOf3([356, 345, 634]));

/*
9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/

const containsOneOrThree = function (array) {
  for (i = 0; i < array.length; i++) {
    return array[i] === 1 || 3 ? true : false;
  }
};

// console.log(containsOneOrThree([2, 3]))

/*
10)
Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
*/

const doesNotContainOneOrThree = function (array) {
  for (i = 0; i < array.length; i++) {
    return array[i] !== 1 || 3 ? true : false;
  }
};

// console.log(doesNotContainOneOrThree([2, 5]))

// 11)

// Create a function to find the longest string from a given array of strings.

const longest = function (array) {
  let length = 0;
  let longest = "";

  for (i = 0; i < array.length; i++) {
    if (array[i].length > length) {
      length = array[i].length;
      longest = array[i];
    }
  }
  return longest;
};

// console.log(longest(["One", "Four", "Eight"]));

// 12)

// Create a function to find the types of a given angle.

// Types of angles:
//     Acute angle: An angle between 0 and 90 degrees.
//     Right angle: An 90 degree angle.
//     btuse angle: An angle between 90 and 180 degrees.
//     Straight angle: A 180 degree angle.

const angleType = function (angle) {
  let result = "";

  if (angle >= 0 && angle < 90) {
    result = "Acute Angle";
  } else if (angle === 90) {
    result = "Right Angle";
  } else if (angle > 90 && angle < 180) {
    result = "Obtuse Angle";
  } else if (angle === 180) {
    result = "Straight Angle";
  }

  return result;
};

// console.log(angleType(95));
// 13)

// Create a function to find the index of the greatest element of a given array of integers

const greatest = function (array) {
  return array.indexOf(Math.max(...array));
};

// console.log(greatest([3, 5, 6, 21, 7, 12]));
// 14)

// Create a function to get the largest even number from an array of integers.

const greatestEven = function (array) {
  for (i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0 && array[i] === Math.max(...array)) return array[i];
  }
};
// console.log(greatestEven([1, 2, 20, 4, 5, 6, 50]));

//  15)

//  Create a function to check from two given integers, whether one is positive and another one is negative.

const checkIntegers = function (int1, int2) {
    console.log((Math.sign(int1) === 1 ? "int1 is a positive number" : "int1 is not a positive number")) 
    console.log((Math.sign(int2) === -1 ? "int2 is a negative number" : "int2 is not a negative number"))
}

// checkIntegers(-55, -6)

// 16)

// Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case.

const lowerString = function (str) {
  if (str.length > 3) {
    lower = str.slice(0, 3).toLowerCase();
    upper = str.slice(3).toUpperCase();
    console.log(lower + upper);
  } else {
    console.log(str.toUpperCase());
  }
};

// console.log(lowerString("Kaiwan"));
// 17)

// Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

const ifBetween = function (num1, num2) {
  let sum = num1 + num2;

  return sum >= 50 && sum <= 80 ? 65 : 80;
};

// console.log(ifBetween(50, 20));

// 18)

// Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

// If the number has 3 as a factor, output 'Diego'.
// If the number has 5 as a factor, output 'Riccardo'.
// If the number has 7 as a factor, output 'Stefano'.
// If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
// Examples
// 28's factors are 1, 2, 4, 7, 14, 28.
// this would be a simple "Stefano".
// 30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
// this would be a "DiegoRiccardo".
// 34 has four factors: 1, 2, 17, and 34.
// this would be "34".

const convertToString = function (number) {
    if (number % 3 === 0) {
        console.log("Diego");
    } else if (number % 5 === 0) {
        console.log("Riccardo");
    } else if (number % 7 === 0) {
        console.log("Stefano");
    } else if (number % 3 === 0 && number % 5 ===0) {
        console.log("DiegoRiccardo");
    } else if (number % 5 === 0 && number % 7 ===0) {
        console.log("RiccardoStefano");
    } else if (number % 3 && number % 5 === 0 && number % 7 ===0) {
        console.log("RiccardoStefano");
    } else {
        console.log(number);
    }
}

// convertToString(30)

// 19)
// Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

const acronym = function (phrase) {
    let array = phrase.split(" ")
    let newArray = []
    
    for (i = 0; i < array.length; i++) {
       newArray.push(array[i].slice(0, 1))
    }
   return newArray.join("")
}

// console.log(acronym("British Broadcasting Corporation"));