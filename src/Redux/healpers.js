export const healperPending = state => {
  state.isLoading = true;
};

export const healperRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const healperFulfilledFetch = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.contacts = action.payload;
};

export const healperFulfilledAdd = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.contacts.push(action.payload);
};

export const healperFulfilledDelete = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.contacts = state.contacts.filter(
    contact => contact.id !== action.payload.id
  );
};

// export const healperFilter = (state, action) => {
//   state.filterValue = action.payload;
// };
