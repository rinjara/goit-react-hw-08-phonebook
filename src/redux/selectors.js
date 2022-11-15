export const selectContacts = state => state.contacts;

export const selectFilter = state => state.filter.value;

export const selectFilteredContacts = state => {
  const contacts = selectContacts(state);
  const filterFriends = selectFilter(state).toLowerCase();

  const visibleFriends = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterFriends)
  );
  return visibleFriends;
};
