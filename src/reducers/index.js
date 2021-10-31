import {combineReducers} from 'redux'
import loginReducer from './loginReducer';
import projectsReducer from './projectsReducer';
 const rootReducer = combineReducers({
project_data:projectsReducer,
isLogged :loginReducer
})
export default rootReducer