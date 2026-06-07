let mode = ''; // 'vs-comp' or 'local'
let p1Choice = '';
let p1Score = 0, p2Score = 0;
let isPlayer1Turn = true;

function startGame(selectedMode) {
    mode = selectedMode;
    document.getElementById('menu').style.display = 'none';
    document.getElementById('game-ui').style.display = 'block';
}

function handleInput(choice) {
    if (mode === 'vs-comp') {
        playRound(choice, ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)]);
    } else if (mode === 'local') {
        if (isPlayer1Turn) {
            p1Choice = choice;
            isPlayer1Turn = false;
            document.getElementById('turn-info').innerText = "Player 2's turn";
        } else {
            playRound(p1Choice, choice);
            isPlayer1Turn = true;
            document.getElementById('turn-info').innerText = "Player 1's turn";
        }
    }
}

function playRound(c1, c2) {
    let result = "";
    if (c1 === c2) result = "It's a tie!";
    else if ((c1==='rock'&&c2==='scissors')||(c1==='paper'&&c2==='rock')||(c1==='scissors'&&c2==='paper')) {
        p1Score++;
        result = `Player 1 wins! (${c1} vs ${c2})`;
    } else {
        p2Score++;
        result = `Player 2/CPU wins! (${c2} vs ${c1})`;
    }
    document.getElementById('p1-score').innerText = p1Score;
    document.getElementById('p2-score').innerText = p2Score;
    document.getElementById('result').innerText = result;
}

function resetGame() {
    p1Score = 0; p2Score = 0;
    document.getElementById('p1-score').innerText = 0;
    document.getElementById('p2-score').innerText = 0;
    document.getElementById('menu').style.display = 'block';
    document.getElementById('game-ui').style.display = 'none';
}
