import { createStore, combineReducers } from 'redux';
import articalReducer from '../reducers/articals';

export default () => {
  const store = createStore(
    combineReducers({
      artical: articalReducer,
    }),
  );

  return store;
};
