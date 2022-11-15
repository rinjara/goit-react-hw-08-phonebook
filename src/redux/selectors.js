export const selectContacts = state => state.contacts;

export const selectFilter = state => state.filter;

export const selectFilteredContacts = state => {
  const friends = selectContacts(state);
  const filterFriends = selectFilter(state).toLowerCase();

  return friends.filter(friend =>
    friend.name.toLowerCase().includes(filterFriends)
  );
};
