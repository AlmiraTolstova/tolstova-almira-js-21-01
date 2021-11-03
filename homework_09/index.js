
//Задание1 реализация через setInterval
function printNumbers(i, j) {
    let current = i;

    let timerId = setInterval(function() {
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

// function Redirect()
// {
//     window.location="https://maxima.life";
// }
// document.write("You will be redirected to a new page in 5 seconds");
// setTimeout('Redirect()', 100);

function redirect(s) {
    document.getElementById('time').innerHTML = s;
    if (s > 0) {
        setTimeout("redirect(" + (--s) + ");", 1000);
    } else {
        window.location.href = 'https://maxima.life'; // куда надо перейти
    }
}
redirect(20); // через сколько перенаправлять