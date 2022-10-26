// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console

let favDrink = '      pineapple and papaya smoothies'

console.log(favDrink.trim())

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

let wordString = 'mango apple pineapple sweet walk run apple mango car stop window car man every'
let searchWord = prompt('enter a word to search for in the string')

console.log(wordString.search(searchWord))

if(wordString.search(searchWord) === -1){
    console.log(`there is no ${searchWord}`)
}else{
    console.log(`we have ${searchWord}`)
}

let sumOfItems = wordString.split(' ').reduce( function (object,item)  {
      if(!object[item]){
        object[item] = 0
    }
    object[item]++
    return object
}, {}
  
)

console.log(sumOfItems)


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors() {
    randomNumber = Math.random();

    if(randomNumber < 0.33){
        console.log('rock')
    }else if(randomNumber < 0.66 ){
        console.log('paper')
    }else{
        console.log('scissors')
    }
}
rockPaperScissors()


// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
