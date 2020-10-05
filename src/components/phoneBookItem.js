import React from "react";
import PropTypes from "prop-types";

const PhoneBookItem = ({ name, number, id, onRemoveContact }) => (
  <li key={id}>
    <span>
      {name}: {number}
    </span>
    <button type="button" onClick={() => onRemoveContact(id)}>
      Delete
    </button>
  </li>
);

export default PhoneBookItem;
