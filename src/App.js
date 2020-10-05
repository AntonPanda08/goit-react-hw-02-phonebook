import React, { Component } from "react";
import createContact from "./utils/createContact";
import PhoneBookList from "./components/phoneBookList";
import Filter from "./components/filter";
import ContactForm from "./components/contactForm";

class Phonebook extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
    filter: "",
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { contacts, name } = this.state;
    const contactName = name.toLowerCase();
    contacts.find((contact) => contact.name.toLowerCase() === contactName)
      ? alert(`${name} already in your contact list`)
      : this.addContact();
  };
  changeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };
  addContact = () => {
    const { name, number } = this.state;
    const contact = createContact(name, number);
    this.setState((prevState) => {
      return { contacts: [...prevState.contacts, contact] };
    });
  };
  getContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
  };
  removeContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(
          (contact) => contact.id !== contactId
        ),
      };
    });
  };
  render() {
    const { contacts, name, number, filter } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm
          onHandleSubmit={this.handleSubmit}
          onHandleChange={this.handleChange}
          name={name}
          number={number}
        />
        <br />
        {contacts.length > 1 && (
          <Filter filter={filter} onChangeFilter={this.changeFilter} />
        )}

        <PhoneBookList
          contacts={this.getContacts()}
          onRemoveContact={this.removeContact}
        />
      </>
    );
  }
}
export default Phonebook;
