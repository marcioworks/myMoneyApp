import { combineReducers } from 'redux'
import { reducer as FormReducer } from 'redux-form'
import { reducer as ToastrReducer } from 'react-redux-toastr'
import DashBoardReducers from '../dashboard/dashboardReducers'
import TabReducers from '../commons/tabs/tabReducers'
import BillingCycleReducers from '../billingCycle/billingCycleReducers'

const rootReducer = combineReducers({
    dashboard: DashBoardReducers,
    tab: TabReducers,
    billingCycles: BillingCycleReducers,
    form: FormReducer,
    toastr: ToastrReducer
})

export default rootReducer