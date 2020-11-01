export const NEW_SEARCH = 'NEW_SEARCH';

export const newSearch = () => {
  console.log('new search is happening');
  return { type: NEW_SEARCH };
};
