/*
For an iterator to work, it needs to follow the 'iterator protocol', which is btw different from the 'iterable protocol'
(which defines the conditions for a datastructure being iterable or not). 

Here are the steps for making our own iterator, according to the iterator protocol: 

    function fakeIterator() {
        return{
            next: function() {
                return object with 
                a value & a done key
            }
        }
    }

Yes, it's similar to a generator and that's why generators are iterables. 

Now, to call that fake iterator: 

    const iterator = fakeIterator(); 


*/

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

const fakeIterator = iterator();

// console.log(fakeIterator.next());
// console.log(fakeIterator.next());
// console.log(fakeIterator.next());
// console.log(fakeIterator.next());

//but this is not an iterable yet as cannot use the spread operator yet
// we cannot use console.log(...fakeIterator) here

const irritable = {};
//we make it an iterator!!!
irritable[Symbol.iterator] = iterator;
console.log(...irritable);
