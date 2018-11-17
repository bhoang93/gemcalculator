import React from "react";
import ReactDOM from "react-dom";
import storyGemsArray from "./StorySelector";

const storyGemsSum = begin => {
  const end = storyGemsArray.length - 1;
  const gemSplit = storyGemsArray.slice(begin, end);
  const gemSum = gemSplit.reduce((total, num) => total + num, 0);
  return gemSum;
};

it("calculates the right amount of gems", () => {
  expect(storyGemsSum(37)).toBe(9);
});

it("calculates the right amount of gems", () => {
  expect(storyGemsSum(36)).toBe(18);
});

it("calculates the right amount of gems", () => {
  expect(storyGemsSum(0)).toBe(310);
});
