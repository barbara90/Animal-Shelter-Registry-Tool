import React, { Component } from 'react';
import './App.css';
import AnimalList from './components/AnimalListComponent/AnimalList';
import AnimalFilter from './components/AnimalFilterComponent/AnimalFilter';
import CreateAnimal from './components/CreateAnimalComponent/CreateAnimal';

class App extends Component {
  state = {
    animals: [{
      id: 0,
      name: 'Cili',
      dateOfBirth: '2012-01-02',
      registrationDate: '2018-01-02',
      breed: 'Cat',
      chipId: '',
      color: 'white',
      notes: ''
    },
    {
      id: 1, 
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

  onRegister = (animal) => {
    this.setState({
      animals: [...this.state.animals, animal]
    })
  }

  onDeleteAnimal = (id) => {
    this.setState({
      animals: this.state.animals.filter(animal => animal.id !== id)
    })
  }

  render() {
    return (
      <div>
      <AnimalFilter />
      <AnimalList 
        animals={this.state.animals}
        onDeleteAnimal={this.onDeleteAnimal}
      />
      <CreateAnimal
         onRegister={this.onRegister} 
      />
      </div>
    );
  }
}

export default App;
