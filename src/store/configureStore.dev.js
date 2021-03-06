import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers/rootReducer';
import reduxImmutabelStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  return createStore (
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, reduxImmutabelStateInvariant()),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}
