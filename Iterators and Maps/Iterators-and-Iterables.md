# Understanding Iterators & Iterables in JavaScript

Talk by **Jenn Creighton**

<hr/>

[![Iterators and Iterables - Jenn Creighton](http://img.youtube.com/vi/uhuGhfjqBk4/0.jpg)](https://youtu.be/uhuGhfjqBk4 "Iterators and Iterables - Jenn Creighton")

> **Note**: The spread operator(...) now works for objects too, but objects are actually not iterables by themselves. The spread operator converts them into iterables and then does the operation,

## `for await...of` Statement

The `for await...of` statement creates a loop iterating over async iterable objects as well as sync iterable objects, including built-in `String`, `Array`, `Array`-like objects, `TypedArray`, `Map` etc and also user-defined async/sync iterables.
This statement can only be used inside an `async` function.

> **Note**: `for await...of` doesn't work for async iterators that are not async iterables.
