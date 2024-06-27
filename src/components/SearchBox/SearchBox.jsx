import css from "./searchBox.module.css"

const SearchBox = ({value, onFilter}) => {
  return (
    <div className={css.container}>
      <p className={css.text}>Find contacts by name</p>
        <input className={css.input} type='text' value={value}  onChange={(e) => onFilter(e.target.value)}/>
      </div>
  );
};

export default SearchBox;
