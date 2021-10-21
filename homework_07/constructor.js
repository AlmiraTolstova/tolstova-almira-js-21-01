//Объект animal
function Animal(name) {
    this.name = name;
    Object.defineProperty(
        this,"eat",
    {
        function () {
            console.log(`${this.name}ест`)
        }

        enumerable: false,
            configurable
    :
        false,
            writable
    :
        false,
    }
)


    say = function () {
        console.log(`неизвестное животное молчит`)
    }
    rename = function (newName) {
        this.name = newName;
    }
}

function Cat(name) {
    Animal.call(this, name);

    this.say = function () {
        console.log(`Котик ${this.name} говорит: Мяу!`)
    }
}

const newCat = new Cat("Барсук");
newCat.say();