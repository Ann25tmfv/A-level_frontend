/**
Task 3.
 */

/**
 * Example:
 * const initialString = 'Hello world';
 *
 * searchSubstringIndex (initialString, 'world'); // 6;
 * searchSubstringIndex (initialString, 'cat'); // There is not 'cat' in the initial string.;
 */

const searchingSubstring = 'o',
  initialString = 'Hello world';

function searchSubstringAmount(initialString, searchingSubstring) {
  // good job!
  // but it's a bit hard to read such code
  // we ca try to exclude 'searchSubstringAmount' from the for-loop condition to body
  // p.s. change 'var' to 'let'

  //   for (
  //     var searchSubstringAmount = -1, index = 0;
  //     index != -1;
  //     searchSubstringAmount++, index = initialString.indexOf(searchingSubstring, index + 1)
  //   );

  let searchSubstringAmount = -1;

  for (let index = 0; index != -1; index = initialString.indexOf(searchingSubstring, index + 1)) {
    searchSubstringAmount++;
  }

  // also you have to handle empty result

  if (searchSubstringAmount === 0) {
    console.log(`There is not "${searchingSubstring}" in the initial string.`);
  } else {
    console.log(searchSubstringAmount);
  }
}

searchSubstringAmount(initialString, searchingSubstring);
