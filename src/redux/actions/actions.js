import { SET_CATEGORY_LIST, SET_SUGGESTION_LIST } from './types';

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
