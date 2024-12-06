import fs from "fs";

const wordSearch = fs.readFileSync("day4/input.txt").toString().split("\n");
const targetWord = "XMAS";
const directions = [
  [0, 1], // Right
  [1, 0], // Down
  [0, -1], // Left
  [-1, 0], // Up
  [1, 1], // Down-Right (Diagonal)
  [1, -1], // Down-Left (Diagonal)
  [-1, 1], // Up-Right (Diagonal)
  [-1, -1], // Up-Left (Diagonal)
];

const countOccurrences = (grid, word) => {
  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  const isValid = (x, y) => {
    return x >= 0 && y >= 0 && x < rows && y < cols;
  };

  const searchWord = (x, y, direction) => {
    let dx = direction[0];
    let dy = direction[1];

    for (let i = 0; i < word.length; i++) {
      let newX = x + i * dx;
      let newY = y + i * dy;
      if (!isValid(newX, newY) || grid[newX][newY] !== word[i]) {
        return false;
      }
    }
    return true;
  };

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === word[0]) {
        for (let direction of directions) {
          if (searchWord(row, col, direction)) {
            count++;
          }
        }
      }
    }
  }

  return count;
};

console.log(
  `Total occurrences of '${targetWord}':`,
  countOccurrences(wordSearch, targetWord)
);
