import { useState } from "react";
import css from "./searchBox.module.css"

const SearchBox = ({value, onFilter}) => {
 const [name, setName] = useState(value);

  const handleFilter = (event) => {
    const { value } = event.target;
    setName(value);
    onFilter(value); 
  };
  return (
    <div className={css.container}>
      <p className={css.text}>Find contacts by name</p>
      <form onSubmit={(event) => event.preventDefault()}>
        <input className={css.input} type='text' value={name} onChange={handleFilter} />
       </form>
      </div>
  );
};

export default SearchBox;
