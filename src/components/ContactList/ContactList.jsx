import css from './ContactList.module.css';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactList = ({ contacts, removeContact }) => {
  const elements = contacts.map(({ id, name, number }) => (
    <li className={css.item} key={id}>
      {name}: {number}
      <Button
        onClick={() => removeContact(id)}
        variant="contained"
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
    </li>
  ));

  return <ul className={css.list}>{elements}</ul>;
};
