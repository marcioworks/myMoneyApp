import {combineReducers} from 'redux'
import DashBoardReducers from '../dashboard/dashboardReducers'
import TabReducers from '../commons/tabs/tabReducers'

const rootReducer = combineReducers({
    dashboard: DashBoardReducers,
    tab: TabReducers
})

export default rootReducer