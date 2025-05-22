const { argv } = require("node:process");

if (argv[2] === undefined) {
    console.log(`${argv[3]} is ${argv[4]}`);
}

if (argv.length == 3) {
    console.log(`${argv[2]} is ${argv[3]}`);
}

if(argv.length == 4){
    console.log(`${argv[2]} is ${argv[3]}`);
}