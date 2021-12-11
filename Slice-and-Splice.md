> Whenever you are passing a range, the first value (= the starting point) is always **_inclusive_**.
> And the second value(= the end point) is always **_exclusive_**.

## `Array.prototype.slice()`

The `slice()` method is like slicing a birthday cake! 🔪🎂

```js
let users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];
```

Now,

```js
user.slice(1, 3); // "Tim", "Ton"
//remember we don't include the 3!
//so we print: 0 [1 2] 3 4 5 6
```

## `Array.prototype.splice()`

The `splice()` method helps in removing and/or adding stuff to an array.

```js
let users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];

users.splice(1, 4, "Hi", "Bye");
console.log(users);
```

- Here the **first argument** `1` = determines where to stop -> so it counts 0 and 1, then stops at 1
- The **second argument** `4` = determines how many to remove from the index `1` and onwards -> so here it counts `"Tim", "Ton", "Sam", "Sor"` and then stops - as it has reached its count of 4 items.
- The **third argument and fourth and so on** `"Hi", "Bye"` = adds these values to the array in place of the deleted items.
