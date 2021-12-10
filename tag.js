const tag = (strings, ...values) => {
  console.log(strings); //array without the $-sign part
  console.log(values); //array inside the $-sign part

  if (values[0] > 20) {
    values[1] = "hungry";
  } else {
    values[1] = "sleepy";
  }

  return `${strings[0]}${values[0]}${strings[1]}${values[1]}`;
};

var message = tag`It's ${new Date().getHours()}, I'm ${""}`;

console.log(message);
