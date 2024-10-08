import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";
import { selectContacts } from "../../redux/contactsSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  return (
    <>
      {contacts.length > 0 && (
        <input
          className={css.input}
          type="search"
          onChange={(e) => {
            dispatch(changeFilter(e.target.value));
          }}
          placeholder="Find name"
        />
      )}
    </>
  );
};

export default Filter;
