var fs = [];

for (let i = 0; i < 10; i++) {
  fs.push(function () {
    console.log(i);
  });
}

// i -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 9 -> 10
// and we finally get the value of i as 10 and as 'var' does not respect
//block-scoping, that value of i carries over to the next block where it prints the value of i

/* this behaviour changes with 'let' as it respects block-scoping */

fs.forEach(function (f) {
  f();
});
