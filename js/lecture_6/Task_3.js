/**
 * Task 3
 */

const user = {
  name: 'Jack',
  age: 18
  // you can't config props/methods that are already set
  // toString: function() {
  //     return 'My name is' + this.name + ',' + 'I am' + this.age;
  // }
};

Object.defineProperty(user, 'toString', {
  // prop name should be string
  enumerable: false, // enumerable is 'false' by default
  value: function () {
    return 'My name is ' + this.name + ', ' + 'I am ' + this.age;
  }
});

for (var key in user) console.log(key);

console.log('Hello! ' + user); // 'Hello! My name isJack, I am 18'
