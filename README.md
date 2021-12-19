
# *Lecture 2*

**Var:**

Переменные, объявленные при помощи var, могут иметь как глобальную, так и локальную область видимости.

*Глобальная область видимости* — переменная объявлена вне функции.

*Локальная область видимости* — доступ к переменной только в рамках определенной функции.

**Let**:

*let* — это улучшенный вариант var. В отличие от var, let имеет блочную область видимости. 
Переменная, объявленная в блоке кода при помощи оператора let, доступна только в рамках этого блока кода {}.

**Const**:

*const* — это сокращение от слова "константа". Как и в случае с let, блочная область видимости.

**Cтили именования функций и переменных:**

1. Camel Case (veryLongName)
2. Snake Case (very_long_name)
3. Kebab Case (very-long-name)

*Первая буква всегда маленькая!*

Имя доолжно соотвествовать действию, то есть если нужно посчитать количество сахара в чае, то будет function calculateNumberSugarTea.]

---

# *Lecture 3 (Data Types:Basics)*
Есть 8 различных типов данных.

**Переменные:**
- не связаны напрямую с каким-либо конкретным типом;
- тип может быть переназначен;

**Тип строки:**
- Двойные кавычки ("");
- одинарные кавычки ('');
- Обратный апостроф (``);

**Типы данных:**
1. string (строка) - мы можем хранить 0 и более символов;
2. number (число) - целые числа и числа с плавающей запятой в диапазоне ± (253-1);
3. bigint - для больших целых чисел;
4. boolean (логическое значение) -  true/false (истина / ложь);
5. null - когда нам нужно пустое значение;
6. undefined - для неназначенных или неопределенных значений;
7. symbol (символ) - уникальные и неизменяемые примитивные значения;
8. object (объект) - более сложная структура данных

*С помощью оператора typeof мы можем проверить тип.*

---

# *Lecture 4 (Operators & Type Coercion)*

**Arithmetic Operators:**
1. +, -, *, /
```
const a = 3 + 5;
const b = 4 - 3;
const c = 2 * 2;
const d = 3 * 3;
```
2. Remainder (%)
3. Increment (++)
4. Decrement (--)
5. Exponentiation (**)

**Assignment operators :**
1. Assignment (=)
```
let a = 1;
let b = a + a;
```
2. Addition (+=)
```
let a = 1;
a += 5; // a = 6;
```
3. Subtraction (-=)
4. Multiplication (*=)
5. Division (/=)
6. Remainder (%=)
7. Exponentiation (**)
8. Logical AND (&&)
9. Logical OR (||)
10. Logical nullish (??)

**Comparison Operators**
1. (==)
```
3 == 3; //true
1 == 3; //false
```
2. (!=)
```
3 != 3; //false
1 != 3; //true
```
3. (===)
```
3 === 3; // true
3 === '3'; //false. operand 1 is number, operand 2 - string
```
4. (!==)
```
3 !== 3; // false
3 !== '3'; // true
```
5. (>,<) 
```
3 < 5; // true
4 > 7; //false
```
6. (>=, <=)
```
5 <= 5; //true
6 >= 9; //false
```

**Logical Operators**
1. Logical AND (&&)
```
5 == 5 && 1 == 3; //false
5 == 5 && 1 == 1; //true
```
2. Logical OR (||)
```
2 == 3 || 3 == 3; //true
5 != 5 || 1 != 1; // false
5 != 5 || 1 !=7; //true
```
3. Logical NOT (!)
```
!false; //true
!true; //false
!'Some string'; //false
```
4. Double Logical NOT (!!)
```
!!true; //false
!!false; //true
!!5; //false
```
---
# *Lecture 5 (Strings & Numbers)*

***Strings***
Простая строка - это примитив:
```
const str = ‘Javascript string’;
onsole.log(typeof str); // string
console.log(str.length); // 17
```

