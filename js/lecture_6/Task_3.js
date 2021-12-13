/**
 * Task 3
 */

const user = {
    name: 'Jack',
    age: 18,
    toString: function() {
        return 'My name is' + this.name + ',' + 'I am' + this.age
    }
};

Object.defineProperty (user, toString, {
    enumerable: false
});

for(var key in user) alert(key);

//or

const user = {
    name: 'Jack',
    age: 18
}

Object.defineProperty (user, toString, {
    get: function() {
        return 'My name is' + this.name + ',' + 'I am' + this.age;
    }
});

Object.defineProperties (user, valueOf, {
    get: function() {
        return this.age;
    }
});