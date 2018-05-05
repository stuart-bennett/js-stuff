import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from 'reducers/combinedReducers'
import thunk from 'redux-thunk'

export default createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);
