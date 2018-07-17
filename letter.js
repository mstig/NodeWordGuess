var Letter = function (letter) {
    this.letter = letter;
    this.guessed = false;
    this.checkGuess = function (guess) {
        if (guess === this.letter) {
            this.guessed = true;
        }
    }

    this.display = function() {
        if(guessed){
            return(this.letter);
        }
        else{
            return("_");
        }
    }
}

module.exports = Letter;