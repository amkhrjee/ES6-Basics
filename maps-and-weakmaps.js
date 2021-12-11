var myMap = new Map();

//set() method
myMap.set("foo", "bar");
myMap.set("hello", "world");

//other methods
console.log(myMap.get("foo"));
console.log(myMap.size);
console.log(myMap.has("foo"));
console.log(...myMap);

//weakmaps are literally maps without reference to keys
//so it also doesn't have a ton of features that an ordinary map has
