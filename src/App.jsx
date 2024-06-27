import { useEffect, useState } from "react";
import "./App.css";

import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { GiRotaryPhone } from "react-icons/gi";

const list = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const savedInformation = () => {
  const localContact = localStorage.getItem("contacts");
  if (localContact) {
    return JSON.parse(localContact);
  }
  return list;
};
function App() {
  const [contacts, setContacts] = useState(savedInformation);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevCont) => {
      return [...prevCont, newContact];
    });
  };

  const deleteContacts = (contactId) => {
    setContacts((prevCont) => {
      return prevCont.filter((contact) => contact.id !== contactId);
    });
  };
  const visibleContacts = contacts.filter((cont) =>
    cont.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <div id="box">
        <p><GiRotaryPhone  size="124" /></p>
        <h1>Phonebook</h1>
        <ContactForm onAdd={addContact} />
        <SearchBox value={filter} onFilter={setFilter} />
        <ContactList list={visibleContacts} onDelete={deleteContacts} />
      </div>
    </>
  );
}

export default App;
