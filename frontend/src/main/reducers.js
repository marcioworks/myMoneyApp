import {combineReducers} from 'redux'
import DashBoardReducers from '../dashboard/dashboardReducers'
import TabReducer from '../commons/tabs/tabReducers'

const rootReducer = combineReducers({
    dashboard: DashBoardReducers,
    tab: TabReducer
})

export default rootReducer