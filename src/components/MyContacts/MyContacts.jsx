import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import {
  fetchContacts,
  removeContact,
} from 'redux/contacts/contacts -operations';
import { set_filter } from 'redux/filter/filter -actions';
import { FilteredNames } from 'redux/contacts/contacts -selectors';
import { getFilter } from 'redux/filter/filter -selectors';

import css from '../MyContacts/MyContacts.module.css';

const MyContacts = () => {
  const contacts = useSelector(FilteredNames);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // const AddContact = payload => {
  //   dispatch(addContact(payload));
  // };

  const RemoveContact = id => {
    dispatch(removeContact(id));
  };

  const SetFilter = ({ target }) => {
    dispatch(set_filter(target.value));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />

      <div title="Contacts">
        <label className={css.label}>
          Find contacts by name
          <input
            className={css.input}
            type="text"
            value={filter}
            onChange={SetFilter}
          />
        </label>
        <ContactList contacts={contacts} removeContact={RemoveContact} />
      </div>
    </>
  );
};

export default MyContacts;
