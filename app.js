'use strict';
 /*jshint esversion: 6 */

/* ========== Model ========== */
const model = {
  cards: [],
  playerDeck: [],
  comp0: {
    deck: [],
    scoreCard: []
  },

  comp1: {
    deck: [],
    scoreCard: []
  },

  comp2: {
    deck: [],
    scoreCard: []
  },

  init: function() {
    class Card {
      constructor(name, type, css) {
        this.name = name;
        this.type = type;
        this.css = css;
      }
    }

    const card0 = new Card('Coco Creamsicle', 'character', 'orange');
    const card1 = new Card('Flash Magoo', 'character', 'red');
    const card2 = new Card('Snow McFluffins', 'character', 'white');
    const card3 = new Card('Bobby Big Fluff', 'character', 'blue');
    const card4 = new Card('Precious Cuddlestein', 'character', 'purple');
    const card5 = new Card('Iggy Small Stuffin', 'character', 'green');
    const card6 = new Card('Axe', 'weapon', 'weapon');
    const card7 = new Card('Knife', 'weapon', 'weapon');
    const card8 = new Card('Vase', 'weapon', 'weapon');
    const card9 = new Card('Poison', 'weapon', 'weapon');
    const card10 = new Card('Gun', 'weapon', 'weapon');
    const card11 = new Card('Rope', 'weapon', 'weapon');
    const card12 = new Card('Bedroom', 'room', 'room');
    const card13 = new Card('Honey Cupboard', 'room', 'room');
    const card14 = new Card('Garage', 'room', 'room');
    const card15 = new Card('Dining Romm', 'room', 'room');
    const card16 = new Card('Living Room', 'room', 'room');
    const card17 = new Card('Office', 'room', 'room');
    const card18 = new Card('Basement', 'room', 'room');

    this.cards.push(card0, card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13, card14, card15, card16, card17, card18);

    this.comp0.scoreCard.push(...this.cards);
    this.comp1.scoreCard.push(...this.cards);
    this.comp2.scoreCard.push(...this.cards);
  }
};

/* ========== Controller ==========*/
const controller = {
  init: function() {
    model.init();
  }
};


controller.init();
