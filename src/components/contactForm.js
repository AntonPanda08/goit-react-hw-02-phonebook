import React from "react";
import PropTypes from "prop-types";
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
        required
      />
    </label>
    <br />
    <label>
      Contact
      <br />
      <input
        type="tel"
        name="contact"
        value={number}
        onChange={onHandleNumberChange}
        required
      />
    </label>
    <br />
    <br />
    <button type="submit" value="submit">
      Add contact
    </button>
  </form>
);
ContactForm.propTypes = {
  onHandleSubmit: PropTypes.func.isRequired,
  onHandleNameChange: PropTypes.func.isRequired,
  onHandleNumberChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};
export default ContactForm;
