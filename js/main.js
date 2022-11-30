console.log("Begin loaded")

// document.querySelector(".submit").onclick = function() {
//     let password = document.querySelector(".password").value;
//     password = password.toUpperCase();
//     if (password == "AMK") {
//         document.querySelector(".passcode").innerHTML = "Password unlocked!"
//         window.location.href = "scherm2.html"
//     } else {
//         document.querySelector(".passcode").innerHTML = "Password wrong!"
//     }
// }

document.querySelector(".submitName").onclick = function() {
    let playerOne = document.querySelector(".name").value;
    document.querySelector(".naam").innerHTML = `Welkom ${playerOne}`
}

document.querySelector(".submit").onclick = function() {
    let playerTwo = document.querySelector(".speler2").value;
    document.querySelector(".naamTwee").innerHTML = `Welkom ${playerTwo}`
}
