import fs from "fs";

const wordSearch = fs.readFileSync("day4/input.txt").toString().split("\n");
const targetWord = "MAS";

const countOccurrences = (grid) => {
  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  for (let row = 1; row < rows - 1; row++) {
    for (let col = 1; col < cols - 1; col++) {
      if (grid[row][col] === "A") {
        if (
          ((grid[row - 1][col - 1] === "M" && grid[row + 1][col + 1] === "S") ||
            (grid[row - 1][col - 1] === "S" &&
              grid[row + 1][col + 1] === "M")) &&
          ((grid[row + 1][col - 1] === "M" && grid[row - 1][col + 1] === "S") ||
            (grid[row + 1][col - 1] === "S" && grid[row - 1][col + 1] === "M"))
        ) {
          count++;
        }
      }
    }
  }

  return count;
};

console.log(
  `Total occurrences of '${targetWord}':`,
  countOccurrences(wordSearch)
);
