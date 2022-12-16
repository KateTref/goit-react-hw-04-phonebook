import React from 'react';
import PropTypes from 'prop-types';
import Contact from 'components/Contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({ items, onDelete }) => {
  console.log(items);
  return (
    <ul>
      {items.map((item, idx) => (
        <li key={idx} className={css.item}>
          <Contact contact={item} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ContactList;
