import { Component } from 'react';
import { List } from 'components/list/List';
import Form from 'components/form/Form';
import { Filter } from 'components/filter/Filter';

// const foodListData = [
//   { id: 1, name: 'Carrot', price: 10 },
//   { id: 2, name: 'Cupcake', price: 450 },
//   { id: 3, name: 'Apple', price: 22 },
//   { id: 4, name: 'Cabbage', price: 30 },
// ];

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  onChangeSearch = e => {
    console.log(e.target.value);
    this.setState(prevState => ({
      filter: e.target.value,
    }));
  };

  applayFilter = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  handleCheck = user => {
    if (
      this.state.contacts.some(
        contact => contact.name.toLowerCase() === user.name.toLowerCase()
      )
    ) {
      alert(`${user.name} is alredy in contact`);
    } else {
      this.handleSubmit(user);
    }
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.handleSubmit} onCheck={this.handleCheck} />

        <h2>Contacts</h2>
        <Filter
          value={this.state.filter}
          onChangeSearch={this.onChangeSearch}
        />
        <List options={this.applayFilter()} />
      </div>
    );
  }
}
