**Content:**
1. [Lecture 2](#lecture-2)
2. [Lecture 3](#lecture-3-data-typesbasics)
3. [Lecture 4](#lecture-4-operators-&-type-coercion)
4. ...
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
```js
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
```js
let a = 1;
let b = a + a;
```
2. Addition (+=)
```js
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
```js
3 == 3; //true
1 == 3; //false
```
2. (!=)
```js
3 != 3; //false
1 != 3; //true
```
3. (===)
```js
3 === 3; // true
3 === '3'; //false. operand 1 is number, operand 2 - string
```
4. (!==)
```js
3 !== 3; // false
3 !== '3'; // true
```
5. (>,<) 
```js
3 < 5; // true
4 > 7; //false
```
6. (>=, <=)
```js
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
# *Lecture 6 (Objects)*

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
# *Lecture 7 (Arrays)*

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

***Arrays Methods***

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
---
# *Lecture 8 (Functions)*

Мы используем функции для:
- повторного использования кода;
- организации своего кода;

**1. Functions Creating**
```
function function_name(argument_1, argument_2, ..., argument_N){
   function's body
}
```
*Functions Using*
```
function sum(a,b){
 return a + b;
}
console.log(sum92,3)); //5
```
*Function Hoisting*
```
printMessage('JavaScript Functions');

function printMessage(message){
  allert(message);
}
```
*Functions as Arguments*
```
const numbers = [1,2,3,4,5];

function multiplyByTwo(element){
  return element*2;
}

const newArray = numbers.map(multiplyByTwo);
```
*Anonymous Function*
```
const numbers = [1,2,3,4,5];

const newArray = numbers.map(function(element){
   return element*2;
}};
```
**2. Arguments**

```
function multiply(a,b){
   return a*b;
}

multiply(3,9); //27
```
*Missing Arguments*
```
function multiply(a, b){
    console.log('a = ${a}');
    console.log('b = ${b}');
    
    return a*b;
}
multiply(3): //NaN
```
*Default Arguments*
```
function multiply(a, b = 1){
     return a * b;
}
multiply(3); //3
```
*Unknown Arguments*
```
function sum(...numbers){
     return numbers.reduce(function (acc, currentValue) {
        return currentValue + acc;
     });
}
sum(1,2,3); //6
sum(1,2,3,4,5); //15
```
*Keyword 'arguments'*
```
function someFunc1(a, b, c){
     return *arguments*;
}

function someFunc2(...params){
     return *arguments*;
}

someFunc1('Hello', 1, true) //['Hello',1,true]
```
**3. Functions Return**
```
function getValue(a){
     return a;
)

getValue(3); //3
```
*Functions Multiple returns*
```
function someFunc(condition){
   if(condition) return 'Yes';
  
   return 'No';
   
   console.log{'This line will never run');
}

console.log(someFunc(true)); // 'Yes'
console.log(someFunc(false)); // 'No'
```
**4. Arrow Function**
```
function function_name(argument_1, argument_2, ..., argument_N){
     function’s body 
}
         ||
         \/
(argument_1, argument_2, ..., argument_N) => {
function’s body
}
```
Example:
```
let arrowFunc = (a, b) => {
    return a + b;
}
arrowFunc(3, 7); //10
```
*Arrow functions without arguments*
```
let arrowFunc = () => {
   allert('This is arrow function in JS');
};
arrowFunc();
```
*Arrow fuctions with single argument*
```
let arrowFunc = a => {
    return a*2;
};
arrowFunc(8); //16
```
*Arrow fuctions with inline body*
```
let arrowFunc = (a,b) => a + b;
arrowFunc(2,6); //8
```
***Arrow Functions Example***
```
const numbers = [1,2,3,4,5];

const newArr = numbers.map(function(element){
    return element*2;
});

const newArr2 = numbers.map(element => element*2);
```
**5. Execution Context**

*Keyword 'this'*

Мы можем получить контекст с помощью **this** ключевого слова.
this может относиться к:
- глобальный контекст;
- функциональный контекст;

**6. Closures**

1) локальный охват (Local Scope)
 - блокировать
 - функциональный
 ```
 //document
 let a=1;
 alert('document:a = ${a}'); //document: a=5
 
 //condition 
 if (true) {
   let a = 5;
   alert ('if: a = ${a}'); //if: a =5
   
//function 
function someFunction (){
  let a=3;
  alert ('function: a = ${a}'); //fuction: a=3
}
someFunction();
```
2) глобальный масштаб (Global Scope)
```
var a = 6;

if(true) {
  var b = 8;
}
function someFunction (){
  var c = 10;
  alert ('function: c = ${c}');
}
alert(a); //6
alert(b); //8
someFunction();
alert('Outside function c = ${c}'); // not defined
```

# *Lecture 9 (Conditions & Loops)*

**1.Conditions**
1. if-else 
```
if(condition){
 some code
 }
 ```
 2.switch 
 ```
 switch (condition){
    case value1:
    ...
    break;
    case valu2:
    ...
    break;
    default:
    ...
}
```
3.Ternary Operator 
```
condition ? value1 : value2;
```

**2.Loops**

1. while - работает, когда состояние надежное
```
while (condition){
some code
}
```
2. do...while - то же, что и while, но запускается в первый раз, затем проверяется условие
```
do {
some code
} while (condition)
```
3. for - самый распространенный способ зацикливания
```
for (initial data, condition, action after cycle) {
some code
}
```
4. for...of - взаимодействовать с элементами массива
```
for (element of array) {
some code
}
```
5. for...in - взаимодействовать с свойствами объектов
```
for (property in object) {
some code
}
```

# *Lecture 10 (DOM (part 1))*

**Getting elements**

1. GetElementsByTagName() - возвращает коллекцию объектов HTMLElement на основе имени тега
```
document.getElementsByTagName('h1');
```
2. getElementsByClassName() - возвращает коллекцию объектов HTMLElement на основе имени класса
```
document.getElementsByClassName('panel');
```
3. getElementById() - возвращает объект HTMLElement с текущим идентификатором (только первым)
```
document.getElementById('chat');
```
4. querySelector() - возвращает первый объект HTMLElement на основе селекторов CSS
```
document.querySelector('h1');
document.querySelector('.panel');
document.querySelector('#chat');
```

**Updating Elements**

*У элемента DOM есть много свойств и методов для работы:*
1. Element.id - получить идентификатор
2. Element.classList - работает с классами
3. Element.attributes - работает с атрибутами
4. Element.style - работает с стилями
5. Element.children -  получить дочерние узлы
6. Element.innerHTML - обновить HTML внутри элемента
7. Element.textContent - обновить внутренний текстъ
8. Element.addEventListener() - обрабатывать события
9. Element.click() - для обработки события щелчка
10. Element.appendChild() - добавить новый дочерний узел

*Добавить новые элементы:*
appendChild() - получает новый элемент и добавляет его в текущий элемент.
insertBefore() - получает 2 аргумента: элемент, который мы хотим добавить, элемент, после которого нужно добавить
after() - получает новый элемент и добавляет его после текущего элемента.

*Дополнительные свойства HTML-элементов:*
1. parentNode - прямой родитель;
2. firstChild - первый прямой дочерний элемент;
3. lastChild - последний прямой дочерний элемент;
4. nextSibling - следующий элемент в структуре, находящийся на одном уровне иерархии с текущим элементом;
5. previousSibling - предыдущий элемент в структуре, находящийся на одном уровне иерархии с текущим элементом.

**Change Atributes**

1. getAttribute() - берет имя attr и получает его значение
2. setAttribute() - берет имя attr со своим значением и устанавливает его
3. hasAttribute() - истина или ложь, если attr существует
4. removeAttribute() - удалить attr

**Removing elements**

1. removeChild() - вызывается применительно к элементу, у которого необходимо удалить прямой дочерний элемент, аргументом принимает удаляемый HTML-тег и возвращает ссылку на него;
2. remove() - вызывается применительно к элементу, который необходимо удалить из DOM.








    




















