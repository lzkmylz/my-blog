import moment from 'moment';

export default (articals, {
  text,
  sortBy,
  startDate,
  endDate,
}) => (articals.filter((artical) => {
  const createdAtMoment = moment(artical.createdAt);
  const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
  const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
  const textMatch = artical.description.toLowerCase().includes(text.toLowerCase());

  return startDateMatch && endDateMatch && textMatch;
}).sort((a, b) => {
  if (sortBy === 'date') {
    return a.createdAt < b.createdAt ? 1 : -1;
  }
  if (sortBy === 'readers') {
    return a.totalReaders < b.totalReaders ? 1 : -1;
  }
  return true;
})
);
