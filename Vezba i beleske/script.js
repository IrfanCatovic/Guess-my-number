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

//-----------THIS KEYWORD---------------------------------------

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

//------------------------ DATA STRUCTURING -----------------------

//DESTRUCTURING ARRAYS
//we dont need to specify name of properties

/*const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetari an', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: functio n (starterIndex, mainIndex) {
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
// let temp = main;
// main = secondary;
// secondary = temp; // MENJAMO PRVI I DRUGI
// console.log(main, secondary);
console.log(main, secondary);

console.log('switch');
[secondary, main] = [main, secondary];
console.log(main, secondary);
// [main, secondary] = [secondary, main]; //umesto code gore da koristimo temp
// console.log(main, secondary);
//nebitno je koji se gde pise u zagradi kada hocemo da ih zamenimo

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

/*
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
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is you delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orederPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
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

//SPREAD OPERATOR
//EXPAND AN ARRAY INTO ALL ITS ELEMENTS

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]; //bad way to create arr same as last one
console.log(badNewArr);

const newArr = [1, 2, ...arr]; //spread operator  (...nameOfArr);
console.log(newArr);

console.log(...newArr); //log individual elements of array [1,2,7,8,9];

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copy arr
const mainMenuCopy = [...restaurant.mainMenu];

//joing 2 arrays
const menuMerg = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menuMerg);

// iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);

//Real world example
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt("Let's make pasta! Ingredient 2?"),
  // prompt("Let's make pasta! Ingredient 3?"),
]; //create array with prompt window
console.log(ingredients);

restaurant.orderPasta(...ingredients); //instead of doing igredients[0], igredients[1], igredients[2]...

//Object
const newRetaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.Name);
console.log(restaurant.Name);

//REST PATTERN AND PARAMETERS
//OD ELEMENATA PRAVI ARRAY
//spread bcs on RIGHT side of =

// 2) destructuring
const arrRest = [1, 2, ...[3, 4]];

// REST, because of LEFT side of =
const [x, y, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , Risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, Risotto, otherFood);

//objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); //colecting everthing ecxept sat

// 2) FUNCTIONS
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const p = [23, 5, 7];
add(...p); // kupi sve elemente iz x i salje ih u func gde ih i on kupi sa rest

restaurant.orederPizza('mushrooms', 'onion', 'olives', 'spinach'); //odvaja ih jer je prvi parametar ustv parametar, a drugi je ...rest i skuplja ih u array
restaurant.orederPizza('mushrooms'); //we will still have empty array
*/

//OPERATORS && AND ||  ---------------------------------------
//use ANY data type, return ANY data type, do short-circuting

//OR OPERATOR ||
/*
console.log(3 || 'Jonas'); //output 3
//means if the first value is true value, it return it  (for OR operator)

console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null); //output Hello

// restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10; //proveravamo da li postoji rest.numGuests ako postoji to pise, ako ne onda je broj 10

console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

//AND OPERATOR &&
console.log(0 && 'Jonas'); //output 0 bcs AND operator looks for first falsy value

console.log('Hello' && 23 && null & 'jonas'); //output null

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach'); //if restaurant.orederPizza does exists, we call that function


//NULISH VALUE ---------------------------------------

// restaurant.numGuests = 0;

const guest = restaurant.numGuests || 10;
console.log(guest);

//Nullish value: null and undefined (NOT 0 or '');
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);

*/

/*
// LOOP FOR OF -------------------------------------------------------------------

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  //if we want number of element in array
  console.log(`${item[0] + 1}: ${item[1]}`);
}

//SAME THING BUT ARRAY IS DESTRUCTED,   I is number of element in array, el is element of array, we can see that bcs of entries()
for (const [i, el] of menu.entries()) {
  //if we want number of element in array
  console.log(`${item[i] + 1}: ${item[el]}`);
}
*/

// OBJECT LITERALS ----------------

/*const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours, //We can use it bcs we declared openingHours outside the object
  order(starterIndex, mainIndex) {
    //it's function but new way to write it
    return this.starterMenu[starterIndex], this.mainMenu[mainIndex];
  },
};
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[6]]: {
    open: 0, //open 24hours
    close: 24,
  },
};

//OPTIONAL CHAINING -------------------------------------

//when we check for variable if it doesn't exist it will return undefined, and not an error

if (restaurant.openingHours && restaurant.openingHours.mon.open)
  console.log(restaurant.openingHours.mon.open);

//with optional chaining
console.log(restaurant.openingHours.mon?.open); //only if prop before question mark the next propt will be read
console.log(restaurant.openingHours?.mon?.open); //only if prop before question mark the next propt will be read

//EXMAPLLE

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed'; // ?? is nulish operator bcs 0 is value of hours and it's defined
  console.log(`On ${day}, we open at ${open}`);
}

for (const day of Object.keys(openingHours)) {
  console.log(day);
}
*/

//STARI NACIN ZA KLASE

/*
class Human {
  constructor(){
    this.gender = 'male';
  }

  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human { //extends znaci naslediti - inherit - a to znaci preuzeti sve od njega
  constructor(){
    super(); //Moramo da nazovemo super constructor zvog nasledjivanja 
    this.name = 'Max'
  }

  printMyName() {
    console.log(this.name);
  }

}



//CLASSES ARE BLUEPRINT FOR OBJECTS

const person = new Person();
person.printMyName();
person.printGender();
*/

class Human {
  gender = 'male';
}

printGender = () => {
  console.log(this.gender);
};

class Person extends Human {
  //extends znaci naslediti - inherit - a to znaci preuzeti sve od njega
  //Moramo da nazovemo super constructor zvog nasledjivanja
  name = 'Max';

  printMyName = () => {
    console.log(this.name);
  };
}

const numbers = [1, 2, 3];

const doubleNumArray = numbers.map(num => {
  return num * 2; //map znaci da vuce sve clanove ovog niza nesto kao for
});
