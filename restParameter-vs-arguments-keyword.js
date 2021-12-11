//using arguments keyword
//the arguments keyword returns an array-like object of all the arguments we are passing to the function.
// function fun() {
//   console.log(arguments);
//   console.log(arguments.length); //7
//   console.log(...arguments); //hello there foo bar 4 5 6
//   console.log(arguments.callee);
// }
// fun("hello", "there", "foo", "bar", 4, 5, 6);

//ES5 Hack to come over the limitations

//btw this is a constructor ⬇️
function Store() {
  var aisle = {
    fruit: [],
    vegetable: [],
  };
  return {
    add: function (category) {
      var items = [].slice.call(arguments, 1);
      console.log(items);
    },
    aisle: aisle,
  };
}

var myGroceryStore = new Store();

myGroceryStore.add("fruit", "apples", "oranges");
