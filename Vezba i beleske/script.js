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
