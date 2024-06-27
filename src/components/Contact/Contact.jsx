import css from "./contact.module.css"
import { IoAccessibilityOutline } from "react-icons/io5"
import { IoCallOutline } from "react-icons/io5";

const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <div className={css.container}>
  
        <p className={css.data}><IoAccessibilityOutline className={css.iconContact} size="20"/>{name}</p>
        <p className={css.data}><IoCallOutline className={css.iconContact} size="20"/>{number}</p>
     
      <button className={css.btn} onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Contact;
