import {combineReducers} from 'redux'
import DashBoardReducers from '../dashboard/dashboardReducers'
import TabReducers from '../commons/tabs/tabReducers'
import BillingCycleReducers from '../billingCycle/billingCycleReducers'

const rootReducer = combineReducers({
    dashboard: DashBoardReducers,
    tab: TabReducers,
    billingCycles: BillingCycleReducers
})

export default rootReducer