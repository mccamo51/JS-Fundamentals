const { argv } = require("node:process");

let x = 0;

if (argv[2] === undefined) {
  console.log("Missing number of occurrences");
}

if (argv.length == 3) {
  const number = parseInt(argv[2]);

  if (number.toString() === "NaN") {
    console.log("Not a number");
  } else {
    while (x < number) {
      console.log("C is fun");
      x++;
    }
  }
}
