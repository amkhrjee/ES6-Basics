// let arr = ["Hello", "world"];
// let object = {
//   name: "Joe",
//   city: "Kolkata",
//   getIntro() {
//     console.log(this.name + " from " + this.city);
//   },
// };

// let object2 = {
//   name: "Aniruddh",
// };
// //Now arr can access object method 'getIntro'
// arr.__proto__ = object;

// //Now all objects will be having access to this function
// Object.prototype.randomFunctoion = function () {
//   console.log("hhehehehe");
// };

// Object.prototype = {
//   b: 3,
//   c: 4,
// };

//call, apply, bind
let name = {
  firstName: "Joe",
  lastName: "Smith",
};
let printFullName = function (hometwon) {
  console.log(`${this.firstName} ${this.lastName} from ${hometwon}`);
  return "hello";
};

let name2 = {
  firstName: "Sachin",
  lastName: "Tendulkar",

  //here if we want the printFullName method then we can copy it from name
  //but that's obviously a bad idea
};

//function borrowing
//the argument in the call method is the object we want the function's 'this' to point to

//bind method
//let printMyName = printFullName.bind(name2, "Mumbai");
//This creates a copy of printFullName and binds the arguments to it.
