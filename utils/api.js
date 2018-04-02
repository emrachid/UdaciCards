import { AsyncStorage } from 'react-native'

const DECKS_STORAGE_KEY = 'UdaciCards:decks'

const initStorageData = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
};

export const getDecks = () => (
  AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((results) => {
      if (results === null) {
        AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(initStorageData));
        return initStorageData;
      }
      return JSON.parse(results);
    })
);

export const getDeck = () => {};

export const saveDeckTitle = (title) => {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [title]: {
      title,
    }
  }));
};

export const addCardToDeck = (title, questions) => {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [title]: {
      questions,
    }
  }));
};
