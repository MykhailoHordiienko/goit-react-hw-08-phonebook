export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsLoading = state => state.auth.isLoading;

export const selectUser = state => state.auth.user.name;

export const selectUserList = state => state.contacts.contacts;

export const selectUserFilter = state => state.filter;

export const selectIsLoadingContacts = state => state.contacts.isLoading;
