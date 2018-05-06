import { combineReducers } from 'redux'
import homeReducer from './app/home/duck/reducers'
import profileReducer from './app/profile/duck/reducers'

const rootReducer = combineReducers({
  home: homeReducer,
  profile: profileReducer,
})

export default rootReducer
