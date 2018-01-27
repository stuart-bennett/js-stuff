import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import reducer from 'reducers/combinedReducers'

const EmptyOptions = {};
export default createStore(
    reducer,
    devToolsEnhancer(EmptyOptions)
);
