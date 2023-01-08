import React, { useState } from 'react';
// import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
//import { addContact } from 'redux/actions';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import {
  Form,
  FormInput,
  ModalSubmitBtn,
  FormLabel,
} from 'components/ContactForm/ContactForm.styled';

export const ContactForm = () => {
  const { items } = useSelector(getContacts);
  //const value=useSelector(state=>state.myValue) - from lesson
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setPhone(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = evt => {
    evt.preventDefault();

    if (items.length > 0 && items.find(item => item.name === name)) {
      alert(`${name} is already in contacts `);
      reset();
      return;
    }
    // const id = nanoid();

    dispatch(addContact({ name, phone }));
    reset();
  };
  const reset = () => {
    setName('');
    setPhone('');
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel>
        Name
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </FormLabel>
      <FormLabel>
        Number
        <FormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phone}
          onChange={handleChange}
        />
      </FormLabel>
      <ModalSubmitBtn type="submit">Add Conract</ModalSubmitBtn>
    </Form>
  );
};
