import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import reducer from 'reducers'

const EmptyOptions = {};
export default createStore(
    reducer,
    devToolsEnhancer(EmptyOptions)
);
