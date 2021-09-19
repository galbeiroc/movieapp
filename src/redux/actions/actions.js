import { SET_CATEGORY_LIST, SET_SUGGESTION_LIST, SET_SELECTED_MOVIE } from './types';

export function setCategory(categoryList) {
  return {
    type: SET_CATEGORY_LIST,
    categoryList,
  }
};

export function setSuggestion(suggestionList) {
  return  {
    type: SET_SUGGESTION_LIST,
    suggestionList,
  }
};

export function setSelectedMovie(movie) {
  return {
    type: SET_SELECTED_MOVIE,
    movie,
  }
};
