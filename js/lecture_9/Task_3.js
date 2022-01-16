let arr = [2,4,6,10,13];

function calcSumOfMinNumbers(array) {
    return array.slice().sort((a,b) => a - b).slice(0,2).reduce((a,b) => a + b);
}
console.log(calcSumOfMinNumbers(arr));