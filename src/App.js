import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';

import AnimalList from './components/AnimalListComponent/AnimalList';
import AnimalFilter from './components/AnimalFilterComponent/AnimalFilter';
import AnimalForm from './components/AnimalFormComponent/AnimalForm';
import Adoptation from './components/AdoptationComponent/Adoptation';

class App extends Component {
  state = {
    selectedFilter: 'all',
    animals: [{
      id: 0,
      ownerId: 0,
      adopted: true,
      name: 'Cili',
      dateOfBirth: '2012-01-02',
      registrationDate: '2018-01-02',
      breed: 'cat',
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
      breed: 'dog',
      chipId: 'jdfh643532dkls',
      color: 'white',
      notes: ''
    }],
    owners: [{
      id: 0,
      name: 'Owner Test',
      contact: {
        phoneNumber: '06703949119',
        address: {
          postCode: '6723',
          city: 'Szeged',
          street: 'Street',
          houseNumber: '69'
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

  onAnimalFilterChange = (event) => {
    this.setState({selectedFilter: event.target.value});
  }

  onAdopt = (animalId, owner) => {
    this.setState({
      owners: [...this.state.owners, owner],
      animals: [
        ...this.state.animals.filter(animal => animal.id !== +animalId),
        {
          ...this.state.animals.find(animal => animal.id === +animalId),
          adopted: true,
          ownerId: owner.id
        }
      ]  
    });
  }

  onEdit = (editedAnimalId, editedAnimal) => {
    console.log('onEdit');
    this.setState({
      animals: [
        ...this.state.animals.filter(animal => animal.id !== editedAnimalId),
        editedAnimal
      ]
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <nav className="top-navigation">
            <Link to="/">In Shelter</Link>
            <Link to="/adopted">Adopted</Link>
            <Link to="/new-animal">New Animal</Link>
          </nav>

          <Route path="/" exact component={() => <AnimalFilter
            selectedFilter={this.state.selectedFilter}
            onAnimalFilterChange={this.onAnimalFilterChange}
          />} />

          <Route path="/" exact component={() => <AnimalList
            animals={
              this.state.animals
                .filter(animal => animal.adopted !== true)
                .filter(animal => animal.breed === this.state.selectedFilter || this.state.selectedFilter === 'all')
            }
            onDeleteAnimal={this.onDeleteAnimal}
          />} />

          <Route path="/adopted" exact component={() => <AnimalFilter
            selectedFilter={this.state.selectedFilter}
            onAnimalFilterChange={this.onAnimalFilterChange}
          />} />

          <Route path="/adopted" component={() => <AnimalList
            animals={
              this.state.animals
                .filter(animal => animal.adopted !== false)
                .filter(animal => animal.breed === this.state.selectedFilter || this.state.selectedFilter === 'all')
            }
            owners={this.state.owners}
            onDeleteAnimal={this.onDeleteAnimal}
          /> } />

          <Route path="/new-animal" component={() => <AnimalForm
            onRegister={this.onRegister}
          />} />

          <Route path="/adoptation/:animalId" component={() => <Adoptation
            animals={this.state.animals}
            onAdopt={this.onAdopt}
          />} />

          <Route path="/edit-animal/:animalId" component={() => <AnimalForm
            animals={this.state.animals}
            onEdit={this.onEdit}
          />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
