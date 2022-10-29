//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
//Create a pizza object that has 4 properties and 3 methods

let pizza = {};


pizza.nameOf = 'peperoni pizza';
pizza.size =  'large';
pizza['spice level'] = 10;
pizza.isVegeterian = true,
pizza.toppings = ['onions', 'paproni', 'pepepr']


pizza.describePizza =function() {
    console.log(`this is the ${this.nameOf}, ${this.size}, spice level is ${this.spicelevel}`)

}



pizza.cook = function() {
    alert(`cooking`)
}

console.log(pizza)

//create constructor 4 prop and 3 meth

function Pizza (nameOf, size, toppings, isVegeterian){
    this.name = nameOf,

    this.size = size,
    this.toppings = toppings,
    this.isVegeterian = true,
    this.describePizza = function(){
        alert('yay');
    }
}

class MakePizza{

    constructor(nameOf, size, toppings, isVegeterian){
    this.name = nameOf
    this.size = size
    this.toppings = toppings
    this.isVegeterian = true
    }
 
    describePizza() {
        alert('yay')
    }
}

