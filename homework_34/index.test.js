const {
    taskOne,
    taskTwo,
    taskThree,
    taskFour,
    camelToUnderscore,
    findComments,
    getNumbers,
    checkIdDocument
} = require('./index')


describe('function taskOne', () => {
    test('function should return true if str2 exist in str1', () => {
        expect(taskOne('Say hello to my little friend', 'hello')).toBe(true)
    })
})

describe('function taskTwo', () => {
    test('Функция усекает строку до кол-ва символов и добавляет многоточие', () => {
        expect(taskTwo('кошка охотится на мышь', 5)).toBe('кошка...')
    })
})

describe('fuction taskThree', () => {
    test('Функция, преобразующая строку с датой и временем формата \'12/02/2021 12-00\' в строку формата 12.02.2021 12:00',
        () => {
            expect(taskThree("20/10/2021 21-00")).toBe('20.10.2021 21:00')
        })
})

describe('function taskFour', () => {
    test('Функция валидирующуя ФИО из кирилличиских символов', () => {
        expect(taskFour('Толстова Альмира Дамировна')).toBe(true)
    })
})

describe('function camelToUnderscore', () => {
    test('Преобразовать строку в snake_case', () => {
        expect(camelToUnderscore('itemName')).toBe('item_name')
    })
})

describe('function findComments', () => {
    test('Найти и вернуть все html комментарии', () => {
        expect(findComments("первый текст <!--коммент 1--> второй текст <!--коммент2--> asas")).toStrictEqual(['коммент 1', 'коммент2'])
    })
})

describe('function getNumbers', () => {
    test('вернуть все числа (десятичные разделяются сиволом "."', () => {
        expect(getNumbers("кошка охотится на 7 мышей, но 2 собаки смотрят за ней и при этом 2.5 пчелы пролетают мимо")).toStrictEqual(['7', '2', '2.5'])
    })
})

describe('function checkIdDocument', () => {
    test('Валидация введённого значения', () => {
        expect(checkIdDocument("1245-5332-1232-1232")).toBe(true);
        expect(checkIdDocument("ТУТ_-НЕ_П-ОВЕЗ-ЛО__")).toBe(false);
        expect(checkIdDocument("1234 5678 9012 3456")).toBe(true);
    })
})