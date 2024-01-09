import {combineReducers} from 'redux'
import {ProuductReducer} from './ProuductReducer'
import { UserReducer } from './UserReduser'


export default combineReducers({
    ProuductState:ProuductReducer,
    userState:UserReducer,
})