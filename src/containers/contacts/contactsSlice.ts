import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, addContact, editContact, deleteContact } from '../../axiosAPI.ts';
import { Contact } from '../../types';

interface ContactsState {
  contacts: Contact[];
}

const initialState: ContactsState = {
  contacts: [],
};

export const getContactsThunk = createAsyncThunk('contacts/fetchContacts', async () => {
  return await getContacts();
});

export const addContactThunk = createAsyncThunk('contacts/addContact', async (contact: Contact) => {
  await addContact(contact);
  return contact;
});

export const editContactThunk = createAsyncThunk('contacts/editContact', async (contact: Contact) => {
  await editContact(contact.id, contact);
  return contact;
});

export const deleteContactThunk = createAsyncThunk('contacts/deleteContact', async (id: string) => {
  await deleteContact(id);
  return id;
});

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getContactsThunk.fulfilled, (state, action) => {
        state.contacts = action.payload;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
      })
      .addCase(editContactThunk.fulfilled, (state, action) => {
        const index = state.contacts.findIndex((contact) => contact.id === action.payload.id);
        if (index !== -1) {
          state.contacts[index] = action.payload;
        }
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
      });
  },
});

export default contactsSlice.reducer;