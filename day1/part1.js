import { inputLeft, inputRight } from "./input.js";

const getTotalDistance = (sortedListOne, sortedListTwo) => {
  let distance = 0;

  for (let i = 0; i < sortedListOne.length; i++) {
    distance += Math.abs(sortedListOne[i] - sortedListTwo[i]);
  }

  return distance;
};

const inputLeftSorted = inputLeft.sort((a, b) => a - b);
const inputRightSorted = inputRight.sort((a, b) => a - b);

getTotalDistance(inputLeftSorted, inputRightSorted);
