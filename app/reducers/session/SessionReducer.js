const initialState = {
  isAuthenticated: false,
  name: '',
  email: '',
  code: ''
}
import {AUTH_FAIL, AUTH_SUCCESS} from '../../constants/ActionTypes';

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: action.exist,
        name: action.name,
        email: action.email
      }
    case AUTH_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        email: action.email,
        code: action.code
      }
    default:
      return state
  }
}

export default authReducer;
