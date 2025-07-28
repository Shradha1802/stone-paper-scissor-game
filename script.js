let start = false;
let play = document.querySelector(".play");

if (play.innerText == "Play" || play.innerText == "Play Again") {
    play.addEventListener("click", function () {
        clickSound.play();
        start = true;
        console.log("game started");
        play.innerText = "Choose Any Option";
    });
}
//Sounds
const clickSound = new Audio("Click.mp3");
const winSound = new Audio("victorymale-version-230553.mp3");
const looseSound = new Audio("game-over-deep-male-voice-clip-352695.mp3");
const points = new Audio("points.mp3");
const compWin = new Audio("compWin.mp3");
const draw = new Audio("draw.mp3");

let compOpt = ["Stone", "Paper", "Scissor"];
let compChoose = document.querySelector(".compChoose");
let computer = "Stone";
let randomOpt = function () {
    let idx = Math.floor(Math.random() * 3);
    let imgName = compOpt[idx];
    let imgC = document.querySelector(".compChoose img")
    imgC.setAttribute("src", `comp${imgName}.jpg`);
    computer=imgName;
    // compChoose.innerText = compOpt[idx];computer
    console.log("computer: ", compOpt[idx]);
    // computer = compChoose.innerText;
}


let playerOpt = document.querySelectorAll(".playerOpt");
let player = "Stone";
let playerChoose = document.querySelector(".playerChoose");
playerOpt.forEach(function (opt) {
    opt.addEventListener("click", function () {
        clickSound.play();//options working :)
        if (start == true) {
            play.innerText = "GO";
            player = opt.innerText;
            let imgName = player;
            let imgP = document.querySelector(".playerChoose img");
            // setTimeout(img.setAttribute("src", `player${imgName}.jpg`), 1000);
            imgP.setAttribute("src", `player${imgName}.jpg`);

            console.log("player: ", player);
            randomOpt();
            check();
            scoreUpdation();
            win();
        }
    })
})

let check = function () {
    console.log("next");
    if (player == computer) {
        play.innerText = "TIE";
        draw.play();
        return;
    }
    else if (player == "Stone") {
        if (computer == "Paper") {
            play.innerText = "Computer +1";
            compWin.play();
        }
        else {
            points.play();
            play.innerText = "Player +1";
        }
        return;
    }
    else if (player == "Scissor") {
        if (computer == "Stone") {
            play.innerText = "Computer +1";
            compWin.play();
        }
        else {
            points.play();
            play.innerText = "Player +1";
        }
        return;
    }
    else if (player == "Paper") {
        if (computer == "Scissor") {
            play.innerText = "Computer +1";
            compWin.play();
        }
        else {
            points.play();
            play.innerText = "Player +1";
        }
        return;
    }
}

let compScore = document.querySelector(".compScore");
let playerScore = document.querySelector(".playerScore");
compScore.innerText = "0";
playerScore.innerText = "0";
let scoreUpdation = function () {
    if (play.innerText == "Player +1") {
        playerScore.innerText = parseInt(playerScore.innerText) + 1;
        console.log("Player Point: ", playerScore.innerText);
        return;
    }
    else if (play.innerText == "Computer +1") {
        compScore.innerText = parseInt(compScore.innerText) + 1;
        console.log("Computer Point: ", compScore.innerText);
        return;
    }
    else {
        return;
    }
}


function win() {
    if (compScore.innerText == "5") {
        looseSound.play();
        play.innerText = "You Lose !!!"
        document.querySelector(".game").style.display = "block";
        setTimeout(() => {
            document.querySelector(".game").style.display = "none";
        }, 4000)
        setTimeout(() => {
            play.innerText = "Play Again"
        }, 4000);

        start = false;

        setTimeout(() => {
            compScore.innerText = "0";
            playerScore.innerText = "0";
        }, 4000);
    }
    else if (playerScore.innerText == "5") {
        // setTimeout(() => {
        // }, 3000);
        play.innerText = "You Win !!!";
        winSound.play();
        document.querySelector(".game").style.display = "block";
        setTimeout(() => {
            document.querySelector(".game").style.display = "none";
        }, 4000)
        setTimeout(() => {
            play.innerText = "Play Again"
        }, 4000);
        start = false;

        setTimeout(() => {
            compScore.innerText = "0";
            playerScore.innerText = "0";
        }, 4000);
    }
    return;
}