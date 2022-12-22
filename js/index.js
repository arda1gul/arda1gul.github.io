console.log("JS Loaded")

const playerScoreOne = 0;
const playerScoreTwo = 0;
let playerOne = ""
let playerTwo = ""

document.querySelector(".submitName").onclick = function () {
    let playerOne = document.querySelector(".name").value;
    if (playerOne == "")  {
        document.querySelector(".naam").innerHTML = "Voer een naam in!"
    } else {
        document.querySelector(".naam").innerHTML = `Welkom ${playerOne}`
    }
    checkName()
}

document.querySelector(".submit").onclick = function () {
    let playerTwo = document.querySelector(".speler2").value;
    if (playerTwo == "")  {
        document.querySelector(".naamTwee").innerHTML = "Voer een naam in!"
    } else {
        document.querySelector(".naamTwee").innerHTML = `Welkom ${playerTwo}`
    }
    checkName()
}



