import fs from "fs";

const getSumOfMul = (values) => {
  let sum = 0;
  values.forEach((pair) => (sum += pair[0] * pair[1]));
  return sum;
};

const pattern = /mul\((\d+),(\d+)\)/g;
const instructions = fs.readFileSync("day3/input.txt").toString();
const matches = [...instructions.matchAll(pattern)];

let result = [];

for (const match of matches) {
  result.push([parseInt(match[1]), parseInt(match[2])]);
}

getSumOfMul(result);
