import * as actionTypes from '../actions/types'

const reducer = (state = {}, action) => {
  const { deckTitle } = action;

  switch (action.type) {
    case actionTypes.RECEIVE_DECKS:
      const { decks } = action;
      return {
        ...state,
        ...decks,
      };
    case actionTypes.ADD_DECK:
      return {
        ...state,
        [deckTitle]: {
          title: deckTitle,
          questions: [],
        },
      };
    case actionTypes.ADD_CARD:
      const { question, answer } = action;
      return {
        ...state,
        [deckTitle]: {
          ...state[deckTitle],
          questions: [
            ...state[deckTitle]['questions'],
            {
              question: question,
              answer: answer,
            },
          ],
        },
      };
    default:
      return state;
  }
}

export default reducer;
