//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM



document.querySelector('#search').addEventListener('click', getValue)

      
function getValue(){
  let searchValue = document.querySelector('input').value.split(' ').join('')



  
fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`)
.then(res => res.json()) // parse response as JSON
.then(data => {
  console.log(data)

  let drinkIndex = 0
  document.querySelector('img').src = data.drinks[drinkIndex].strDrinkThumb;
  document.querySelector('h2').innerText = data.drinks[drinkIndex].strDrink
  document.querySelector('h3').innerText = data.drinks[drinkIndex].strInstructions

  document.querySelector('#right-button').addEventListener('click', switchValuesMore)
  function switchValuesMore(){

    if(drinkIndex < data.drinks.length-1){
      drinkIndex++
      document.querySelector('img').src = data.drinks[drinkIndex].strDrinkThumb;
      document.querySelector('h2').innerText = data.drinks[drinkIndex].strDrink
      document.querySelector('h3').innerText = data.drinks[drinkIndex].strInstructions
    }
  
  }

  document.querySelector('#left-button').addEventListener('click', switchValuesLess)
  function switchValuesLess(){
    if(drinkIndex > 0){
      drinkIndex--
      document.querySelector('img').src = data.drinks[drinkIndex].strDrinkThumb;
      document.querySelector('h2').innerText = data.drinks[drinkIndex].strDrink
      document.querySelector('h3').innerText = data.drinks[drinkIndex].strInstructions
    }
   
  }
  

})
.catch(err => {
    console.log(`error ${err}`)
});


}





