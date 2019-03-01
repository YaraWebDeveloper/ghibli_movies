/* import reducer */
import {
  LIST_FILMS,
  CHANGE_IMAGE,
  UPDATE_TERM
} from '../../constants/ActionTypes';

// intial state
var initial_state = {
  films: {},
  pureFilms: [],
  term: ''
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
    case CHANGE_IMAGE:
      // search api
      return {
        ...state,
        films: {
          ...state.films,
          [action.id]: {
            ...state.films[action.id],
            img: action.image,
            banner: action.banner,
          }
        },
      }
      break;
    case UPDATE_TERM:
      // search api
      return {
        ...state,
        term: action.term
      };
      break;
    default:
      return state;
  }
}
export default searchReducer;
