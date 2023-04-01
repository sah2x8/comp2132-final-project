class Player{
    constructor( name ){
        this.name = name;
        this.die1 = new Die();
        this.die2 = new Die();
        this.die1Value = 1;
        this.die2Value = 1;
        this.totalScore = 0;
    }

    addScore( roundScore ){
        this.totalScore += roundScore;
    }

    display(){
        const die1Img = `${this.name}-die-1`;
        const die2Img = `${this.name}-die-2`;

        $playingField.append(`
            <div class="${this.name} player-box">
                <h2>${this.name}</h2>

                <div class="dice">
                    <img class="dice-image ${die1Img}" src="${diceImgPath + this.die1.display(this.die1Value)}">
                    <img class="dice-image ${die2Img}" src="${diceImgPath + this.die2.display(this.die2Value)}">
                </div>

                <div class="score">
                    <p>Score this Round: <span class="round"></span></p>
                    <p>Total Score: <span class="total"></span></p>
                </div>
            </div>
        `);
    }
}
