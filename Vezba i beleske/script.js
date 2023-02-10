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

const Jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
  greet: () => console.log(`hey ${this.firstName}`),
};
Jonas.greet();
