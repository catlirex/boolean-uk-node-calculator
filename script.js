const parseArgs = (argsArray) => argsArray.slice(2);

const input = parseArgs(process.argv);
console.log(input);

if (!Number(input[0]) || !Number(input[2]))
  return console.log("Please enter numerals number");

if (input[1] === "plus") console.log(Number(input[0]) + Number(input[2]));
else if (input[1] === "minus") console.log(Number(input[0]) - Number(input[2]));
else if (input[1] === "times") console.log(Number(input[0]) * Number(input[2]));
else if (input[1] === "divided")
  console.log(Number(input[0]) / Number(input[2]));
else console.log("Commend incorrect");
