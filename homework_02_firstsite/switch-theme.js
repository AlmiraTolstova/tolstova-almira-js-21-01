const buttonSwitchTheme = document.getElementById('switch-theme');
// Добавим обработчик для события "click", предоставив callback.
// Теперь по клику на элемент будет всплывать подсказка.

let arrayLightTheme=['.white-text__light-theme', '.black-text__light-theme','.bg-white__light-theme','.bg-gray__light-theme','.bg-mgray__light-theme','.btn__light-theme'];
let arrayDarkTheme=['.black-text__dark-theme','.white-text__dark-theme','.bg-black__dark-theme','.bg-gray__dark-theme','.bg-lgray__dark-theme','.btn__dark-theme']

let currentTheme=false; //false - light theme, true - dark theme

buttonSwitchTheme.addEventListener('click', function (event) {
    //document.getElementsByClassName("white-text__light-theme").classList.toggle("black-text__dark-theme");
    console.log(currentTheme)
    if (currentTheme==false)
    {
        let elementsLightTheme=document.querySelectorAll(".white-text__light-theme, .black-text__light-theme");
        console.log(elementsLightTheme.length)
        for(i=0;i<elementsLightTheme.length;i++){
            console.log(elementsLightTheme[i], "номер объекта: ", i);

            elementsLightTheme[i].classList.add("black-text__dark-theme");
            elementsLightTheme[i].classList.remove("white-text__light-theme");

        }

        currentTheme=true;
    }
    else
    {
        let elementsLightTheme=document.querySelectorAll(".black-text__dark-theme");
        console.log(elementsLightTheme.length)
        for(i=0;i<elementsLightTheme.length;i++){
            console.log(elementsLightTheme[i],"номер объекта: ", i);

            elementsLightTheme[i].classList.add("white-text__light-theme");
            elementsLightTheme[i].classList.remove("black-text__dark-theme");

        }
        currentTheme=false;
    }



});

