const SET_MOVIES_LIST = 'SET_MOVIES_LIST';
const SET_CATEGORY_LIST = 'SET_CATEGORY_LIST';

function videos(state = {}, action) {
  switch(action.type) {
    case SET_MOVIES_LIST: {
      return { ...state, ...action.payload };
    }
    case SET_CATEGORY_LIST: {
      return { ...state, ...action.payload };
    }
    default:
      return state
  }
}

export default videos;
