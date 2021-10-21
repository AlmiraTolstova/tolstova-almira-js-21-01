//Объект animal
class Animal{
name='Animal';
constructor(name) {
    this.name=name;
}
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