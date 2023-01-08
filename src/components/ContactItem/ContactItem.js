import React from 'react';
import PropTypes from 'prop-types';
import { ContactItemSpan } from './ContactItem.styled';

export function ContactItem({ contact: { name, phone } }) {
  return (
    <>
      <ContactItemSpan>
        {name}: {phone}
      </ContactItemSpan>
    </>
  );
}

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
