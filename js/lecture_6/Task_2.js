/**
 * Task 2
 */


function joinObjects(obj1, obj2) {
    const result = {};
    let key;
    
    for (key in obj1) {
        if(obj1.hasOwnProperty(key)){
            result[key] = obj1[key];
        }
    }
    
    for (key in obj2) {
        if(obj2.hasOwnProperty(key)){
            result[key] = obj2[key];
        }
    }
    }
    console.log(joinObjects({name:'Joe'}, {age: 25}));