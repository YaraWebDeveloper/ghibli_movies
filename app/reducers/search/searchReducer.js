/* import reducer */
import {LIST_FILMS} from '../../constants/ActionTypes';

// intial state
var initial_state = {
  films: {},
  pureFilms: []
}

/* reducer */
var searchReducer = (state = initial_state, action) => {
  switch (action.type) {
    case LIST_FILMS:
      // search api
      return {
        ...state,
        films: action.films,
        pureFilms: action.pureFilms
      }
      break;
    default:
      return state;
  }
}
export default searchReducer;
