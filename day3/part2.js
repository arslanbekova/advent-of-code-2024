import fs from "fs";

const getSumOfMul = (values) => {
  let sum = 0;
  values.forEach((pair) => (sum += pair[0] * pair[1]));
  return sum;
};

const pattern = /mul\((\d+),(\d+)\)/g;
const controlPattern = /do\(\)|don't\(\)/g;
const instructions = fs.readFileSync("day3/input.txt").toString();
let isEnabled = true;

const matches = [...instructions.matchAll(pattern)];
const controlMatches = [...instructions.matchAll(controlPattern)];

let result = [];

for (const match of matches) {
  for (let i = 0; i < controlMatches.length; i++) {
    if (controlMatches[i].index < match.index) {
      if (controlMatches[i][0] === "do()") {
        isEnabled = true;
      } else if (controlMatches[i][0] === "don't()") {
        isEnabled = false;
      }
    } else {
      break;
    }
  }

  if (isEnabled) {
    result.push([parseInt(match[1]), parseInt(match[2])]);
  }
}

getSumOfMul(result);
