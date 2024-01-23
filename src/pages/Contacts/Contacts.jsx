import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from 'slice/contacts/thunk';

const Contacts = () => {
  const { error, contacts } = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  return (
    <div className="container">
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

export default Contacts;
