import React, { Component } from 'react';
import './App.css';
import AnimalList from './components/AnimalListComponent/AnimalList';
import AnimalFilter from './components/AnimalFilterComponent/AnimalFilter';

class App extends Component {
  state = {
    animals: [{
      name: 'Cili',
      dateOfBirth: '2012-01-02',
      registrationDate: '2018-01-02',
      breed: 'Cat',
      chipId: '',
      color: 'white',
      notes: ''
    },
    {
      name: 'Pajti',
      dateOfBirth: '2012-01-02',
      registrationDate: '2018-01-02',
      breed: 'Dog',
      chipId: 'jdfh643532dkls',
      color: 'white',
      notes: ''
    },
  ]
  };

  render() {
    return (
      <div>
      <AnimalFilter
      />
      <AnimalList 
        animals={this.state.animals}
      />
      </div>
    );
  }
}

export default App;
