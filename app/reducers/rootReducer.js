/* deoendencies */
import { combineReducers } from 'redux';
import session from './session/SessionReducer';
import {routerReducer} from 'react-router-redux'

//import reducer
import search from './search/searchReducer';
/* const */
const main = combineReducers({session, search});
const _allReducer = combineReducers({routerReducer, main});

/* export default */
export default _allReducer;
