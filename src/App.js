import React, { Component } from "react";
import createContact from "./utils/createContact";
import PhoneBookList from "./phoneBookList";
import Filter from "./components/filter";
import ContactForm from "./components/contactForm";

class Phonebook extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "",
    number: "",
    filter: "",
  };

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleNumberChange = (e) => {
    this.setState({
      number: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.addContact();
  };
  changeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };
  addContact = () => {
    const { name, number } = this.state;
    const contact = createContact(name, number);
    this.setState((prevState) => {
      let duplicate = this.state.contacts
        .map((contact) => contact.name)
        .includes(prevState.name);
      return duplicate
        ? alert(`${prevState.name} is already in list`)
        : {
            contacts: [...prevState.contacts, contact],
          };
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
    const { name, number, filter } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm
          onHandleSubmit={this.handleSubmit}
          onHandleNameChange={this.handleNameChange}
          onHandleNumberChange={this.handleNumberChange}
          name={name}
          number={number}
        />
        <br />
        <Filter filter={filter} onChangeFilter={this.changeFilter} />

        <PhoneBookList
          contacts={this.getContacts()}
          onRemoveContact={this.removeContact}
        />
      </>
    );
  }
}
export default Phonebook;
