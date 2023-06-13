console.log("loaded");

const inputName = document.querySelector('.name');
const inputEmail = document.querySelector('.email');
const inputMessage = document.querySelector('.message');
const sendBtn = document.querySelector('.submit');
sendBtn.addEventListener('click', function () {
    if(inputName.value == "" && inputEmail.value.includes == "@" && inputMessage.value == "") {
        alert("Vul alles in!")
    } else {
        alert("Alles is ingevuld")
    }
})