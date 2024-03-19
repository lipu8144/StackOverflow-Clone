import { combineReducers} from 'redux'
import authReducer from './auth'
import currentUserReducer from './currentUser'
import usersReducer from './users'
import questionsReducer from './questions'


export default combineReducers({
  authReducer,
  currentUserReducer,
  questionsReducer,
  usersReducer,
});