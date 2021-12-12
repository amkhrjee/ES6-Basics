let first = [1, 2, 3];
let second = [4, 5, 6];

first.push(...second);
//without the spead operator the whole array would have eneterd as an element in first
first.push(second);

console.log(first);
