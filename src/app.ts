/*const pizzas = [{name: 'pepperoni', toppings: ['pepperoni']}];

const mappedPizzas = pizzas.map(pizza => pizza.name.toUpperCase());

console.log(mappedPizzas);

const pizza = {
    name: 'Blazing Inferno',
    getName: () => pizza.name,
};

console.log(pizza.getName());

function multiply(a: number, b = 25){
    return a * b;
}
console.log(multiply(5, 35)); */

const pizza = {
    name: 'Pepperoni',
    price: 15,
    getName: function(){
        return this.name;
    },
};

console.log(pizza.getName());

const toppings = ['pepperoni'];

function createOrder(pizza, toppings){
    return {pizza, toppings};
}

console.log(createOrder(pizza, toppings));
