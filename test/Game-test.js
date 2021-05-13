const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');

describe('Game', function() {

  let game;
  
  beforeEach('set up', function() {
    game = new Game();
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should start with no currentRound', function() {
    expect(game.currentRound).to.deep.equal(null);
  });

  it('should be able to start a new round', function() {
    game.start();
    expect(game.currentRound).to.be.an.instanceof(Round);
  });
});
