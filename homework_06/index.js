//Реализовать функцию, принимающую число (индекс в последовательности Фибоначчи), функция должна вернуть значение числа.
// Использовать рекурсию.
// Модернизировать написанную функцию, добавив кэширование (функция ""запоминает"" входной параметр и вычесленное значение,
// при следующем вызыве с этим же параметром, функция не вычисляет значение, а возвращает из памяти)
const fibonacci = n => {
    if(n <= 1){
        return n;
    }else{
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