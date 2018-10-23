import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import AnimalList from './components/AnimalListComponent/AnimalList';
import AnimalFilter from './components/AnimalFilterComponent/AnimalFilter';
import CreateAnimal from './components/CreateAnimalComponent/CreateAnimal';

class App extends Component {
  state = {
    animals: [{
      id: 0,
      ownerId: 0,
      adopted: true,
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
      adopted: false,
      name: 'Pajti',
      dateOfBirth: '2012-01-02',
      registrationDate: '2018-01-02',
      breed: 'Dog',
      chipId: 'jdfh643532dkls',
      color: 'white',
      notes: ''
    },
  ],
  owners: [{
    id: 0,
    name: 'OwnerTest',
    contact: {
      phoneNumber: '423651',
      address: {
        postCode: '67576',
        city: 'hjkfd',
        street: '87lkj',
        houseNumber: '879'
      }
    },
    notes: ''
  }]  
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
      <BrowserRouter>
        <div>
          <Link to="/">In Shelter</Link>
          <Link to="/adopted">Adopted</Link>
          <Link to="/adoptation">Adoptation</Link>
          <Link to="/new-animal">New Animal</Link>
          <Route path="/" exact component={AnimalFilter} />
          <Route path="/" exact component={() => <AnimalList
            animals={this.state.animals.filter((animal) => animal.adopted !== true)}
            onDeleteAnimal={this.onDeleteAnimal}
          />}/>
          <Route path="/adopted" component={AnimalFilter} />
          <Route path="/adopted" component={() => <AnimalList
            animals={this.state.animals.filter((animal) => animal.adopted !== false)}
            onDeleteAnimal={this.onDeleteAnimal}
          />} />
          <Route path="/new-animal" component={() => <CreateAnimal
            onRegister={this.onRegister}
          />}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
