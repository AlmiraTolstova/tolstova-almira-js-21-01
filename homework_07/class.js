//Реализовать объект animal, с полем клички, методом eat, выводящим сообщение "/*кличка*/ ест" и методом say, выводящим фразу,
// "неизвестное животное молчит", путём прототипного наследования создать объекты кота, собаки и попугая.
// Переопределить в них метод say, в зависимости от типа животного. Для кота добавить новый метод hunt, выводящий сообщение "/*кличка*/ охотится".
// Все перечисленные методы и свойства должны быть защищены от удаления и перезаписи. Методы должны быть неперечисляемыми.
// Разработать метод rename, для смены клички животного. Новая кличка должна содержать только кирилические символы, пробелы или символ "-".
// Выполнить то же самое использую функции конструкторы. Выполнить то же самое, используя классы.

//Объект animal
class Animal {
    _name = 'Animal';

    constructor(newName) {
        this._name = newName;
    }

    get name() {
        return this._name;
    }

    eat() {
        console.log(`${this.name}ест`)
    }

    say() {
        console.log(`неизвестное животное молчит`)
    }

    rename(newName) {
        this._name = newName;
    }
}

class Cat extends Animal {
    hunt() {
        console.log(`${this.name} охотится`)
    }

    say() {
        console.log(`${this.name} говорит: Мяу!`)
    }
}


class Dog extends Animal {
    say() {
        console.log(`Пёс говорит: Гав!`)
    }
}

class Parrot extends Animal {
    say() {
        console.log(`Попугай говорит: Ча-ча-ча!`)
    }
}

const cat = new Cat("Барсик");
const dog = new Dog("Алекс");
const parrot = new Parrot("Кеша");
cat.say();
dog.say();
parrot.say();


//Перечисленные методы и свойства должны быть защищены от удаления и перезаписи. Методы должны быть неперечисляемыми.
Object.defineProperties(Animal, {
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
    "say": {
        enumerable: false,
        configurable: false,
        writable: false
    }
})

Object.defineProperties(parrot, {
    "say": {
        enumerable: false,
        configurable: false,
        writable: false
    }
})

cat.rename("Акелла");
cat.hunt()
cat.name = "One";
cat.say()