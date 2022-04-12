import {createStore, combineReducers} from 'redux'

import {composeWithDevTools} from 'redux-devtools-extension'
import {listGroupsReducer} from './listGroupsReducer'
import {listLinksReducer} from './listLinksReducer'

const rootReducer = combineReducers({
    listGroups: listGroupsReducer,
    listLinks: listLinksReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())
