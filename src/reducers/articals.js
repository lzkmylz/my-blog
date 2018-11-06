// ARTICALS REDUCERS

const articalReducerDefaultState = [];

const articalReducer = (state = articalReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_ARTICAL':
      return [
        ...state,
        action.artical,
      ];
    case 'REMOVE_ARTICAL':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_ARTICAL':
      return state.map((artical) => {
        if (artical.id === action.id) {
          return [
            ...artical,
            ...action.update,
          ];
        }
        return true;
      });
    case 'SET_ARTICAL':
      return action.articals;
    default:
      return state;
  }
};

export default articalReducer;
