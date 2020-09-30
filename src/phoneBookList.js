import React from "react";

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
export default PhoneBookList;
