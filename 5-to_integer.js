const { argv } = require("node:process");

if (argv[2] === undefined) {
  console.log("Not a number");
}

if (argv.length == 3) {
  const number = parseInt(argv[2]);

  if (number.toString() === "NaN") {
    console.log("Not a number");
  } else {
    console.log(`My number: ${number}`);
  }
}
