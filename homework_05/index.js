//1. На вход поступает массив, вывести массив, удалив неуникальные значения.
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

const array = [1, 2, 3, 4, 5, 2, 1, 1, 3];
const uniqueArray = array.filter(onlyUnique);
console.log(uniqueArray);

//2. На вход поступает массив, реверсировать значения (подобно методу reverse) метод reverse не использовать.

const array1 = [2, 4, 6, 8, 10, 12]

function reverse(myArray) {
    let reverseArray = [];
    for (let i = myArray.length - 1; i > -1; i--) {
        reverseArray.push(myArray[i]);
    }
    return reverseArray;
}

console.log(reverse(array1));

//3. На вход поступает массив, содержащий массивы, в которых хранится два элемента.
// Преобразовать массив в объект, где ключами являются нулевой индекс вложенныхых массивов, а значениями являются элементы с индексом один.

const arrayOfArray = [["1", "Толстой"], ["2", "Гоголь"], ["3", "Тургенев"]];

function parseArray(sourceArray) {
    let newDictionary = {};
    for (let i of sourceArray) {
        newDictionary[i[0]] = i[1];
    }
    return newDictionary;
}

console.log(parseArray(arrayOfArray));


//4. На вход поступает объект, вывести сумму числовых свойств объекта.
function sumFruits(fruits) {
    let sum = 0;
    for (let amount of Object.values(fruits)) {
        sum += amount;
    }
    return sum;
}

const fruits = {
    "Apple": 5,
    "Orange": 4,
    "Pear": 2
};

console.log(sumFruits(fruits));

//5. На вход поступает массив с числами, вывести среднее арифметическое элементов массива.
const newArray = [9, 8, 7, 6, 5, 4, 3, 2, 1];
average = newArray.reduce(function (avg, value, _, {length}) {
    return avg + value / length;
}, 0);

console.log(average);

//6. Создать функцию-конструктор для объекта "калькулятор", объект должен иметь поле, хранящее текущее значение и методы сложения,
// вычитания, умножения и деления, принимающие число и манипулирующий свойством значения в соответствии с назначением метода,
// а так же функцию, сбрасывающую значение в ноль.

//Это новый класс Калькулятор
class Calculator {
    //Напишем конструктор
    constructor(sum) {
        this.sum = sum;
    }

    //Методы-функции класса
    //Сложение
    addition = function (num1, num2) {
        this.sum = num1 + num2;
    };
    //Вычитание
    subtraction = function (num1, num2) {
        this.sum = num1 - num2;
    }
    //Умножение
    multiplication = function (num1, num2) {
        this.sum = num1 * num2;
    }
    //Деление
    division = function (num1, num2) {
        this.sum = num1 / num2;
    }
    //Метод получить текущее значение
    getSum = function () {
        console.log(this.sum);
    }
    //Метод сброса значений
    clear = function () {
        this.sum = 0;
    }
}

//Создадим экземпляр объекта
let myCalculator = new Calculator(10);
//Проверка
myCalculator.getSum();
myCalculator.addition(5, 4);
myCalculator.getSum();
myCalculator.multiplication(4, 2);
myCalculator.getSum();
myCalculator.clear();
myCalculator.getSum();

//7. Функция принимает смешанный массив (содержащий значения чисел, строк и объектов), вернуть объект с полями numbers,
// strings и objects, содержащими массив со значениями, соответствующими названию поля.

const mixArray = [1, 2, 3, "Какая-то строка", 5, "Ещё одна строка", {key1: "value1", key2: "value2"}];

function sortingArray(myArray) {
    let numberArray = [];
    let stringArray = [];
    let objectArray = [];
    for (let i = 0; i < myArray.length; i++) {
        console.log(typeof myArray[i]);
        if (typeof myArray[i] === 'number')
            numberArray.push(myArray[i]);
        if (typeof myArray[i] === 'string')
            stringArray.push(myArray[i]);
        if (typeof myArray[i] === 'object')
            objectArray.push(myArray[i]);
    }
    let result = [numberArray, stringArray, objectArray]
    return result;
}

