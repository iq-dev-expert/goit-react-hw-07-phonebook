import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from 'redux/operations';

const initialState = { items: [], isLoading: false, error: null };

const onPending = state => {
  state.isLoading = true;
};
const onRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const onFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: onPending,
    [fetchContacts.fulfilled](state, action) {
      onFulfilled(state);
      state.items = action.payload;
    },
    [fetchContacts.rejected]: onRejected,

    [addContact.pending]: onPending,
    [addContact.fulfilled](state, action) {
      onFulfilled(state);
      state.items.push(action.payload);
    },
    [addContact.rejected]: onRejected,

    [deleteContact.pending]: onPending,
    [deleteContact.fulfilled](state, action) {
      onFulfilled(state);
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: onRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;
