//Реализовать функцию, принимающую число (индекс в последовательности Фибоначчи), функция должна вернуть значение числа.
// Использовать рекурсию.
// Модернизировать написанную функцию, добавив кэширование (функция ""запоминает"" входной параметр и вычесленное значение,
// при следующем вызыве с этим же параметром, функция не вычисляет значение, а возвращает из памяти)
const fibonacci = n => {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

const memoize = f => {
    const cache = {};
    return arg => cache[arg] || (cache[arg] = f(arg));
}

const fib = memoize(fibonacci);

console.log(fib(6))
console.log(fib(7))

//3. Разработать рекурсивную функцию, принимающую массив, содержащий массивы из двух элементов, в каждом из которых первый элемент является строкой,
// а второй строкой, числом, логическим значением, объектом, или таким же массивом. Функция должна преобразовать массив в объект.

//Пример входного значения:[[“name”: “Anna”], [“age”: 22],[“pets”: [[“dog”: “Faust”],[“cat”: “Balthazar”]]]]
// Пример возвращаемого объекта:{name: “Anna”,age: 22,pets: {dog: “Faust”,cat: “Balthazar”}}
//     ["pets",[["dog", "Faust"],["cat", "Balthazar"]]]

//Решение задачи через цикл
const family = [["name", "Anna"], ["age", 22], ["pets", [["dog", "Faust"], ["cat", "Balthazar"]]]]

function sumFamily(family) {
    const newArray = {};
    for (let i = 0; i <= family.length - 1; i++) {
        if (typeof (family[i][1]) != "object") {
            newArray[family[i][0]] = family[i][1]
        } else {
            const subArray = {};
            for (let j = 0; j <= family[i][1].length - 1; j++) {
                subArray[family[i][1][j][0]] = family[i][1][j][1];
            }
            newArray[family[i][0]] = subArray;
        }
    }
    return newArray;
}

console.log(sumFamily(family));

//Решение задачи через метод
const map = new Map([["name", "Anna"], ["age", 22], ["pets", [["dog", "Faust"], ["cat", "Balthazar"]]]]);
const family1 = [["name", "Anna"], ["age", 22], ["pets", [["dog", "Faust"], ["cat", "Balthazar"]]]];

function sumArray(family) {
    const newArray = Object.fromEntries(family);
    return console.log(newArray);
}

sumArray(family1);


//Решение задачи через рекурсию

function ArrayToObject(arr) {
    return arr.reduce((prev, curr) => {
        if (typeof (curr[1]) != "object") {
            return {
                ...prev,
                [curr[0]]: curr[1]
            }
        } else {
            return {
                ...prev,
                [curr[0]]: ArrayToObject(curr[1])
            }
        }
    }, {})
}

console.log((ArrayToObject(family1)));