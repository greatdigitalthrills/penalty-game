let shooterChoice = null;
let goalkeeperChoice = null;
let player1Score = 0;
let player2Score = 0;
let round = 1;
const maxRounds = 5;

function setShooter(choice) {
    shooterChoice = choice;
}

function setGoalkeeper(choice) {
    goalkeeperChoice = choice;
}

function shoot() {

    if (!shooterChoice || !goalkeeperChoice) {
        alert("Her iki oyuncu da seçim yapmalı!");
        return;
    }

    if (shooterChoice === goalkeeperChoice) {
        document.getElementById("result").innerText = "🧤 Kaleci kurtardı!";
        player2Score++;
    } else {
        document.getElementById("result").innerText = "⚽ GOL!";
        player1Score++;
    }

    document.getElementById("score").innerText =
        "Skor: " + player1Score + " - " + player2Score;

    round++;

    document.getElementById("round").innerText =
        "Tur: " + round + " / " + maxRounds;

    shooterChoice = null;
    goalkeeperChoice = null;

    if (round > maxRounds) {
        endGame();
    }
}

function endGame() {

    let message;

    if (player1Score > player2Score) {
        message = "🏆 Oyuncu 1 Kazandı!";
    } else if (player2Score > player1Score) {
        message = "🏆 Oyuncu 2 Kazandı!";
    } else {
        message = "🤝 Berabere!";
    }

    alert(message);

    // Reset
    player1Score = 0;
    player2Score = 0;
    round = 1;

    document.getElementById("score").innerText = "Skor: 0 - 0";
    document.getElementById("round").innerText = "Tur: 1 / 5";
    document.getElementById("result").innerText = "";
}
