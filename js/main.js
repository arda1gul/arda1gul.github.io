console.log("Begin loaded")

let Button = document.querySelectorAll(".grid-item");
let restartBtn = document.querySelector(".restart");

let winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
];

let xTurn = true;
let count = 0;

const enableButtons = () => {
    Button.forEach((element) => {
        element.innerText = "";
        element.disabled = false;
    });
};

const winFunction = (letter) => {
    if (letter == "X") {
        alert('X heeft gewonnen');
    } else {
        alert('O heeft gewonnen');
    }
};

const drawFunction = () => {
    alert('It is a draw');
};

restartBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
});

const winChecker = () => {
    for (let i of winningPattern) {
        let [element1, element2, element3] = [
            Button[i[0]].innerText,
            Button[i[1]].innerText,
            Button[i[2]].innerText,
        ];
        if (element1 != "" && (element2 != "") & (element3 != "")) {
            if (element1 == element2 && element2 == element3) {
                winFunction(element1);
            }
        }
    }
};

Button.forEach((element) => {
    element.addEventListener("click", () => {
        if (xTurn) {
            xTurn = false;
            element.innerText = "X";
            element.disabled = true;
        } else {
            xTurn = true;
            element.innerText = "O";
            element.disabled = true;
        }
        count += 1;
        if (count == 9) {
            drawFunction();
        }
        winChecker();
    });
});

