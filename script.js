function play(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const compChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (userChoice === compChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === 'rock' && compChoice === 'scissors') ||
        (userChoice === 'paper' && compChoice === 'rock') ||
        (userChoice === 'scissors' && compChoice === 'paper')
    ) {
        result = "You win! Computer chose " + compChoice;
    } else {
        result = "You lose! Computer chose " + compChoice;
    }
    document.getElementById('result').innerText = result;
}