**String wrapper**
```
const str = ‘Javascript string’;
const str2 = new String(‘Javascript string’);

console.log(str === str2); //false

console.log(typeof str); // string
console.log(typeof str2); // object
```

**Strings methods**
1. Case changing

  1.1 toLowerCase 
  
  1.2 toUpperCase
  ```
  const firstName = 'Anna';
  const lastName = 'Kysil';
  console.log (firstName.toLowerCase()); //anna
  console.log (lastName.toUpperCase()); //KYSIL
  ```
2. Searching substring

  2.1 includes 
  
  2.2 indexOf
  
  2.3 lastIndexOf
  
  2.4 startsWith
  
  2.5 endsWith
  
  2.6 substring 
  
  2.7 slice
  
3. String Spliting

  3.1 split
  
4. Strings Replacing

  4.1 replace
  
  4.2 replaceAll
  
5. Clearing

  5.1 trim
  
  5.2 trimStart
  
  5.3 trimEnd
  
***NUMBER***
Целые числа, число с плавающей запятой, десятичное, двоичное, окта, шестнадцатеричный, NaN, Infinity, -Infinity:

```
const a = 5;
const pi = 3.14;
const hex = fff; // 255
```
*Number Wrapper*
```
const num = 10;
const num2 = new Number(‘10’);
console.log(num === num2); //false
console.log(typeof num); // string
console.log(typeof num2); // object
```
*Number:*
1. Number keyWords

3. Number Corner Cases

  2.1 isNan
  
  2.2 isFinite
  
4. Number Formating

  3.1 toString
  
  3.2 toFixed
  
  3.3 parseFloat
  
  3.4 toLocalString

*Math:*
1. Math Constants 

  1.1 Math.Pi //3.141592653 ...
  
  1.2 Math.E // 2.7182818284 ...
  
2. Math Methods

  2.1 Math.round() //выводит круглое число, например 4.5 выведет 5)
  
  2.2 Math.floor() // выводит круглое число, но в меньшую сторону, например 4.5 выведет 4)
  
  2.3 Math.pow() // подносит в степень
  
  2.4 Math.sqrt() // выводит квадратный корень числа
  
  2.5 Math.min() // находит самое минимальное значение
  
  2.6 Math.max() // находит максимальное значения
  
  2.7 Math.random // выводит рандомное число от 0 до 1

---
#*Lecture 6 (Objects)*

*Object creation*

1. 
```
{
key1: value1,
key2: value2,
key3: () => {}.
...
}
//key1,key2,key3 - object properties
// value1, value2 - properties values
```
2. 
```
const car = {
name: 'Audi',
model: 's8',
year: 2020,
isNew: true,

getShortInformation: Function () {
return `${this.mark}${this.model}, ${this.year}`;
}

this. - ключевое словоБ которое указывает на какой именно обьектю

```

*Object using*

- objectVariable.propertyName
```
let objectPropertyName = 'model';
console.log(car[objectPropertyName]);
```
- objectVariable.methodName()
- delete properties
```
delete car.color;
delete car.getShortInformation;
```
- copy objects
```
let obj1 = {
  value1: 1,
  value2: 2
};

let obj2 = obj1;
obj2.value2 = 3;
```

*Object property descriptiors*

**Имеет такие свойства:**
- configurable (указывает может ли быть изменено значения дескриптора и может ли свойство быть удалено из обьекта)
- enumerable (логическое значение, если равно false, то свойство будет пропущено при перечеслении всех свойств обьекта)
- value (задает значения свойства)
- writable (логическое значение, указывает, может ли значения свойства быть изменено операцией присваивания)
- get (функция возращаемое значение которой будет возвращено в качестве значения свойства при его чтении)
- set ( функцияБ которая вызывается в момент присваивания свойству нового значения и единственным параметром принимает присваемое значение)

*Descriptors Methods*

1) Object.getOwnPropertyDescriptor()
```
const user = {};
user.name = 'Alex';

console.log(Object.getOwnPropertyDescriptor(user, 'name'));
```
2) Object.defineProperty()

