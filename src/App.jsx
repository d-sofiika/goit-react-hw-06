
import "./App.css";

import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { GiRotaryPhone } from "react-icons/gi";
import { useDispatch, useSelector  } from "react-redux";
import { addContact,deleteContact,selectContacts } from "./redux/contactSlice";
import { changeFilter, selectNameFilter } from "./redux/filtersSlice";



function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filterContact = useSelector(selectNameFilter)

  

const deleteContacts = (oldContact) => {
  dispatch(deleteContact(oldContact))
  }

  const addContacts = (newContact) => {
 dispatch(addContact(newContact))
  }
 const handleFilterChange = (filterValue) => {
    dispatch(changeFilter(filterValue));
  };
  const filteredContacts = contacts.filter((cont) =>
    cont.name.toLowerCase().includes(filterContact.toLowerCase())
  );
  
  return (
    <>
      <div id="box">
        <p><GiRotaryPhone  size="124" /></p>
        <h1>Phonebook</h1>
        <ContactForm onAdd={addContacts} />
        <SearchBox value={filterContact} onFilter={handleFilterChange} />
        <ContactList list={filteredContacts} onDelete={deleteContacts} />
      </div>
    </>
  );
}

export default App;
