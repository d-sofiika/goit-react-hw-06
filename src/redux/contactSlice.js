import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [{ id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },]
};
const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        addContact: (state, { payload }) => {
            state.items.push(payload);
            
        },
        deleteContact: (state, { payload }) => {
            state.contacts = state.items.filter((contact) => contact.id !== payload);

        }
         } 

})

export const { addContact, deleteContact } = contactSlice.actions;
export const selectContacts = (state) => state.contacts.items;
export const contactReducer = contactSlice.reducer;