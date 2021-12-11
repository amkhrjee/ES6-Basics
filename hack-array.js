function iterator() {
  let step = 0;
  return {
    next: () => {
      step++;
      if (step === 1) {
        return {
          value: "😠",
          done: false,
        };
      }
      if (step === 2) {
        return {
          value: "😡",
          done: false,
        };
      }
      if (step === 3) {
        return {
          value: "🤬",
          done: false,
        };
      }

      return {
        value: undefined,
        done: true,
      };
    },
  };
}

//We are hacking the array lmao

Array.prototype[Symbol.iterator] = iterator;

arr = [1, 2, 3];

// console.log(...arr);
// console.log([4, 5, 6]);

//try any array and you will see the same result !!!

const [first] = arr;
console.log(first);
