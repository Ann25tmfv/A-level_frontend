/**
 * Task2.
 */

function greeting(name) {
    console.log(`Hello, ${name}! How are you?`);
    }
greeting("Anna");


/**
 * Task 3.
 */

//method 1
const lecture = {
    stringType: 'double quotes, single quotes, backtick',
    numberType: 'Number.isSafeInteger()',
    bigIntType: 'write number and n (10998n)',
    booleanType:'alert(console) show true or false',
    nullType: 'const age = "null"'
};
const keys = Object.keys(lecture);
console.log(keys);

//method 2
const lecture = {
    undefinedType: "show undefined",
    objectType: "Objects can be seen as a collection of properties and methods",
    symbolType: "Symbol is unique and immutable primitive value and may be used as the key of an object property"
};
const entries = Object.entries(lecture);
console.log(entries);

//method 3
const operator = {
    typeof: 'typeof x or typeof(x)'
}
const types ={
    string: 'foo',
    number: 25,
    boolean: 'true',
    undefined:'undefined',
    bigInt: '10n',
    symbol: 'symbol("id")',
    object: 'null',
    function: 'alert' 
};

const character = Object.assign(operator, types);
console.log(character);




