import Contact from "../Contact/Contact"
import css from "./contactList.module.css"

const ContactList = ({list, onDelete}) => {
    return (
      <ul className={css.contactList}>
        {list.map((person) => (
        <li className={css.item} key={person.id}>
          <Contact 
          data={person}
          onDelete={onDelete}
        /></li>
      ))}
    </ul>
      
  )
}

export default ContactList