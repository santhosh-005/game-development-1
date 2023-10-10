// Iteration 2: Generate 2 random number and display it on the screen
const number1=document.getElementById("number1")
const number2=document.getElementById("number2")

const timing=document.getElementById("timer")

const buttons=document.getElementById("buttons")
buttons.addEventListener('click',handleOperations);

var num1;
var num2;

function displayNumber(){
    num1=randomNumber();
    num2=randomNumber();
    number1.innerText=num1;
    number2.innerText=num2;
}
displayNumber();

function randomNumber(){
    return Math.floor(Math.random()*100)+1
}

// Iteration 3: Make the options button functional

let score=0;
console.log(num1)
console.log(num2)

function handleOperations(e){
    if(e.target.id=="greater-than" && num1>num2){
        score++
        displayNumber();
        timer=5
    }else if(e.target.id=="lesser-than" && num1<num2){
        score++
        displayNumber();
        timer=5
    }else if(e.target.id=="equal-to" && num1==num2){
        score++
        displayNumber();
        timer=5
    }else{
        console.log(false)
        gameOver();
    }
    
}
function gameOver(){
    localStorage.setItem("total",score)
    location.href='gameover.html'
}



// Iteration 4: Build a timer for the game

setInterval(showTime,1000)
let timer=5

function showTime(){
    if(timer==0){
        gameOver()
    }else{
        timer--
        timing.innerText=timer
    }
}
