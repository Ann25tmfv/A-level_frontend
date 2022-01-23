const citiesAndCountries = {
    Kiev: 'Ukraine',
    Washington: 'USA',
    Odessa: 'Ukraine',
    Munich: 'Germany',
    Kharkiv: 'Ukraine',
    'New York': 'USA',
    Amsterdam: 'Netherlands',
    Berlin: 'Germany',
    Chicago: 'USA',
    Lisbon: 'Portugal',
    Lviv: 'Ukraine',
    Hamburg: 'Germany'
};

// const output = citiesAndCountries.reduce((result, item) => { // you can't use reduce method with object

//     const i = result.findIndex(resultItem => resultItem.date === item.date)
//     if(i === -1) {
//     result.push(item)
//     }
//     else {
//     result[i] = { ...result[i], ...item }
//     }
    
//     return result
// }, []);

const output = {};

for (const key in citiesAndCountries) {
    // check if property is in the object
    if (!output[citiesAndCountries[key]]) { // if not
        // set a new array with initial value
        output[citiesAndCountries[key]] = [key];
    } else {
        // add new value to existing property
        output[citiesAndCountries[key]].push(key);
    }
}

console.log(output);