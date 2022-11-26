console.log("Begin loaded")

document.querySelector(".submit").onclick = function() {
    let password = document.querySelector(".password").value;
    if (password == 17) {
        document.querySelector(".passcode").innerHTML = "Password unlocked!"
        window.location.href = "scherm2.html"
    } else {
        document.querySelector(".passcode").innerHTML = "Password wrong!"
    }
}

document.querySelector(".submitName").onclick = function() {
    let myName = document.querySelector(".name").value;
    document.querySelector(".naam").innerHTML = `Welkom ${myName}`
}
