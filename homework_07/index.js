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
        console.log(`${this.name}ест`)
    },
    say() {
        console.log(`неизвестное животное молчит`)
    },
    rename(newName) {
        this.name=newName;
    }
}


stroka.replace(/[^а-яёА-ЯЁ ]/g,"")

Object.defineProperties(animal, {
    "name":{enumerable: false, configurable: false, writable: false},
    "eat":{enumerable: false,
        configurable: false,
        writable: false}
})
Object.defineProperty(animal, 'name', {
    enumerable: false,
    configurable: false,
    writable: false,
});


const cat = {
    __proto__: animal,
    name: 'Барсик ',
    say() {
        console.log(`Котик говорит: Мяу!`)
    },
    hunt() {
        console.log(`${this.name}охотится`)
    }
}


// delete cat.say();
// console.log(cat.say());


const dog = {
    __proto__: animal,
    name: 'Алекс ',
    say() {
        console.log(`Пёс говорит: Гав!`)
    },
}
dog.say();
const parrot = {
    __proto__: animal,
    name: 'Кеша ',
    say() {
        console.log(`Попугай говорит: Ча-ча-ча!`)
    },

}

//Разработать метод rename, для смены клички животного. Новая кличка должна содержать только кирилические символы, пробелы или символ "-".

parrot.say();
console.log(animal);
console.log(cat);
console.log(dog);
console.log(parrot);


console.log(Object.getOwnPropertyDescriptors(cat));