import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  // const handleDeleteContact = contactId => {
  //   dispatch(deleteContact(contactId));
  // };

  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ContactList>
      {visibleContacts.map(contact => (
        <ContactListItem key={contact.id}>
          <ContactItem contact={contact} />
          <FiltrSubmitBtn
            type="button"
            // onClick={() => handleDeleteContact(contact.id)}
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Удалить
          </FiltrSubmitBtn>
        </ContactListItem>
      ))}
    </ContactList>
  );
}
