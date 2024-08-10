import { useSelector } from "react-redux";
import css from "./ContactList.module.css";
import { selectNameFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";
import Loader from "../Loader/Loader";
import {
  selectContacts,
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contactsSlice";

const ContactList = () => {
  const filter = useSelector(selectNameFilter);
  const filteredContacts = useSelector(selectFilteredContacts);
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const contactsToShow = filter ? filteredContacts : contacts;

  return (
    <>
      {error && <h1>Sorry, something went wrong</h1>}
      {loading && <Loader />}
      {contacts.length > 0 && <h2 className={css.title}>Contacts</h2>}
      <ul>
        {contactsToShow.map((contact) => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
