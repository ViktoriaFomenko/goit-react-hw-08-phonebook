import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts -selectors';
import css from './ContactForm.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    const duplicationName = contacts.find(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });

    if (duplicationName) {
      toast.info(`${name} is already in contacts.`);
      return;
    }

    reset();
  };

  return (
    <>
      <form className={css.form} onSubmit={handleOnSubmit}>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </label>
        <label className={css.label}>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </label>
        <Button type="submit" variant="contained" startIcon={<AddIcon />}>
          Add
        </Button>
      </form>
    </>
  );
};
