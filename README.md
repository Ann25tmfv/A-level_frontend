# A-level_frontend
Lecture 2. (Basics)
Var:
Переменные, объявленные при помощи var, могут иметь как глобальную, так и локальную область видимости.
Глобальная область видимости — переменная объявлена вне функции.
Локальная область видимости — доступ к переменной только в рамках определенной функции.
Let:
let — это улучшенный вариант var. В отличие от var, let имеет блочную область видимости. 
Переменная, объявленная в блоке кода при помощи оператора let, доступна только в рамках этого блока кода {}.
Const:
const — это сокращение от слова "константа". Как и в случае с let, блочная область видимости.
Cтили именования функций и переменных:
1) Camel Case (veryLongName)
2) Snake Case (very_long_name)
3) Kebab Case (very-long-name)
Первая буква всегда маленькая!
Имя доолжно соотвествовать действию, то есть если нужно посчитать количество сахара в чае, то будет function calculateNumberSugarTea.

Lecture 3. (Data Types:Basics)
Есть 8 различных типов данных.
Переменные:
1)не связаны напрямую с каким-либо конкретным типом;
2)тип может быть переназначен;
Тип строки:
1) Двойные кавычки ("");
2) одинарные кавычки ('');
3) Обратный апостроф (``);
Типы данных:
1. string (строка) - мы можем хранить 0 и более символов;
2. number (число) - целые числа и числа с плавающей запятой в диапазоне ± (253-1);
3. bigint - для больших целых чисел;
4. boolean (логическое значение) -  true/false (истина / ложь);
5. null - когда нам нужно пустое значение;
6. undefined - для неназначенных или неопределенных значений;
7. symbol (символ) - уникальные и неизменяемые примитивные значения;
8. object (объект) - более сложная структура данных
С помощью оператора typeof мы можем проверить тип.

Lecture 4. (Operators and Type Coercion)


