let p1Score = parseInt(localStorage.getItem('p1Score')) || 0;
let p2Score = parseInt(localStorage.getItem('p2Score')) || 0;
let history = [];

function updateUI() {
    document.getElementById('p1-score').innerText = p1Score;
    document.getElementById('p2-score').innerText = p2Score;
    localStorage.setItem('p1Score', p1Score);
    localStorage.setItem('p2Score', p2Score);
}

function playRound(c1, c2) {
    let result = "";
    if (c1 === c2) result = "It's a tie!";
    else if ((c1==='rock'&&c2==='scissors')||(c1==='paper'&&c2==='rock')||(c1==='scissors'&&c2==='paper')) {
        p1Score++; result = `Player 1 wins! (${c1} > ${c2})`;
    } else {
        p2Score++; result = `Player 2/CPU wins! (${c2} > ${c1})`;
    }
    
    // Add to history
    history.unshift(result);
    if (history.length > 3) history.pop();
    document.getElementById('history').innerHTML = history.join('<br>');
    
    document.getElementById('result').innerText = result;
    document.getElementById('result').classList.add('animate');
    setTimeout(() => document.getElementById('result').classList.remove('animate'), 300);
    updateUI();
}

// Ensure you call updateUI() on page load
updateUI();
