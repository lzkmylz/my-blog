// SET TEXT FILTER
export const setTitleFilter = (title = '') => (
  {
    type: 'SET_TITLE_FILTER',
    title,
  }
);

// SORT BY DATE
export const sortByDate = () => (
  {
    type: 'SORT_BY_DATE',
  }
);

// SORT BY AMOUNT
export const sortByReaders = () => (
  {
    type: 'SORT_BY_Readers',
  }
);

// SET START DATE
export const setStartDate = startDate => (
  {
    type: 'SET_START_DATE',
    startDate,
  }
);

// SET END DATE
export const setEndDate = endDate => (
  {
    type: 'SET_END_DATE',
    endDate,
  }
);
