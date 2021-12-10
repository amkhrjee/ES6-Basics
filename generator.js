//yield is a special kind of return statement that is only helpful inside a generator.

/*Here is the MDN Def: The yield keyword pauses generator function 
execution and the value of the expression following the yield keyword is 
returned to the generator's caller. It can be thought of as a generator-based version of the return keyword.*/

function* simpleGenerator() {
  console.log("Before 1");
  yield 1;
  console.log("After 1");
  console.log("Before 2");

  yield 2;
  console.log("After 2");
  console.log("Before 3");

  yield 3;
  console.log("After 3");
}

const generatorObject = simpleGenerator();
console.log(generatorObject);

console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());

//You can do infinite loops inside generators without crashing the system as generators are executed one step at a time.

function* generateId() {
  let id = 1;
  while (true) {
    const increment = yield id;
    if (increment != null) {
      id += increment;
    } else {
      id++;
    }
  }
}
const genObj = generateId();

console.log(genObj.next());

//We can use generators as iterators -->
while (generatorObject.next().done != false) {
  //do something here
}

//example iterator for an array -->

const array = [1, 2, 3, 4, 5];
function* generator(array) {
  for (let i = 0; i < array.length; i++) {
    yield array[i];
  }
}

const arrayObjGen = generator(array);

console.log(arrayObjGen.next());
console.log(arrayObjGen.next());
console.log(arrayObjGen.next());
