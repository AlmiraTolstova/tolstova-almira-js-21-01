const buttonSwitchTheme = document.getElementById('switch-theme');
// Добавим обработчик для события "click", предоставив callback.
// Теперь по клику на элемент будет всплывать подсказка.

let currentTheme=false; //false - light theme, true - dark theme

buttonSwitchTheme.addEventListener('click', function (event) {
    //document.getElementsByClassName("white-text__light-theme").classList.toggle("black-text__dark-theme");
    console.log(currentTheme)
    if (currentTheme==false)
    {
        let elementsLightTheme=document.querySelectorAll(".white-text__light-theme");
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

