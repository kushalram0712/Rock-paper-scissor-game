let mode = '';
let p1Choice = '';
let isPlayer1Turn = true;

function startGame(selectedMode) {
    mode = selectedMode;
    document.getElementById('menu').style.display = 'none';
    document.getElementById('game-ui').style.display = 'block';
}

function handleInput(choice) {
    if (mode === 'vs-comp') {
        const comp = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
        determineWinner(choice, comp);
    } else {
        if (isPlayer1Turn) {
            p1Choice = choice;
            isPlayer1Turn = false;
            document.getElementById('turn-info').innerText = "Player 2's turn";
        } else {
            determineWinner(p1Choice, choice);
            isPlayer1Turn = true;
            document.getElementById('turn-info').innerText = "Player 1's turn";
        }
    }
}

function determineWinner(c1, c2) {
    let result = "";
    if (c1 === c2) result = `Tie! Both chose ${c1}`;
    else if ((c1==='rock'&&c2==='scissors') || (c1==='paper'&&c2==='rock') || (c1==='scissors'&&c2==='paper')) 
        result = `Winner: Player 1 (${c1} vs ${c2})`;
    else 
        result = `Winner: Player 2/CPU (${c2} vs ${c1})`;
    
    document.getElementById('result').innerText = result;
}

function resetGame() {
    // 1. Reset variables
    p1Score = 0;
    p2Score = 0;
    isPlayer1Turn = true;
    
    // 2. Update the UI text
    document.getElementById('p1-score').innerText = "0";
    document.getElementById('p2-score').innerText = "0";
    document.getElementById('result').innerText = "Choose your weapon!";
    document.getElementById('turn-info').innerText = "Player 1's turn";

    // 3. Toggle visibility (The most important part)
    document.getElementById('game-ui').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
    
    console.log("Game reset, returning to menu.");
}
