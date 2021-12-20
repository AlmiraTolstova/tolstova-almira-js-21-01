// 1. Написать скрипт, предлогающий пользователю ввести две строки через запятую. Вывести сообщение true, если вторая строка содержится в первый,
// в противном случае false, регистр при проверке не учитывать.

function taskOne(str1,str2){
    const pozitionOne = str1.indexOf(str2);
    if(pozitionOne>=0)
    console.log(true)
    else console.log(false);
    console.log(pozitionOne);
}
taskOne('toOne','One');

// 2. Пользователь вводит строку, затем число (кол-во символов). Функция усекает строку до кол-ва символов и добавляет многоточие.

function taskTwo(str,num){
    const result = str.slice(0,num)+'...';
    console.log(result)
}
taskTwo('кошка охотится на мышь',14);

// 3. Написать функцию, преобразующее строку с датой и временем формата '12/02/2021 12-00' в строку формата 12.02.2021 12:00, используя регулярные выражения
function dataFormat(dataTime) {
    return dataTime.replace(/\/+/g, ".").replace(/-/, ":");
}

function taskThree(dataTime) {
    if (/^(\d{2}\/\d{2}\/\d{4}) (\d{2}-\d{2})$/.test(dataTime)) {
        console.log(dataFormat(dataTime));
    } else {
        console.log("Неверные параметры");
    }
}
taskThree("20/10/2021 21-00");

// 4. Написать функцию, валидирующую ФИО из кирилличиских символов (считать, что отчество может оканчиваться только на "вна" или "вич" или может отсутствовать)

function taskFour(name) {
    console.log(checkName(name) ? "ФИО введены верно" : "ФИО введены неверно");
}
function checkName(name) {
    return /^[А-я]+ [А-я]+( [А-я]*(вич|вна)$)?$/.test(name);
}
taskFour('Толстова Альмира Дамировна')

// 5. На вход дана строка в PamalCase, преобразовать строку в snake_case
function camelToUnderscore(key) {
    const result = key.replace( /([A-Z])/g, " $1" );
    return result.split(' ').join('_').toLowerCase();
}

console.log(camelToUnderscore('itemName'));

// 6. На вход даётся многострочная строка, найти и вернуть через alert все html комментарии
function findComments(html_string){
    const htmlComments = html_string.match(/(<!--[\S\s]+?-->)/g);
    return (htmlComments != null) ?
        htmlComments.map(value => {
            return value.replace(/^<!--/, "").replace(/-->$/, "")
        })
        : null;
}

const newStr = "первый текст <!--коммент 1--> второй текст <!--коммент2--> asas";
console.log(findComments(newStr));

// 7. На вход дана строка, вернуть через alert все числа (десятичные разделяются сиволом ".")
function getNumbers(str){
    return str.match(/[+-]?\d+(\.?\d+)?/g);
}

console.log(getNumbers("кошка охотится на 7 мышей, но 2 собаки смотрят за ней и при этом 2.5 пчелы пролетают мимо"))

// 8. Валидация введённого значения. Вводится идентификатор документа. Идентификатор должен состоять из четырёх частей по четыре символа,разделённых или не разделённых знаком "-".
// Допускаются только символы латинского алфавита и числа. Вывести через alert "ведётся поиск", при соответствии введённого значения, или "неверный илентификатор", при несоответствии.
// При несоответствии снова вывести форму для ввода строки.
function checkIdDocument(idDocument) {
    return /^((([0-9A-z]{4}) ){3}([0-9A-z]{4}))|((([0-9A-z]{4})-){3}([0-9A-z]{4}))$/.test(idDocument);
}

console.log(checkIdDocument("1245-5332-1232-1232"));
console.log(checkIdDocument("ТУТ_-НЕ_П-ОВЕЗ-ЛО__"));
console.log(checkIdDocument("1234 5678 9012 3456"));
