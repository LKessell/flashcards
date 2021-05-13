const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  let card;
  let turn;

  beforeEach('set up', function() {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn = new Turn('object', card);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should take the user\'s guess as a string as an argument', function() {
    expect(turn.guess).to.be.a('string');
  });

  it('should take the current card object as an argument', function() {
    expect(turn.card).to.be.an.instanceof(Card);
  });

  it('should return the guess', function() {
    expect(turn.returnGuess()).to.equal('object');
  });

  it('should return the current card', function() {
    expect(turn.returnCard()).to.equal(card);
  });

  it('should return true if the guess is correct', function() {
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should return false if the guess is incorrect', function() {
    turn = new Turn('array', card);

    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should tell the user when they guess correctly', function() {
    expect(turn.giveFeedback()).to.equal('correct!');
  });

  it('should tell the user when they guess incorrectly', function() {
    turn = new Turn('array', card);
    
    expect(turn.giveFeedback()).to.equal('incorrect!');
  });
});
