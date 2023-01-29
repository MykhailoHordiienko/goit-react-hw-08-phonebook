export const healperFulfilledUserOn = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};
export const healperFulfilledUserOut = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

export const healperPendingRefresh = state => {
  state.isRefreshing = true;
};

export const healperFulfilledRefresh = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

export const healperRejectedRefresh = state => {
  state.isRefreshing = false;
};
