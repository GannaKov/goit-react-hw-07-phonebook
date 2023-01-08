import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
//import { deleteContact } from 'redux/actions';
import { deleteContact } from 'redux/operations';
import { selectVisibleContacts } from 'redux/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';

import {
  ContactList,
  ContactListItem,
  FiltrSubmitBtn,
} from './ContactList.styled';

export function ContactsList() {
  const dispatch = useDispatch();

  // const contacts = useSelector(state => state.contacts);
  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };
  // const filter = useSelector(state => state.filter);

  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ContactList>
      {visibleContacts.map(contact => (
        <ContactListItem key={contact.id}>
          <ContactItem contact={contact} />
          <FiltrSubmitBtn
            type="button"
            onClick={() => handleDeleteContact(contact.id)}
          >
            Удалить
          </FiltrSubmitBtn>
        </ContactListItem>
      ))}
    </ContactList>
  );
}
