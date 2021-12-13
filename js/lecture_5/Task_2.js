
/**
 * Task 2
 */
const initialStringWord = 'Hello world';
function searchSubstringIndex (initialString, searchingSubstring) {
    var results = [];
    var index = searchingSubstring.indexOf(initialString);
    while (index != -1) {
        results.push(index);
        index = searchingSubstring.indexOf(initialString, index + 1);
    }
        return results;
}
    console.log(searchSubstringIndex (o, initialStringWord));

