import React from 'react';
import PropTypes from 'prop-types';
import css from './Contact.module.css';
const Contact = ({ contact, onDelete }) => {
  return (
    <div className={css.contact}>
      <p className={css.contactText}>
        {contact.name}: {contact.number}
      </p>
      <button
        type="button"
        className={css.contactButton}
        onClick={() => onDelete(contact.id)}
      >
        Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};
export default Contact;
