import moment from 'moment';
// FILTERS REDUSER

const filterReduserDefaultState = {
  title: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month'),
};

const filterReduser = (state = filterReduserDefaultState, action) => {
  switch (action.type) {
    case 'SET_TITLE_FILTER':
      return {
        ...state,
        title: action.title,
      };
    case 'SORT_BY_READERS':
      return {
        ...state,
        sortBy: 'readers',
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date',
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate,
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate,
      };

    default:
      return state;
  }
};

export default filterReduser;
