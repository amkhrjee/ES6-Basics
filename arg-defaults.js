function greet(greeting = "hello", name = "John") {
  console.log(greeting + ", " + name);
}

greet("Namaste", "Varun");

// for functions -->

// function receive(
//   complete = () => {
//     console.log("Vanakkam!!!");
//   }
// ) {
//   complete();
// }

// receive();

//ugly code -->
let receive = (complete = () => console.log("Hellllooo!!")) => complete();

receive();
