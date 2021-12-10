var d = new Promise((reso, reject) => {
  setTimeout(() => {
    if (false) {
      reso("hello wolrd");
    } else {
      reject("nope");
    }
  }, 2000);
});

d.then(
  (data) => console.log("success: ", data),
  (error) => console.log("new error: ", error)
);

//d.catch((error) => console.log("error: ", error));
