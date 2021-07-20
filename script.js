const fs = require("fs/promises");

const parseArgs = (argsArray) => argsArray.slice(2);
let commend = parseArgs(process.argv);

if (commend[0] !== "-f") return console.log("Cmd not found");

let input = [];
let precedenceCheck = false;
let result = null;

fs.readFile(commend[1], "utf-8")
  .then((file) => {
    input = file.split(" ");
    console.log(input);
    runTheMath();
  })
  .catch((reason) => console.log("File not found"));

//  ** Using terminal Argv to calculate **
// const parseArgs = (argsArray) => argsArray.slice(2);
// let input = parseArgs(process.argv);
// console.log("input", input);

function runTheMath() {
  for (let i = 0; i < input.length; i += 2) {
    input[i] = Number(input[i]);
    if (!Number(input[i])) return console.log("Please enter numerals number");
  }

  do {
    precedence();
  } while (precedenceCheck === false);

  calculation();
  console.log("Final result", result);
}

// Calculate Function

const METHOD = {
  plus: (num1, num2) => num1 + num2,
  minus: (num1, num2) => num1 - num2,
  times: (num1, num2) => num1 * num2,
  divided: (num1, num2) => num1 / num2,
};
METHOD["+"] = METHOD.plus;
METHOD["-"] = METHOD.minus;
METHOD["*"] = METHOD.times;
METHOD["/"] = METHOD.divided;

function precedence() {
  for (let i = 1; i < input.length - 1; i += 2) {
    if (
      input[i] === "times" ||
      input[i] === "*" ||
      input[i] === "divided" ||
      input[i] === "/"
    ) {
      input[i - 1] = METHOD[input[i]](input[i - 1], input[i + 1]);

      input.splice(i, 2);
      console.log(input);
      break;
    }

    if (i >= input.length - 2) precedenceCheck = true;
  }
}

function calculation() {
  for (let i = 1; i < input.length - 1; i += 2) {
    if (result === null) result = METHOD[input[i]](input[i - 1], input[i + 1]);
    else result = METHOD[input[i]](result, input[i + 1]);
    console.log("Interim", result);
  }
}

// let result = input[0];
// for (let i = 1; i < input.length - 1; i += 2) {
//   result = METHOD[input[i]](result, input[i + 1]);
//   console.log("Interim", result);
// }

// console.log("Final result", result);
