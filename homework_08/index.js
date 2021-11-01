//----------------------Функция добавления новых строк-------------------//
function addRow(name, phone, mColor) {
    if ((/^[А-я]*$/.test(name)) & (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone))) {
        let myTable = document.getElementById("tableId");
        let row = document.createElement("tr")
        row.classList.add(mColor)
        let tdName = document.createElement("td")
        tdName.appendChild(document.createTextNode(name))
        let tdPhone = document.createElement("td")
        tdPhone.appendChild(document.createTextNode(phone))
        row.appendChild(tdName)
        row.appendChild(tdPhone)
        myTable.appendChild(row)
    }
}

//----------------------Объявление констант--------------------------------//
const newName = document.getElementById("nameId")
const newPhone = document.getElementById("phoneId")
const submitButton = document.getElementById("buttonId");
submitButton.addEventListener("click", () => {
    addRow(newName.value, newPhone.value, mainColor[1])
})

let mainColor = ["thGrey", "tdGrey"];
const greyColor = ["thGrey", "tdGrey"];
const orangeColor = ["thOrange", "tdOrange"];
const blueColor = ["thBlue", "tdBlue"];

//----------------------Функции обработчики кнопок------------------------//
const buttonBlue = document.getElementById("buttonBlue");
buttonBlue.addEventListener("click", function () {
    changeColor(mainColor[0], blueColor[0]);
    changeColor(mainColor[1], blueColor[1]);
    mainColor[0] = blueColor[0];
    mainColor[1] = blueColor[1];
})

const buttonOrange = document.getElementById("buttonOrange");
buttonOrange.addEventListener("click", function () {
    changeColor(mainColor[0], orangeColor[0]);
    changeColor(mainColor[1], orangeColor[1]);
    mainColor[0] = orangeColor[0];
    mainColor[1] = orangeColor[1];
})

const buttonGrey = document.getElementById("buttonGrey");
buttonGrey.addEventListener("click", function () {
    changeColor(mainColor[0], greyColor[0]);
    changeColor(mainColor[1], greyColor[1]);
    mainColor[0] = greyColor[0];
    mainColor[1] = greyColor[1];
})

function changeColor(removeColor, addColor) {
    let elements = document.querySelectorAll('.' + removeColor);
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove(removeColor);
        elements[i].classList.add(addColor);
    }
}

