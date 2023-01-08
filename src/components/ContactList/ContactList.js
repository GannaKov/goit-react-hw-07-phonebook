import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
//import { deleteContact } from 'redux/actions';
import { deleteContact } from 'redux/operations';
import { getContacts, getFilter } from 'redux/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';

import {
  ContactList,
  ContactListItem,
  FiltrSubmitBtn,
} from './ContactList.styled';

const getVisibleContacts = (items, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

export function ContactsList() {
  const dispatch = useDispatch();

  const { items } = useSelector(getContacts);

  // const contacts = useSelector(state => state.contacts);
  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };
  // const filter = useSelector(state => state.filter);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(items, filter);

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
