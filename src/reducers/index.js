import { combineReducers } from 'redux'
import heads from './heads'
import grid from './grid'

export default combineReducers({
  grid,
  heads
})