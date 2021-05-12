const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Game', function() {

  it('should be a function', function() {
    const game = new Game();
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  it('should start with no currentRound', function() {
    const game = new Game();
    expect(game.currentRound).to.deep.equal(null);
  });

  it('should be able to start a new round', function() {
    const game = new Game();
    game.start();
    expect(game.currentRound).to.be.an.instanceof(Round);
  });
})
