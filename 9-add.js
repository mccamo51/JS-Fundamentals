const { argv } = require("node:process");

if (argv.length > 3) {
  const number = parseInt(argv[2]);
  const number2 = parseInt(argv[3]);

  if (isNaN(number) && isNaN(number2)) {
    console.log("Not a number");
  } else {
    console.log(`${add(number, number2)}`);
    
  }
} else {
  console.log("NaN");
}


function add(a, b) {
    return a+b
}