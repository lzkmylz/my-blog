// ACTIONS OF ARTICALS

export const addArtical = artical => (
  {
    type: 'ADD_ARTICAL',
    artical,
  }
);

export const removeArtical = ({ id } = {}) => (
  {
    type: 'REMOVE_ARTICAL',
    id,
  }
);
