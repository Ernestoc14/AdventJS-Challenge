// In the toy factory of the North Pole, each toy has a unique identification number.

// However, due to an error in the toy machine, some numbers have been
// assigned to more than one toy.

// Find the first identification number that has been repeated, where
// the second occurrence has the smallest index!

// In other words, if there is more than one repeated number,
// you must return the number whose second occurrence appears first in the list.
// If there are no repeated numbers, return -1.

function findFirstRepeated(gifts) {
  let test = [],
    lowest = undefined;

  for (let i = 0; i < gifts.length; i++) {
    if (test.indexOf(gifts[i]) > -1) {
      lowest = lowest || i;
      console.log(i, lowest)
      if (i < lowest) {
        lowest = i;
        console.log(i, lowest)
      }
    } else {
      test.push(gifts[i]);
      console.log(i)
    }
  }

  return lowest ? gifts[lowest] : -1;
}

gifts = [2, 1, 3, 5, 3, 2];
// console.log(findFirstRepeated(gifts));
