import { createStore, combineReducers } from 'redux';
import articalReducer from '../reducers/articals';
import filterReducer from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      articals: articalReducer,
      filters: filterReducer,
    }),
  );

  return store;
};
