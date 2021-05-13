# FlashCards

## Abstract

In this project, my goal was to complete a partially-constructed application that would simulate a set of flashcards, playable completely through the command line. A major focus of this project was to build the codebase using TDD, and writing a test suite from scratch to drive the implementation of code. I also focused on adhering to SRP and DRY principles while writing code.

The project spec can be found [here](https://frontend.turing.edu/projects/flash-cards.html)!

![Flashcards](https://user-images.githubusercontent.com/77205456/118198840-b181ed00-b41f-11eb-91c9-d45853122aec.gif)

## Technologies used

- Mocha
- Chai
- Vanilla JavaScript

## Setup/Installation instructions

Clone down the repo:

```bash
git clone git@github.com:LKessell/flashcards.git
```

Once you have cloned the repo, `cd` into the directory and install the library dependencies. Run:

```bash
npm install
```

Running `node index.js` from the root of the project should start the game!

Select a guess using the up/down arrow keys, and press Enter to submit your guess or advance to the next card.
