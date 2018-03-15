
// FIXME: With a rang of 7-20, I got 1 as the result (COULD BE TYPE PROBLEM - STR)
export const generateNumber = (upperBound=10, lowerBound=0) => {
  return Math.floor(Math.random() * (upperBound - lowerBound) + (lowerBound + 1));
}
