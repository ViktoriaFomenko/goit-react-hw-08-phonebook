import Navbar from './NavBar/NavBar';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import UserRoutes from '../UserRoutes';

export const App = () => {
  return (
    <>
      <Navbar />
      <UserRoutes />
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};
