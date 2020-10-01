import React from "react";
import PropTypes from "prop-types";
const PhoneBookList = ({ contacts, onRemoveContact }) => (
  <ul>
    {contacts.map(({ name, id, number }) => (
      <li key={id}>
        <span>
          {name}: {number}
        </span>
        <button type="button" onClick={() => onRemoveContact(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);
PhoneBookList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
      ]),
    })
  ),
  onRemoveContact: PropTypes.func.isRequired,
};
export default PhoneBookList;
