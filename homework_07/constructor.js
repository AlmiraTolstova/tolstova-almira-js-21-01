//Реализовать объект animal, с полем клички, методом eat, выводящим сообщение "/*кличка*/ ест" и методом say, выводящим фразу,
// "неизвестное животное молчит", путём прототипного наследования создать объекты кота, собаки и попугая.
// Переопределить в них метод say, в зависимости от типа животного. Для кота добавить новый метод hunt, выводящий сообщение "/*кличка*/ охотится".
// Все перечисленные методы и свойства должны быть защищены от удаления и перезаписи. Методы должны быть неперечисляемыми.
// Разработать метод rename, для смены клички животного. Новая кличка должна содержать только кирилические символы, пробелы или символ "-".
// Выполнить то же самое использую функции конструкторы. Выполнить то же самое, используя классы.

//Объект animal
const animal = {
    name: 'Animal',
    eat() {
        console.log(`${this.name} ест`)
    },
    say() {
        console.log(`неизвестное животное молчит`)
    },
    rename(newName) {
        if (/^[А-я]*$/.test(newName))
            this.name = newName;
    }
}

function Cat(name) {
    this.name = name;
    this.hunt = function () {
        console.log(`${this.name} охотится`)
    }
    this.say = function () {
        console.log(`Котик говорит: Мяу!`)
    }
}

Cat.prototype = animal;
const cat = new Cat("Барсик");

function Dog(name) {
    this.name = name;
    this.say = function () {
        console.log(`Пёс говорит: Гав!`)
    }
}

Dog.prototype = animal;
const dog = new Dog("Алекс");

function Parrot(name) {
    this.name = name;
    this.say = function () {
        console.log(`Попугай говорит: Ча-ча-ча!`)
    }
}

Parrot.prototype = animal;
const parrot = new Parrot("Алекс");

//Перечисленные методы и свойства должны быть защищены от удаления и перезаписи. Методы должны быть неперечисляемыми.
Object.defineProperties(animal, {
    "name": {enumerable: false, configurable: false, writable: false},
    "eat": {
        enumerable: false,
        configurable: false,
        writable: false
    },
    "say": {
        enumerable: false,
        configurable: false,
        writable: false
    },
    "rename": {
        enumerable: false,
        configurable: false,
        writable: false
    }
})

Object.defineProperties(cat, {
    "name": {enumerable: false, configurable: false, writable: false},
    "say": {
        enumerable: false,
        configurable: false,
        writable: false
    },
    "hunt": {
        enumerable: false,
        configurable: false,
        writable: false
    },
})

Object.defineProperties(dog, {
    "name": {enumerable: false, configurable: false, writable: false},
    "say": {
        enumerable: false,
        configurable: false,
        writable: false
    }
})

Object.defineProperties(parrot, {
    "name": {enumerable: false, configurable: false, writable: false},
    "say": {
        enumerable: false,
        configurable: false,
        writable: false
    }
})
