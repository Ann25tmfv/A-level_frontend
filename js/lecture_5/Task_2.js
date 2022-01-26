/**
 * Task 2
 */
// const initialStringWord = 'Hello world';
function searchSubstringIndex(initialString, searchingSubstring) {
  //   var results = []; // 1. try don't to use 'var' keyword; 2.you don't need that array at all
  //   var index = searchingSubstring.indexOf(initialString);
  //   while (index != -1) { // better to use if-else condition
  //     results.push(index);
  //     index = searchingSubstring.indexOf(initialString, index + 1);
  //   }
  //   return results;

  const index = initialString.indexOf(searchingSubstring);

  if (index === -1) {
    console.log(`There is not "${searchingSubstring}" in the initial string.`);
  } else {
    console.log(index);
  }
}
// console.log(searchSubstringIndex (o, initialStringWord));

const initialString = 'Hello world';

searchSubstringIndex(initialString, 'world'); // 6;
searchSubstringIndex(initialString, 'cat'); // There is not 'cat' in the initial string.;
