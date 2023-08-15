
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { IoFingerPrintSharp } from 'react-icons/io5';
import { nanoid } from 'nanoid';
import css from '../styles.module.css';


export const Filter = ({searchByName}) => {
  const [filter, setFilter] = useState('');

  const inputSearchNameId = nanoid();

  const handleInputSearchChange = event => {
    setFilter(event.currentTarget.value); 
    searchByName(event.currentTarget.value)
  };

    return (
      <div className={css.filterList}>
        {/* ================ lable не включає input, тому id i htmlFor ====================
         */}
        <label className={css.contactName} htmlFor={inputSearchNameId}>
          <span className={css.icon}>
            <IoFingerPrintSharp />
          </span>
          Search by Name
        </label>

        <div className={css.contactName}>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={filter}
            onChange={handleInputSearchChange}
            id={inputSearchNameId}
            autoComplete="off"
          />
        </div>
      </div>
    );
}

Filter.propTypes = {
  searchByName: PropTypes.func.isRequired,
  // filter: PropTypes.string,
};
