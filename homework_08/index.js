// Function to change the content of t2
// function modifyText(new_text) {
//     var t2 = document.getElementById("t2");
//     t2.firstChild.nodeValue = new_text;
// }
//
// // Add event listener to table with an arrow function
// var el = document.getElementById("outside");
// el.addEventListener("click", () => { modifyText("four"); }, false);
//
function addRow(name,phone){
    if ((/^[А-я]*$/.test(name))&(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone))){
        let myTable=document.getElementById("tableId");
        let row=document.createElement("tr")
        let tdName=document.createElement("td")
        tdName.appendChild(document.createTextNode(name))
        let tdPhone=document.createElement("td")
        tdPhone.appendChild(document.createTextNode(phone))
        row.appendChild(tdName)
        row.appendChild(tdPhone)
        myTable.appendChild(row)
    }

}

const newName=document.getElementById("nameId")
const newPhone=document.getElementById("phoneId")

const submitButton=document.getElementById("buttonId");
submitButton.addEventListener("click",()=>{addRow(newName.value,newPhone.value)})

// rename(newName) {
//     if (/^[А-я]*$/.test(newName))
//         this.name = newName;
// }