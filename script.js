let mode = "pvp";
let playerScore = 0;
let cpuScore = 0;
let round = 1;
let maxRounds = 5;

const ball = document.getElementById("ball");
const keeper = document.getElementById("keeper");

const goalSound = new Audio("goal.mp3");
const saveSound = new Audio("save.mp3");

function setMode(selected){
    mode = selected;
    alert("Mod: " + (mode === "pvp" ? "2 Kişilik" : "Bilgisayara Karşı"));
}

function shoot(direction){

    let keeperDirection;

    if(mode === "cpu"){
        const dirs = ["left","center","right"];
        keeperDirection = dirs[Math.floor(Math.random()*3)];
    } else {
        keeperDirection = prompt("Kaleci yön seçsin (left, center, right)");
    }

    animateShot(direction);
    animateKeeper(keeperDirection);

    setTimeout(()=>{
        if(direction === keeperDirection){
            cpuScore++;
            saveSound.play();
            alert("Kurtarış!");
        } else {
            playerScore++;
            goalSound.play();
            alert("GOOOOL!");
        }

        updateScore();
        resetPositions();

    },600);
}

function animateShot(dir){
    if(dir === "left") ball.style.left = "50px";
    if(dir === "center") ball.style.left = "140px";
    if(dir === "right") ball.style.left = "230px";
    ball.style.bottom = "150px";
}

function animateKeeper(dir){
    if(dir === "left") keeper.style.left = "30px";
    if(dir === "center") keeper.style.left = "120px";
    if(dir === "right") keeper.style.left = "210px";
}

function resetPositions(){
    setTimeout(()=>{
        ball.style.left = "140px";
        ball.style.bottom = "0";
        keeper.style.left = "120px";
    },500);
}

function updateScore(){
    document.getElementById("score").innerText =
    "Skor: " + playerScore + " - " + cpuScore;
}
document.addEventListener("keydown", function(e){
    if(e.key === "a") shoot("left");
    if(e.key === "s") shoot("center");
    if(e.key === "d") shoot("right");
});
