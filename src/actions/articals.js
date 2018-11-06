// ACTIONS OF ARTICALS

export const addArtical = ({
  title = '',
  summary = '',
  createdAt = '',
  id = '',
  totalReaders = 0,
} = {}) => (
  {
    type: 'ADD_ARTICAL',
    artical: {
      title,
      summary,
      createdAt,
      id,
      totalReaders,
    },
  }
);

export const removeArtical = ({ id } = {}) => (
  {
    type: 'REMOVE_ARTICAL',
    id,
  }
);

export const editArtical = (id, updates) => (
  {
    type: 'EDIT_ARTICAL',
    id,
    updates,
  }
);

export const setArticals = articals => (
  {
    type: 'SET_ARTICALS',
    articals,
  }
);
