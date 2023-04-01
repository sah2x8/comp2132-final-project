const player01 = new Player("You");
const player02 = new Player("Opponent");

let popUpOpacity = 0;

let gameOver    = false;
let roundNumber = 0;

player01.display();
player02.display();

$rollBtn.click(function(e){
    if(!gameOver){
        rollDice();
        updateScore(player01);
        updateScore(player02);
    }
    
    roundNumber++;
    if(roundNumber == 3){
        if(player01.totalScore == player02.totalScore){
            $('h2').append(" - It's a tie!");
        } else {
            getWinner(player01);
            getWinner(player02);
        }

        gameOver = true;
    }
});

$newGameBtn.click(function(e){
    location.reload();
});

$howToPlayBtn.click(function(e){
    requestAnimationFrame(fadeIn());
});

$closeBtn.click(function(e){
    $popUp.css("opacity", 0);
});

function rollDice(){
    player01.die1Value = player01.die1.roll();
    player01.die2Value = player01.die2.roll();
    player02.die1Value = player01.die1.roll();
    player02.die2Value = player01.die2.roll();
}

function calculateRound(player){
    let roundScore;
    if (player.die1Value == 1 || player.die2Value == 1){
        roundScore = 0;
    } else if (player.die1Value == player.die2Value){
        roundScore = 2 * (player.die1Value + player.die2Value);
    } else {
        roundScore = player.die1Value + player.die2Value;
    }

    player.totalScore += roundScore;

    return roundScore;
}

function updateScore(player){
    let roundScore = calculateRound(player);
    $(`img.${player.name}-die-1`).attr("src", `${diceImgPath + player.die1.display(player.die1Value)}`);
    $(`img.${player.name}-die-2`).attr("src", `${diceImgPath + player.die2.display(player.die2Value)}`);
    $(`div.${player.name} span.round`).text(roundScore);
    $(`div.${player.name} span.total`).text(player.totalScore)
}

function getWinner(player){
    if(player.totalScore == Math.max(player01.totalScore, player02.totalScore)){
        $(`div.${player.name} h2`).append(" - Winner!!!");
    }
}

function fadeIn(){
    popUpOpacity += .05;
    if(popUpOpacity <= 1){
        $popUp.css("opacity", popUpOpacity);
        requestAnimationFrame( fadeIn );
    }else{
        $popUp.css("opacity", 1);
    }   
}