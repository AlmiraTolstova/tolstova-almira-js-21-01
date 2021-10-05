const buttonSwitchTheme = document.getElementById('switch-theme');
// Добавим обработчик для события "click", предоставив callback.
// Теперь по клику на элемент будет всплывать подсказка.

let arrayLightTheme=['white-text__light-theme', 'black-text__light-theme','bg-white__light-theme','bg-gray__light-theme','bg-mgray__light-theme','btn__light-theme'];
let arrayDarkTheme=['black-text__dark-theme','white-text__dark-theme','bg-black__dark-theme','bg-gray__dark-theme','bg-green__dark-theme','btn__dark-theme']

let currentTheme=false; //false - light theme, true - dark theme

buttonSwitchTheme.addEventListener('click', function (event) {
    //document.getElementsByClassName("white-text__light-theme").classList.toggle("black-text__dark-theme");
    console.log(currentTheme)
    currentTheme=makeSwitchSelector(arrayLightTheme, arrayDarkTheme, currentTheme);

});


function makeSwitchSelector(arrayLightTheme, arrayDarkTheme, currentTheme){
    if (currentTheme==false)
    {
        for(i=0;i<arrayLightTheme.length;i++){
            let elementsLightTheme=document.querySelectorAll('.'+arrayLightTheme[i]);
            console.log(elementsLightTheme.length)
            for(j=0;j<elementsLightTheme.length;j++){
                    //console.log(elementsLightTheme[j], "номер объекта: ", j);
                    elementsLightTheme[j].classList.remove(arrayLightTheme[i]);
                    elementsLightTheme[j].classList.add(arrayDarkTheme[i]);

            }
        }
        currentTheme=true;
        return currentTheme;
    }
    else
    {
        for(i=0;i<arrayDarkTheme.length;i++){
             let elementsDarkTheme=document.querySelectorAll('.'+arrayDarkTheme[i]);
             console.log(elementsDarkTheme.length)
             for(j=0;j<elementsDarkTheme.length;j++){
                 //console.log(elementsDarkTheme[j],"номер объекта: ", j);

                 elementsDarkTheme[j].classList.add(arrayLightTheme[i]);
                 elementsDarkTheme[j].classList.remove(arrayDarkTheme[i]);
             }
        }
        currentTheme=false;
        return currentTheme;
    }
}
