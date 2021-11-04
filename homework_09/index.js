//Задание1 реализация через setInterval
function printNumbers(i, j) {
    let current = i;

    let timerId = setInterval(function () {
        console.log(current);
        if (current == j) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}

printNumbers(1, 5);

//Задание 1 реализация через setTimeout
function calcNumbers(i, j) {
    let current = i;

    setTimeout(function go() {
        console.log(current);
        if (current < j) {
            setTimeout(go, 10);
        }
        current++;
    }, 10);
}

calcNumbers(5, 10);

//Задание 3
function redirect(s) {
    document.getElementById('time').innerHTML = s;
    if (s > 0) {
        setTimeout("redirect(" + (--s) + ");", 1000);
    } else {
        window.location.href = 'https://maxima.life';
    }
}

redirect(20);