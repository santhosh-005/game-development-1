// Iteration 5: Store the player score and display it on the game over screen
const score_board=document.getElementById("score-board")
const playAgain=document.getElementById("play-again-button")

score_board.innerText=localStorage.getItem('total')

playAgain.onclick=function(){
    location.href="index.html"
}