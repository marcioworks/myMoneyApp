import {combineReducers} from 'redux'
import DashBoardReducers from '../dashboard/dashboardReducers'

const rootReducer = combineReducers({
    dashboard: DashBoardReducers
})

export default rootReducer