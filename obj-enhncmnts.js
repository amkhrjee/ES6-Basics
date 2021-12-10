var color = "red";
var speed = 10;
var prop = "go";
var car = {
  color,
  speed,
  goES5: function () {
    console.log("vrrooom!");
  },
  goES6() {
    console.log("vrrooom!");
  },
  [prop]: function () {
    console.log("vroommmmmmm!");
  },
};
console.log("👇🏻----------ES5 Way---------👇🏻 ");

car.goES5();
console.log("<-------------------> ");
car.goES5; //return nothing
console.log("<-------------------> ");
console.log(car.goES5()); //returns undefined
console.log("<-------------------> ");
console.log(car.goES5); //returns the name of function but not as a string

console.log("👇🏻----------ES6 Way---------👇🏻 ");

car.goES6();
console.log("<-------------------> ");
car.goES6; //return nothing
console.log("<-------------------> ");
console.log(car.goES6()); //returns undefined
console.log("<-------------------> ");
console.log(car.goES6); //returns the name of the string but not as a string

console.log("👇🏻----------Using JS Computed Property---------👇🏻");
car.go();
console.log(car.go()); //returns undefined
