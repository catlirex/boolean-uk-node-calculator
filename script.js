const parseArgs = (argsArray) => argsArray.slice(2);

let input = parseArgs(process.argv);

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

for (let i = 0; i < input.length; i += 2) {
  input[i] = Number(input[i]);
  if (!Number(input[i])) return console.log("Please enter numerals number");
}

console.log("input", input);
let result = input[0];
for (let i = 1; i < input.length - 1; i += 2) {
  result = METHOD[input[i]](result, input[i + 1]);
  console.log("Interim", result);
}

console.log("Final result", result);
