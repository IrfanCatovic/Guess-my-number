'use strict';

/*
        // ----------  HOISTING -----------------------//

//START CODE
console.log(me);
console.log(job);
console.log(year);

//TDZ - TEMPORAL DEAD ZONE TILL VAR ARE DECLARED

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

//FUNCTIONS
console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

//works bcs it is function declaration and hoisting "pick him up to start"
//so we can use function before declaration
function addDecl(a, b) {
  return a + b;
}

//addexpr and addArrow are now in TDZ bcs they are decleared as const or let or var
const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// EXAMPLE

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}
//It will delete all products, bcs of start product it will triger function before numProducts is declared as 10
//dont use var to declare variables, use const and let
//declare var at start of each scope

var x = 1;
let y = 2;
const z = 3;
*/

//-----------THIS KEYWORD-------------

/*
console.log(this);
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArrow(1991);

const Jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

Jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = Jonas.calcAge; //kopiramo calcAge function
matilda.calcAge();

const f = Jonas.calcAge; // kopiramo funkciju
f();
*/

/*var firstName = 'Matilda';

const Jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    //solution 1
    /*const self = this; //self or that
    const isMillenial = function () {
      console.log(self); //undefind
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial();
    

    //solution 2
    //Radice jer this keyword korist parent this i u ovom slucaju je to jonas
    //ne moramo da pravimo jos jednu var self da bismo mu objasnili
    const isMillenial = () => {
      console.log(this); //undefind
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`hey ${this.firstName}`);
  },
  //it will be undefined bcs arrow function doesn't have his own this keyword
  //it will use parent this keyword and that is window in this case
};
Jonas.greet();
Jonas.calcAge();
*/

//ARGUMENT KEYWORD -------------------------------

/*const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5); //we got array with parameters we passed in
addExpr(2, 5, 7, 12); //we can pass more arguments but we will not see in function

const addArrow = (a, b) => {
  console.log(arguments); //doesn't work in arrow function arguments
  return a + b;
};*/

//PRIMITIVES VS OBJECTS -------------------

/*let age = 30;
let oldAge = age;
age = 31;

console.log(age); //31
console.log(oldAge); //30 it will not effect because we changed later in code

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('Friend', friend);
console.log('Me', me);
//we can't copy object, we just showing adress of old object to new one
//so we bouth use same adress and when we change something on one
//we change on bouth
*/

/*
//Primitive types
let lastName = 'williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage', jessica);
console.log('After marriage', marriedJessica);

// Copying objects

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2); //merge 2 objects and return one new object, one empty and one created
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John'); //we can't copy objects with arrays, it will copy in both objects
console.log('Before marriage', jessica2);
console.log('After marriage', jessicaCopy);
*/

/*
        //------------------------ DATA STRUCTURING -----------------------

//DESTRUCTURING ARRAYS
//we dont need to specify name of properties

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; //razlozio ih - destructuring array into variables
console.log(x, y, z);

let [main, secondary] = restaurant.categories; //first and second element
const [prvi, , treci] = restaurant.categories; //preskacemo drugi

console.log(main, secondary);

//switching var
let temp = main;
main = secondary;
secondary = temp; // MENJAMO PRVI I DRUGI
console.log(main, secondary);

[main, secondary] = [secondary, main]; //umesto code gore da koristimo temp
console.log(main, secondary);

console.log(restaurant.order(2, 0));

//Recive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//NESTED ARRAYS
const nested = [2, 4, [5, 6]];
//const [i, , j] = nested; //nested arrays destruction on var and array
//console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k); //nested arrays destruction on var

// Default values
const [p, q, r] = [8, 9];
console.log(p, q, r);
*/

//DESTRUCTURING OBJECTS
//to destruct objects we use curly brackets
//we have to specify name of properties

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //open 24hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, adress }) {
    console.log(
      `Odred received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivere to ${adress} at ${time} `
    );
  },
};

restaurant.orderDelivery({
  time: '22:30',
  adress: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags); //give new names

//default variables

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

//nested objects
const {
  fri: { open: o, close: c },
} = openingHours;

console.log(o, c);
