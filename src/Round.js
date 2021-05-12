const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck[this.turns];
  }
  takeTurn(guess) {
    const currentCard = this.returnCurrentCard();
    const turn = new Turn(guess, currentCard);

    this.turns++;

    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(currentCard.id);
    }

    return turn.giveFeedback();
  }
  calculatePercentCorrect() {
    const percent = Math.floor(((this.turns - this.incorrectGuesses.length) / this.turns) * 100);
    return percent;
  }
}

module.exports = Round;
