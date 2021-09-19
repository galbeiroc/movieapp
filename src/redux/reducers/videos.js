import { SET_CATEGORY_LIST, SET_SUGGESTION_LIST } from '../actions/types';

const initalState = {
  categoryList: [],
  suggestionList: [],
};

function videos(state = initalState, action) {
  switch(action.type) {
    case SET_SUGGESTION_LIST: {
      return { ...state, suggestionList: action.suggestionList };
    }
    case SET_CATEGORY_LIST: {
      return { ...state, categoryList: action.categoryList };
    }
    default:
      return state
  }
}

export default videos;
