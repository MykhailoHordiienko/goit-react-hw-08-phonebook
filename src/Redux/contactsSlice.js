import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';
import {
  healperPending,
  healperRejected,
  healperFulfilledFetch,
  healperFulfilledAdd,
  healperFulfilledDelete,
} from './healpers';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder

      .addCase(fetchContacts.fulfilled, healperFulfilledFetch)

      .addCase(addContact.fulfilled, healperFulfilledAdd)

      .addCase(deleteContact.fulfilled, healperFulfilledDelete)

      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        healperPending
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        healperRejected
      );
  },
});
