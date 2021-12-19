/**
 * Task 1
 */

const findVowelsCount = inputString => [...inputString].filter(c => 'aeiou'.includes(c.toLowerCase())).length;

console.log(findVowelsCount('aaaa'));            

/**
 * Task 3
 */

let arr = [1,2,3,4,5,6,7,8,9,10,11,12],
number = 10;
filterArray =  arr.filter((n) => {return n > number});
console.log(filterArray);


