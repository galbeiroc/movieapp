import { SET_CATEGORY_LIST, SET_SUGGESTION_LIST, SET_SELECTED_MOVIE } from '../actions/types';

const initalState = {
  categoryList: [],
  suggestionList: [],
  movie: {},
};

function videos(state = initalState, action) {
  switch(action.type) {
    case SET_SUGGESTION_LIST: {
      return { ...state, suggestionList: action.suggestionList };
    }
    case SET_CATEGORY_LIST: {
      return { ...state, categoryList: action.categoryList };
    }
    case SET_SELECTED_MOVIE: {
      return { ...state, movie: action.movie }
    }
    default:
      return state
  }
}

export default videos;
