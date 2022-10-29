//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM


//javascript info - Objects


function spinWords(string){
    //TODO Have fun :)
    
    splitString = string.split(' ').map(item => item.length < 5 ? item : item.split('').reverse().join('')).join(' ');

       console.log(splitString)
   
  }

  spinWords('i love grilling some chicken')
