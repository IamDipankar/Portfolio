var score1 = 0;
var score2 = 0;

document.querySelector("#sc1").innerHTML = score1;
document.querySelector("#sc2").innerHTML = score2;

function rollDice(){
    var player1 = Math.round(Math.random()*5 + 1);

    var player2 = Math.round(Math.random()*5 + 1);

    // document.querySelector("#d1 .dice-title").innerHTML = prompt("Give player 1 name");
    // document.querySelector("#d2 .dice-title").innerHTML = prompt("Give player 2 name");

    console.log("Player 1 : " + player1);
    console.log("Player 2 : " + player2);

    var winner = (player1 === player2) ? 0 : player1 > player2 ? 1 : 2;

    console.log("winner : " + winner);

    var winningMsg;

    if (winner === 1){
        winningMsg = "🚩Player 1 won!";
        score1 += 1;
        document.querySelector("#sc1").innerHTML = score1;
    }else if (winner === 2){
        winningMsg = "Player 2 won!🚩";
        score2 += 1;
        document.querySelector("#sc2").innerHTML = score2;
    }else{
        winningMsg = "🚩It was an draw.🚩";
    }

    document.querySelector("h1").innerHTML = winningMsg;

    document.querySelector("#d1 img").setAttribute("src", "./images/dice" + player1 + ".png");

    document.querySelector("#d2 img").setAttribute("src", "./images/dice" + player2 + ".png");
}