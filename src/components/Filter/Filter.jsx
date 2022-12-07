import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <div className={css.filter}>
      <label htmlFor="filter" className={css.filterLabel}>
        Find contacts by name
      </label>
      <input type="text" name="filter" value={value} onChange={onChange} />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
