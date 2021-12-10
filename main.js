let arr = ["Hello", "world"];
let object = {
  name: "Joe",
  city: "Kolkata",
  getIntro() {
    console.log(this.name + " from " + this.city);
  },
};

let object2 = {
  name: "Aniruddh",
};
//Now arr can access object method 'getIntro'
arr.__proto__ = object;

//Now all objects will be having access to this function
Object.prototype.randomFunctoion = function () {
  console.log("hhehehehe");
};

Object.prototype = {
  b: 3,
  c: 4,
};
