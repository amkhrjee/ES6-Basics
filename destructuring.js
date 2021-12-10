var object = {
  color: "blue",
  city: "New Delhi",
  position: "forward",
  state: "India",
};

var { state: country, city: capital } = object;

console.log(country, capital);

var people = [
  {
    firstName: "Varun",
    city: "Kolkata",
    email: "varun@web.com",
  },
  {
    firstName: "Neo",
    city: "New Jersey",
    email: "neo@web.com",
  },
];

var [, second] = people;

console.log(second.email);
