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

const output = citiesAndCountries.reduce((result, item) => {

    const i = result.findIndex(resultItem => resultItem.date === item.date)
    if(i === -1) {
    result.push(item)
    }
    else {
    result[i] = { ...result[i], ...item }
    }
    
    return result
}, [])

console.log(output);