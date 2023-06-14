console.log("loaded");

const inputName = document.querySelector('.name');
const inputEmail = document.querySelector('.email');
const inputMessage = document.querySelector('.message');
const sendBtn = document.querySelector('.submit');
sendBtn.addEventListener('click', function () {
    if(inputName.value == "") {
        alert("Vul uw naam in!")
    }
})