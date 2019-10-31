import { combineReducers } from 'redux'
import menuLayout from './menuLayout'
import contactFormInfo from './contactFormInfo'

const reducer = combineReducers({
    menuLayout,
    contactFormInfo
})

export default reducer