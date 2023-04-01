class Die {
    constructor(){
        this.sides = 6;
    }

    roll(){
        let value = Math.floor((Math.random() * this.sides) + 1);
        return value;
    }

    display( value ){
        return `dice-${value}.svg`;
    }
}