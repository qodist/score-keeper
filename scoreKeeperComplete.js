var p1Button = document.querySelector("#p1Button");
var p2Button = document.getElementById("p2Button");
var resetButton = document.querySelector("#resetButton");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var p1SetsDisplay = document.querySelector("#p1SetsDisplay");
var p2SetsDisplay = document.querySelector("#p2SetsDisplay");
var numInputGames = document.querySelector("#changeGames");
var numInputSets = document.querySelector("#changeSets");
var winningScoreDisplay = document.querySelector("#winningScoreDisplay");
var p1Score = 0;
var p2Score = 0;
var p1Sets = 0;
var p2Sets = 0;
var gameOver = false;
var gamesScore = 0;
var winningScore = 0;

p1Button.addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
        if(p1Score === gamesScore){
            p1Score = 0;
            p2Score = 0;
            p1Sets ++;
            p2Display.textContent = p2Score;
            p1SetsDisplay.textContent = p1Sets;
        }
        if(p1Sets === winningScore){
            gameOver = true;
            p1SetsDisplay.classList.add("winner");
        }
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        if(p2Score === gamesScore){
            p1Score = 0;
            p2Score = 0;
            p2Sets ++;
            p1Display.textContent = p1Score;
            p2SetsDisplay.textContent = p2Sets;
        }
        if(p2Sets === winningScore){
            gameOver = true;
            p2SetsDisplay.classList.add("winner");
        }
        p2Display.textContent = p2Score;
    }
});

resetButton.addEventListener("click", function(){
    reset();
});

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Sets = 0;
    p2Sets = 0;
    p1Display.textContent = p1Score;
    p1SetsDisplay.textContent = p1Sets;
    p2Display.textContent = p2Score;
    p2SetsDisplay.textContent = p2Sets;
    p1SetsDisplay.classList.remove("winner");
    p2SetsDisplay.classList.remove("winner");
    numInputGames.value = "";
    numInputSets.value = "";
    gameOver = false;
}

numInputGames.addEventListener("change", function(){
    gamesScore = Number(numInputGames.value);
    reset();
});

numInputSets.addEventListener("change", function(){
    winningScoreDisplay.textContent = numInputSets.value;
    winningScore = Number(numInputSets.value);
    reset();
});