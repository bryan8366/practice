let computeNum = 0;
let playButton = document.getElementById("play_button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history = []

playButton.addEventListener("click",play);
resetButton.addEventListener("click",reset);
document.addEventListener("keypress", handleKeyPress);
userInput.addEventListener('focus',()=>{userInput.value=""})

function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100)+1;
    console.log("Correct",computerNum);
}

function handleKeyPress(event) {
        if (event.key == 'Enter') {
            play();
        }
    }

function play(){
    let userValue = userInput.value    

    // validations //
    if (userValue != "" && (1 > userValue || userValue > 100)){
        resultArea.innerHTML = "Please entre the value from 1 to 100 "
        ruturn;
    }

    if (userValue == ""){
        resultArea.innerHTML = "Please entre the number "
        ruturn;
    }

    if (history.includes(userValue)){
        resultArea.textContent="Already entered. Try other number."
        return;
    }


    chances --;
    chanceArea.textContent = `remaing chances: ${chances}`

    if (userValue < computerNum){
        resultArea.innerHTML = "Up!"
        console.log("Up!")
    }else if(userValue > computerNum){
        resultArea.textContent = "Down!"
        console.log("Down!")
    }else{
        resultArea.textContent = "Correct!"
        console.log("Correct!")
        playButton.disabled = true
    }

    history.push(userValue)
    console.log(history)
    

    if (chances <1) {
        gameOver = true;
    }

    if (gameOver == true){
        playButton.disabled = true
        resultArea.textContent = "Game Over!"
    }
}

function reset(){
    userInput.value = "";
    pickRandomNum();
    gameOver = false;
    playButton.disabled = false;
    resultArea.innerHTML = "Result Shown Here";
    chances = 5;
    chanceArea.textContent = `remaing chances: ${chances}`;
}

pickRandomNum();