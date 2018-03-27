import * as actionType from './types';

export const receiveDecks = (decks) => ({
  type: actionType.RECEIVE_DECKS,
  decks,
});

export const addDeck = (deckTitle) => ({
  type: actionType.ADD_DECK,
  deckTitle,
});

export const addCard = (deckTitle, question, answer) => ({
  type: actionType.ADD_CARD,
  deckTitle,
  question,
  answer,
});
