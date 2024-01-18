import React, { useEffect } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from 'slice/thunk';
import Loader from './Loader/Loader';

const App = () => {
  const { isLoading, error, contacts } = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  return (
    <div className="container">
      {isLoading && <Loader />}
      {error && <p> {error} </p>}
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <h4>Find contacts by name</h4>
      <Filter />
      {contacts && <ContactList />}
    </div>
  );
};

export default App;
