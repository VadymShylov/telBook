export const getLoggedIn = state => state.auth.isLoggedIn;
export const getUserEmail = state => state.auth.user.email;
export const getUserName = state => state.auth.user.name;
export const getMustContats = state =>
  state.auth.user.email && !state.contacts.items;
