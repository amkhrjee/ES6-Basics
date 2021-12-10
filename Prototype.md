# Prototype and Prototypal Inheritance in JavaScript

Whenever you create a JS object the JS engine automatically attaches your object with some hidden props and functions.
The JS attaches a new object to your original object and that is how you get access to all those fancy props that you didn't implement.

This object is the prototype object.

> JavaScript is made of Objects

💡The following has been taken from the MDN docs for reference purposes ⬇️

## Inheritance and the prototype chain

avaScript is a bit confusing for developers experienced in class-based languages (like Java or C++), as it is dynamic and does not provide a `class` implementation per se (the `class` keyword is introduced in ES2015, but is syntactical sugar, JavaScript remains prototype-based).

When it comes to inheritance, JavaScript only has one construct: objects. Each object has a _private property_ which holds a link to another object called its **prototype**. That prototype object has a prototype of its own, and so on until an object is reached with `null` as its prototype. By definition, `null` has no prototype, and acts as the final link in this **prototype chain**.

Nearly all objects in JavaScript are instances of `Object` which sits just below null on the top of a prototype chain.

While this confusion is often considered to be one of JavaScript's weaknesses, the prototypal inheritance model itself is, in fact, more powerful than the classic model. It is, for example, fairly trivial to build a classic model on top of a prototypal model.

## Inheritance with the prototype chain

### Inheriting properties

JavaScript objects are dynamic "bags" of properties (referred to as **own properties**).

JavaScript objects have a link to a prototype object. When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.

> **Note:** Following the ECMAScript standard, the notation `someObject.[[Prototype]]` is used to designate the prototype of `someObject`. Since ECMAScript 2015, the `[[Prototype]]` is accessed using the accessors {{jsxref("Object.getPrototypeOf()")}} and {{jsxref("Object.setPrototypeOf()")}}. This is equivalent to the JavaScript property `__proto__` which is non-standard but de-facto implemented by many browsers.
>
> It should not be confused with the `func.prototype` property of functions, which instead specifies the `[[Prototype]]` to be assigned to all _instances_ of objects created by the given function when used as a constructor. The **`Object.prototype`** property represents the {{jsxref("Object")}} prototype object.

Here is what happens when trying to access a property:

```js
// Let's create an object o from function F with its own properties a and b:
let F = function () {
  this.a = 1;
  this.b = 2;
};
let o = new F(); // {a: 1, b: 2}

// add properties in F function's prototype
F.prototype.b = 3;
F.prototype.c = 4;

// do not set the prototype F.prototype = {b:3,c:4}; this will break the prototype chain
// o.[[Prototype]] has properties b and c.
// o.[[Prototype]].[[Prototype]] is Object.prototype.
// Finally, o.[[Prototype]].[[Prototype]].[[Prototype]] is null.
// This is the end of the prototype chain, as null,
// by definition, has no [[Prototype]].
// Thus, the full prototype chain looks like:
// {a: 1, b: 2} ---> {b: 3, c: 4} ---> Object.prototype ---> null

console.log(o.a); // 1
// Is there an 'a' own property on o? Yes, and its value is 1.

console.log(o.b); // 2
// Is there a 'b' own property on o? Yes, and its value is 2.
// The prototype also has a 'b' property, but it's not visited.
// This is called **Property Shadowing** ⬅️

console.log(o.c); // 4
// Is there a 'c' own property on o? No, check its prototype.
// Is there a 'c' own property on o.[[Prototype]]? Yes, its value is 4.

console.log(o.d); // undefined
// Is there a 'd' own property on o? No, check its prototype.
// Is there a 'd' own property on o.[[Prototype]]? No, check its prototype.
// o.[[Prototype]].[[Prototype]] is Object.prototype and there is no 'd' property by default, check its prototype.
// o.[[Prototype]].[[Prototype]].[[Prototype]] is null, stop searching,
// no property found, return undefined.
```

### Inheriting "methods"

JavaScript does not have "methods" in the form that class-based languages define them. In JavaScript, any function can be added to an object in the form of a property. An inherited function acts just as any other property, including property shadowing as shown above (in this case, a form of _method overriding_).

➡️ When an inherited function is executed, the value of `this` points to the inheriting object, **not** to the prototype object where the function is an own property.

