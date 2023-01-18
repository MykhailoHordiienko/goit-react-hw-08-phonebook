import { createSlice } from '@reduxjs/toolkit';
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
  extraReducers: {
    [fetchContacts.pending]: healperPending,
    [fetchContacts.fulfilled]: healperFulfilledFetch,
    [fetchContacts.rejected]: healperRejected,

    [addContact.pending]: healperPending,
    [addContact.fulfilled]: healperFulfilledAdd,
    [addContact.rejected]: healperRejected,

    [deleteContact.pending]: healperPending,
    [deleteContact.fulfilled]: healperFulfilledDelete,
    [deleteContact.rejected]: healperRejected,
  },
});
