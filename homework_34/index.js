// 1. Написать скрипт, предлогающий пользователю ввести две строки через запятую. Вывести сообщение true, если вторая строка содержится в первый,
// в противном случае false, регистр при проверке не учитывать.
function taskOne(str1, str2) {
    const pozitionOne = str1.indexOf(str2);
    if (pozitionOne >= 0)
        return (true)
    else return (false);
}

// 2. Пользователь вводит строку, затем число (кол-во символов). Функция усекает строку до кол-ва символов и добавляет многоточие.

function taskTwo(str, num) {
    const result = str.slice(0, num) + '...';
    return (result)
}

// 3. Написать функцию, преобразующее строку с датой и временем формата '12/02/2021 12-00' в строку формата 12.02.2021 12:00, используя регулярные выражения
function dataFormat(dataTime) {
    return dataTime.replace(/\/+/g, ".").replace(/-/, ":");
}

function taskThree(dataTime) {
    if (/^(\d{2}\/\d{2}\/\d{4}) (\d{2}-\d{2})$/.test(dataTime)) {
        return (dataFormat(dataTime));
    } else {
        return ("Неверные параметры");
    }
}

// 4. Написать функцию, валидирующую ФИО из кирилличиских символов (считать, что отчество может оканчиваться только на "вна" или "вич" или может отсутствовать)

function taskFour(name) {
    return (checkName(name) ? true : false);
}

function checkName(name) {
    return /^[А-я]+ [А-я]+( [А-я]*(вич|вна)$)?$/.test(name);
}

// 5. На вход дана строка в PamalCase, преобразовать строку в snake_case
function camelToUnderscore(key) {
    const result = key.replace(/([A-Z])/g, " $1");
    return result.split(' ').join('_').toLowerCase();
}

// 6. На вход даётся многострочная строка, найти и вернуть через alert все html комментарии
function findComments(html_string) {
    const htmlComments = html_string.match(/(<!--[\S\s]+?-->)/g);
    return (htmlComments != null) ?
        htmlComments.map(value => {
            return value.replace(/^<!--/, "").replace(/-->$/, "")
        })
        : null;
}

const newStr = "первый текст <!--коммент 1--> второй текст <!--коммент2--> asas";


// 7. На вход дана строка, вернуть через alert все числа (десятичные разделяются сиволом ".")
function getNumbers(str) {
    return str.match(/[+-]?\d+(\.?\d+)?/g);
}

// 8. Валидация введённого значения. Вводится идентификатор документа. Идентификатор должен состоять из четырёх частей по четыре символа,разделённых или не разделённых знаком "-".
// Допускаются только символы латинского алфавита и числа. Вывести через alert "ведётся поиск", при соответствии введённого значения, или "неверный илентификатор", при несоответствии.
// При несоответствии снова вывести форму для ввода строки.
function checkIdDocument(idDocument) {
    return /^((([0-9A-z]{4}) ){3}([0-9A-z]{4}))|((([0-9A-z]{4})-){3}([0-9A-z]{4}))$/.test(idDocument);
}

module.exports = {
    taskOne,
    taskTwo,
    taskThree,
    taskFour,
    camelToUnderscore,
    findComments,
    getNumbers,
    checkIdDocument
}