```js
var o = {
  a: 2,
  m: function () {
    return this.a + 1;
  },
};

console.log(o.m()); // 3
// When calling o.m in this case, 'this' refers to o

var p = Object.create(o);
// p is an object that inherits from o

p.a = 4; // creates a property 'a' on p
console.log(p.m()); // 5
// when p.m is called, 'this' refers to p.
// So when p inherits the function m of o,
// 'this.a' means p.a, the property 'a' of p ⬅️
```

## Using prototypes in JavaScript

Let's look at what happens behind the scenes in a bit more detail!🔎

```js
function doSomething() {}
console.log(doSomething.prototype);
//  It does not matter how you declare the function; a
//  function in JavaScript will always have a default
//  prototype property — with one exception: an arrow
//  function doesn't have a default prototype property: ⬅️
const doSomethingFromArrowFunction = () => {};
console.log(doSomethingFromArrowFunction.prototype); //undefined
```

As seen above, `doSomething()` has a default `prototype` property, as demonstrated by the console. After running this code, the console should have displayed an object that looks similar to this.

```js
{
    constructor: ƒ doSomething(),
    __proto__: {
        constructor: ƒ Object(),
        hasOwnProperty: ƒ hasOwnProperty(),
        isPrototypeOf: ƒ isPrototypeOf(),
        propertyIsEnumerable: ƒ propertyIsEnumerable(),
        toLocaleString: ƒ toLocaleString(),
        toString: ƒ toString(),
        valueOf: ƒ valueOf()
    }
}
```

We can add properties to the prototype of `doSomething()`, as shown below.

```js
function doSomething() {}
doSomething.prototype.foo = "bar";
console.log(doSomething.prototype);
```

This results in:

```js
{
    foo: "bar",
    constructor: ƒ doSomething(),
    __proto__: {
        constructor: ƒ Object(),
        hasOwnProperty: ƒ hasOwnProperty(),
        isPrototypeOf: ƒ isPrototypeOf(),
        propertyIsEnumerable: ƒ propertyIsEnumerable(),
        toLocaleString: ƒ toLocaleString(),
        toString: ƒ toString(),
        valueOf: ƒ valueOf()
    }
}
```

We can now use the `new` operator to create an instance of `doSomething()` based on this prototype. To use the new operator, call the function normally except prefix it with `new`. Calling a function with the `new` operator returns an object that is an instance of the function. Properties can then be added onto this object.

Try the following code:

```js
function doSomething() {}
doSomething.prototype.foo = "bar"; // add a property onto the prototype
var doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value"; // add a property onto the object
console.log(doSomeInstancing);
```

This results in an output similar to the following:

```js
{
    prop: "some value",
    __proto__: {
        foo: "bar",
        constructor: ƒ doSomething(),
        __proto__: {
            constructor: ƒ Object(),
            hasOwnProperty: ƒ hasOwnProperty(),
            isPrototypeOf: ƒ isPrototypeOf(),
            propertyIsEnumerable: ƒ propertyIsEnumerable(),
            toLocaleString: ƒ toLocaleString(),
            toString: ƒ toString(),
            valueOf: ƒ valueOf()
        }
    }
}
```

As seen above, the `__proto__` of `doSomeInstancing` is `doSomething.prototype`. But, what does this do? When you access a property of `doSomeInstancing`, the browser first looks to see if `doSomeInstancing` has that property.

If `doSomeInstancing` does not have the property, then the browser looks for the property in the `__proto__` of `doSomeInstancing` (a.k.a. doSomething.prototype). If the `__proto__` of doSomeInstancing has the property being looked for, then that property on the `__proto__` of doSomeInstancing is used.

Otherwise, if the `__proto__` of doSomeInstancing does not have the property, then the `__proto__` of the `__proto__` of doSomeInstancing is checked for the property. By default, the `__proto__` of any function's prototype property is `window.Object.prototype`. So, the `__proto__` of the `__proto__` of doSomeInstancing (a.k.a. the `__proto__` of doSomething.prototype (a.k.a. `Object.prototype`)) is then looked through for the property being searched for.

If the property is not found in the `__proto__` of the `__proto__` of doSomeInstancing, then the `__proto__` of the `__proto__` of the `__proto__` of doSomeInstancing is looked through. However, there is a problem: the `__proto__` of the `__proto__` of the `__proto__` of doSomeInstancing does not exist. Then, and only then, after the entire prototype chain of `__proto__`'s is looked through, and there are no more `__proto__`s does the browser assert that the property does not exist and conclude that the value at the property is `undefined`.
