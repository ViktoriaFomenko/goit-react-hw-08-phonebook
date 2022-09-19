import css from './ContactList.module.css';

export const ContactList = ({ contacts, removeContact }) => {
  const elements = contacts.map(({ id, name, number }) => (
    <li className={css.item} key={id}>
      {name}: {number}
      <button
        className={css.button}
        type="button"
        onClick={() => removeContact(id)}
      >
        Delete contact
      </button>
    </li>
  ));

  return <ul className={css.list}>{elements}</ul>;
};
