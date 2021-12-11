const emoji = require("./emoji");
const { wait, random } = require("./helper");

async function getEmoji(request) {
  await wait(1000);
  return emoji[request];
}

//Async Generator
async function* asyncGen() {
  yield getEmoji(yield);
}

const generator = asyncGen();
generator.next(); //starts up the genearator
generator.next("laptop").then(({ value }) => {
  console.log(value);
});
