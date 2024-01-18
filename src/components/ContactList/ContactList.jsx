import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAddContact } from 'slice/selector';
import css from './ContactList.module.css';
import { fetchDeleteContactThunk } from 'slice/thunk';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAddContact);

  const onDelete = id => {
    dispatch(fetchDeleteContactThunk(id));
  };

  return (
    <ul className={css.item}>
      {contacts &&
        contacts.map(contact => (
          <li className={css.list} key={contact.id}>
            <div className={css.block}>
              {contact.name} : {contact.number}
            </div>
            <button className={css.delete} onClick={() => onDelete(contact.id)}>
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};
