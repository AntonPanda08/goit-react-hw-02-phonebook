import React from "react";

const ContactForm = ({
  onHandleSubmit,
  onHandleNameChange,
  onHandleNumberChange,
  name,
  number,
}) => (
  <form onSubmit={onHandleSubmit}>
    <label>
      Name
      <br />
      <input
        type="text"
        name="name"
        value={name}
        onChange={onHandleNameChange}
      />
    </label>
    <br />
    <label>
      Contact
      <br />
      <input
        type="text"
        name="contact"
        value={number}
        onChange={onHandleNumberChange}
      />
    </label>
    <br />
    <br />
    <button type="submit" value="submit">
      Add contact
    </button>
  </form>
);

export default ContactForm;
