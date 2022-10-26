//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

let array = [5,7,6,4,2,10,15]
let arraySquared = array.map(item => item * item)

console.log(arraySquared)

//Create a function that takes string
//Print the reverse of that string to the console
let str = 'I love my journey so far'
let strRev = str.split('').reverse().join('')
console.log(strRev)
console.log(strRev.length)
console.log(str.length)



//Create a function that takes in a string
//Alert if the string is a palindrome or not
