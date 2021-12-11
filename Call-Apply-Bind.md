## Call Method

The `call()` method helps us in _function borrowing_.

### function borrowing

the argument in the call method is the object we want the function's 'this' to point to

```js
let name = {
  firstName: "Joe",
  lastName: "Smith",
};
let printFullName = function (hometwon) {
  console.log(`${this.firstName} ${this.lastName} from ${hometwon}`);
};

let name2 = {
  firstName: "Sachin",
  lastName: "Tendulkar",

  //here if we want the printFullName method then we can copy it from name
  //but that's obviously a bad idea
};
```

Now we can call `printFullName.call(name)` or `printFullName.call(name2)` and can avoid code redundancy!

## Apply Method

When we have multiple arguments for a borrowed function, in the `call()` method, we send them in the usual comma-separated way.

But, with the `apply()` method we can just send them in an array.

```js
let name1 = {
  firstName: "Joe",
  lastName: "Smith",
};
let name2 = {
  firstName: "Jenn",
  lastName: "Washington",
};
let printFullName = function (
  hometwon,
  lattitude,
  longitude,
  birthdate,
  blahblahblah
) {
  console.log(
    `${this.firstName} ${this.lastName} from ${hometwon} which is at ${lattitude} ${longitude} and speaks ${blahblahblah}`
  );
};
```

With the `call()` function we will do this like this 👉🏻

```js
printFullName.call(name1, "Dehradun", 88.5, 56.7, "30th Feb 2001", "Hindi");
```

But with our cool new `apply()` method we will do this 👉🏻

```js
printFullName.apply(name1, ["Dehradun", 88.5, 56.7, "30th Feb 2001", "Hindi"]);
```

## Bind Method

```js
let printMyName = printFullName.bind(name2, "Mumbai");
```

This returns a copy of `printFullName` and binds the arguments to it.
The method can be called(also fancily called _invoked_) later.

```js
printMyName(); //Sachin Tendulkar from Mumbai
```
