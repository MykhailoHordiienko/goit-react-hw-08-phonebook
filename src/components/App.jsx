import { Component } from 'react';
import { Contacts } from './Contacts/Contacts';
import { FormFild } from './FormFild/FormFild';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onHandleSubmit = (e, { resetForm }) => {
    const contactName = [];

    for (const contact of this.state.contacts) {
      contactName.push(contact.name.toLowerCase());
    }

    if (contactName.includes(e.name.toLowerCase())) {
      alert(`${e.name} is already in contacts list`);
      return;
    }
    const user = { ...e, id: nanoid() };
    this.setState(prevState => {
      return { contacts: [user, ...prevState.contacts] };
    });
    resetForm();
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts } = this.state;
    const normalizedFilter = this.state.filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deliteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    const { onHandleSubmit, changeFilter, deliteContact } = this;
    const { contacts, filter } = this.state;
    const visiblContacts = this.getVisibleContacts();

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h2>Phonebook</h2>
        <FormFild onSubmit={onHandleSubmit} />
        <h4>Contacts</h4>
        <Filter value={filter} onChange={changeFilter} />
        {contacts.length > 0 && (
          <Contacts contacts={visiblContacts} onDelite={deliteContact} />
        )}
      </div>
    );
  }
}