console.log(sortingArray(mixArray));

//8. Функция принимает массив чисел и два числовых значения, вернуть новый массив, содержащий элементы первого массива,
// значение которых попадает под диапазон переданных в функцию чисел (второе переданное число может быть больше первого)

const array8 = [1, 2, 3, 4];

function returnArray(myArray, num1, num2) {
    const newArray8 = [];
    for (let i in myArray) {
        if ((myArray[i] >= num1) && (myArray[i] <= num2)) {
            newArray8.push(myArray[i]);
        }
    }
    return newArray8
}

console.log(returnArray(array8, 2, 3));


//9. Функция принимает две строки. Вывести true, если строки являются анаграммами, в противном случае false

// Вспомогательная функция, которая создаёт объект для хранения данных
const buildCharObject = str => {
    const charObj = {}
    for(let char of str.replace(/[^\w]/g).toLowerCase()) {
        // Если объект уже содержит пару ключ-значение равную значению в цикле,
        // увеличиваем значение на 1, в противном случае добавляем букву в качестве ключа
        // и 1 в качестве значения
        charObj[char] = charObj[char] + 1 || 1
    }
    return charObj
}
// Главная функция
const anagram = (strA, strB) => {
    // Создаём объект для хранения strA
    const aCharObject = buildCharObject(strA)
    // Создаём объект для хранения strB
    const bCharObject = buildCharObject(strB)
    // Сравниваем количество ключей в обоих объектах
    // (анаграммы должны иметь одинаковое количество букв)
    if(Object.keys(aCharObject).length !== Object.keys(bCharObject).length) {
        return false
    }
    // Если оба объекта имеют одинаковое количество ключей, мы можем быть уверены,
    // что обе строки имеют одинаковое количество символов. Теперь мы можем сравнить
    // оба объекта, чтобы увидеть, имеют ли они одинаковые буквы в одинаковом количестве
    for(let char in aCharObject) {
        if(aCharObject[char] !== bCharObject[char]) {
            return false
        }
    }
    // Если проверка успешна, строки являются анаграммами — возвращаем true
    return true
}

console.log(anagram('ротонда','торнадо'));


//10. Создать объект, выводящий в консоль все ключи и значения объекта в формате "ключ: значение" через запятую
// (считать, что значением ключа объекта не может быть объектом или массивом, содержащими объекты) сама функция в консоль выводиться не должна.

const user={
    name:"Almira",
    email:"almiratolstova@gmail.com",
    login:"Almira1993"
}

Object.keys(user).forEach(key => console.log(`key:${key},value:${user[key]}`));
Object.entries(user).forEach(entry=>console.log(`key:${entry[0]},value:${entry[1]}`))


//11. Создать функцию-конструктор для объекта, содержащего методы serProp (установить значение свойства), метод принимает ключь (строка),
// значение (произвольное) и объект со свойствами writable, configurable, enumerable (разрешение перезаписи свойства,
// разрешение перечисления свойства и разрешение удаления свойства). Если какое-то из свойств в объекте отсутствует, действие должно быть разрешено

function setProp(key, props){
    console.log(`key:${key},props:${props.configurable}`);
    //this.setProp=()=>function (){
        let writ, conf, enu;
        if(props.writable!=undefined) writ=props.writable
        else writ=true;
        if(props.configurable!=undefined) conf=props.configurable
        else conf=true;
        if(props.enumerable!=undefined) enu=props.enumerable
        else enu=true;
        console.log("свойства изнутри",writ, conf, enu);
        Object.defineProperties(this, {
                name:{
                    value:key,
                    writable:writ,
                    configurable:conf,
                    enumerable:enu
                }
            }
        )
    //}

}
const user1=new setProp("Oleg",{writable:true, configurable:false});
//user1.setProp();
console.log(Object.getOwnPropertyDescriptors(user1));