```
let obj {};

Object.defineProperty(obj, 'city', {
   configurable: false,
   value: 'Kyiv'
});

obj.city = 'Odessa'; //ignore

delete obj.city; //ignore

Object.defineProperty(obj, 'city', {
 configurable: true
});

```

*Descriptors types*
- accessors ( access descriptors)
- data descriptors


---
#*Lecture 7 (Arrays)*

``` 
const numbers = [1,2,3,4,5]
```

**Array's length**

```
const arr = [25, 'cat', true, {domain: 'gogle.com'}];
console.log(arr.length); //4
```
**Arrays using**
1) array[index]
```
let products = ['Milk', 'Meat', 'Apples']

console.log(products[2]); //Apples
```
2) changing arrays 
```
let cities = ['Minsk', 'Prague', 'Lisbon'];

cities[0] = 'Kyiv';
cities[3] = 'Tallinn';

console.log(cities); // ['Kyiv', 'Prague', 'Lisbon', 'Tallinn']
```
**Arrays Methods**

1) tostring() - массив переделывает в строку;
2) join() -  позволяет добавить запятые, точки и т.д.
```
let arr = [1, 'Anna', true];
console.log(arr.toString()); // "1,Anna,true"
console.log(arr.join('.'); //"1.Anna.true"
```
3) ushift() - позволяет добавить индекс в начале
4) push() - позволяет добавить индекс в конце
5) shift()
6) pop()
```
let arr = [1, 2, 3, 4];
let arr2 = [3, 4, 5];

console.log(arr.shift());
console.log(arr.pop());

```
7) concat() or spread operatror (...)
```
console.log([...arr, ...arr2]);
```
8) slice()
```
let arr1 = [1,2,3,4,5];

let part1_of_arr1 = arr.slice(3); // [4,5]
```
9) splice()
```
let arr = ['a','b','c','d','e'];

let deleteItems = arr.splice(1,2); // ['b','c']
console.log(arr); // ['a', 'd','e'];

```
10) includes()
```
let arr = [3,5,19,1,7,23,14,9,7];

console.log(arr.includes(7)); //true
console.log(arr.includes(77)); //false
```
11) indexOf()
```
let arr = [3,5,19,1,7,23,14,9,7];

console.log(arr.indexOf(7)); //4
console.log(arr.indexOf(77)); //-1

```
12) find()]
```
let arr = [7,6,3,5, 8, 2]

let result1 = arr.find((element, index) => element % 4 == 0); //8
```
13) some()
```
let arr = [7,6,3,5, 8, 2]

let result1 = arr.some((element, index) => element % 4 == 0); //true
```
14) every()
```
let arr = [7,6,3,5, 8, 2]

let result1 = arr.every((element, index) => element % 4 == 0); //false
```
15) sort() - позволяет сортировать массив;

***Arrays Methods* 

1) forEach()
```
const arr = ['Joe','Anna','Bond'];
function printf(element, index) {
    console.log(`a:${element},b:${index}`);
}
arr.forEach(printf);
//or
arr.forEach((element, index) => console.log(`element:${element},index:${index}`));
```
2) map()
```
const arr = ['Joe','Anna','Bond'];
const result = arr.map((element,index) => ({name:element, id: index}));
console.log(result);
```
3) filter()
```
const arr = [
    {
        name:'Joe',
        id: 0.435443451,
        isStudent:true
    },
    {
        name:'Anna',
        id: 0.476466337,
        isStudent:true
    },
    {
        name:'Brad',
        id: 0.9876663,
        isStudent:false,
        age: 99
    }
];
const students = arr.filter(element => element.isStudent);
console.log(students);
```
4) reduce()
```
const arr =[1,2,3];
arr.forEach((el) => (sum += el));
const sumWithReduce = arr.reduce((acc, element,index) => {
    console.log('acc:', acc);
    console.log('element:' element);

    return (acc += element);
},0);
console.log(sumWithReduce);
```







