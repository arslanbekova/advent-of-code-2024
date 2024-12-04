import { inputLeft, inputRight } from "./input.js";

const getSimilarityScore = (sortedListOne, sortedListTwo) => {
  const frequencyMap = {};

  for (const num of sortedListOne) {
    if (!frequencyMap[num]) {
      frequencyMap[num] = 0;
    }
    frequencyMap[num]++;
  }

  let similarityScore = 0;

  for (const num of sortedListTwo) {
    if (frequencyMap[num]) {
      similarityScore += num * frequencyMap[num];
    }
  }

  return similarityScore;
};

const inputLeftSorted = inputLeft.sort((a, b) => a - b);
const inputRightSorted = inputRight.sort((a, b) => a - b);

getSimilarityScore(inputLeftSorted, inputRightSorted);
