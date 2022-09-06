// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

//PSEUDO CODE:
    // describe a function named vowelsToNumbers
    // function description: it takes in a string and returns a coded message, each vowel in the original string is changed into a number in the coded message
    // write expect statements based on the given arguments

describe("vowelsToNumbers", () => {
    it("takes in a string and returns a coded message, each vowel in the original string is changed into a number in the coded message", () => {
        const secretCodeWord1 = "Lackadaisical"
        // Expected output: "L4ck4d41s1c4l"
        const secretCodeWord2 = "Gobbledygook"
        // Expected output: "G0bbl3dyg00k"
        const secretCodeWord3 = "Eccentric"
        // Expected output: "3cc3ntr1c"

        expect(vowelsToNumbers(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(vowelsToNumbers(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(vowelsToNumbers(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

// FAIL  ./code-challenges.test.js
// vowelsToNumbers
//   ✕ takes in a string and returns a coded message, each vowel in the original string is changed into a number in the coded message

// ● vowelsToNumbers › takes in a string and returns a coded message, each vowel in the original string is changed into a number in the coded message

//   ReferenceError: vowelsToNumbers is not defined


// b) Create the function that makes the test pass.

/* PSEUDO CODE:
        declare a function named vowelsToNumbers
        takes in an argument of a string
        iterate through the string
            create a series of conditional statements checking if the character in a string is a vowel
            change each vowel to its corresponding number
        returns a string of a coded message where it converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0
*/

const vowelsToNumbers = (word) => {
    let wordArr = word.split("")
    for (let i=0; i < wordArr.length; i++){
        if (wordArr[i].toLowerCase() === "a") {
            wordArr[i] = "4"
        } else if (wordArr[i].toLowerCase() === "e") {
            wordArr[i] = "3"
        } else if (wordArr[i].toLowerCase() === "i") {
            wordArr[i] = "1"
        } else if (wordArr[i].toLowerCase() === "o") {
            wordArr[i] = "0"
        }
    }
    return wordArr.join("")
}

// PASS  ./code-challenges.test.js
// vowelsToNumbers
//   ✓ takes in a string and returns a coded message, each vowel in the original string is changed into a number in the coded message (2 ms)


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

//PSEUDO CODE:
    // describe a function named letterFilter
    // function description: it takes in an array of words and a single letter and returns an array of all the words containing that particular letter
    // write expect statements based on the given arguments

describe("letterFilter", () => {
    it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter", () => {
        const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

        const letterA = "a"
        // Expected output: ["Mango", "Apricot", "Peach"]
        const letterE = "e"
        // Expected output: ["Cherry", "Blueberry", "Peach"]

        expect(letterFilter(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect(letterFilter(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

// FAIL  ./code-challenges.test.js
// vowelsToNumbers
//   ✓ takes in a string and returns a coded message, each vowel in the original string is changed into a number in the coded message (2 ms)
// letterFilter
//   ✕ takes in an array of words and a single letter and returns an array of all the words containing that particular letter (1 ms)

// ● letterFilter › takes in an array of words and a single letter and returns an array of all the words containing that particular letter

//   ReferenceError: letterFilter is not defined


// b) Create the function that makes the test pass.

/* PSEUDO CODE:
        declare a function named letterFilter
        takes in two arguments: one is an array of words and two is a string of one letter
            iterate through the array using a higher order function
            using a condition, check if each string from the array contains a letter or not
        return a shorter array of all the words that contain the specified letter
*/

const letterFilter = (array, letter) => {
    let filteredArr = array.filter(word => word.includes(letter) || word.includes(letter.toUpperCase()))
    return filteredArr
}

// PASS  ./code-challenges.test.js
// vowelsToNumbers
//   ✓ takes in a string and returns a coded message, each vowel in the original string is changed into a number in the coded message (2 ms)
// letterFilter
//   ✓ takes in an array of words and a single letter and returns an array of all the words containing that particular letter (1 ms)



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

//PSEUDO CODE:
    // describe a function named fullHouseChecker
    // function description: it takes in an array of 5 numbers and determines whether or not the array is a “full house”
    // write expect statements based on the given arguments

describe("fullHouseChecker", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a 'full house'", () => {
        const hand1 = [5, 5, 5, 3, 3]
        // Expected output: true
        const hand2 = [5, 5, 3, 3, 4]
        // Expected output: false
        const hand3 = [5, 5, 5, 5, 4]
        // Expected output: false
        const hand4 = [7, 2, 7, 2, 7]
        // Expected output: true

        expect(fullHouseChecker(hand1)).toEqual(true)
        expect(fullHouseChecker(hand2)).toEqual(false)
        expect(fullHouseChecker(hand3)).toEqual(false)
        expect(fullHouseChecker(hand4)).toEqual(true)
    })
})

// FAIL  ./code-challenges.test.js
// vowelsToNumbers
//   ✓ takes in a string and returns a coded message, each vowel in the original string is changed into a number in the coded message (2 ms)
// letterFilter
//   ✓ takes in an array of words and a single letter and returns an array of all the words containing that particular letter (1 ms)
// fullHouseChecker
//   ✕ takes in an array of 5 numbers and determines whether or not the array is a “full house” (1 ms)

// ● fullHouseChecker › takes in an array of 5 numbers and determines whether or not the array is a “full house”

//   ReferenceError: fullHouseChecker is not defined


// b) Create the function that makes the test pass.

/* PSEUDO CODE:
        declare a function named fullHouseChecker
        takes in an array argument of 5 numbers
        have an array with the removed duplicates of the numbers in argument array
        create conditional statement for the removed duplicates array
        1st condition: length equals 2
            filter the argument array and make a new array for each number
            create a nested conditional statement
            1st condition: lengths of arrays are 3 and 2
            return true
            2nd condition: lengths are not 3 and 2
            return false
        2ndt condition: length of removed duplicates array does not equal 2
            return false because full house should only have 2 different numbers
        returns a Boolean statement determining if the array contains a full house
*/

const fullHouseChecker = (numberArr) => {
    let noDuplicates = [... new Set(numberArr)]
    if (noDuplicates.length === 2) {
        let firstNum = numberArr.filter(number => number === noDuplicates[0])
        let secondNum = numberArr.filter(number => number === noDuplicates[1])
        if ((firstNum.length === 3 && secondNum.length === 2) || (firstNum.length === 2 && secondNum.length === 3)) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

// PASS  ./code-challenges.test.js
// vowelsToNumbers
//   ✓ takes in a string and returns a coded message, each vowel in the original string is changed into a number in the coded message (2 ms)
// letterFilter
//   ✓ takes in an array of words and a single letter and returns an array of all the words containing that particular letter
// fullHouseChecker
//   ✓ takes in an array of 5 numbers and determines whether or not the array is a 'full house'
