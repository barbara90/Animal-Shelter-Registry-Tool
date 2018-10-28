import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import axios from 'axios';

import './App.css';

import AnimalList from './components/AnimalListComponent/AnimalList';
import AnimalFilter from './components/AnimalFilterComponent/AnimalFilter';
import AnimalForm from './components/AnimalFormComponent/AnimalForm';
import Adoptation from './components/AdoptationComponent/Adoptation';

class App extends Component {
  state = {
    selectedFilter: 'all',
    animals: [],
    owners: []
  };

  componentDidMount() {
    axios.get('http://localhost:3001/owner').then(response => {
      this.setState({ owners: response.data });
    });
    axios.get('http://localhost:3001/animal').then(response => {
      this.setState({ animals: response.data });
    });
  }

  onRegister = (animal) => {
    axios.post('http://localhost:3001/animal', animal).then(response => {
      if (typeof response.data !== 'undefined' && response.data.length > 0) {
        this.setState({
          animals: [...this.state.animals, response.data]
        });
      };
    });
  }

  onDeleteAnimal = (id) => {
    axios.delete(`http://localhost:3001/animal/${id}`).then(() => this.setState({
      animals: this.state.animals.filter(animal => animal._id !== id)
    }));
  }

  onAnimalFilterChange = (event) => {
    this.setState({selectedFilter: event.target.value});
  }

  onAdopt = (animalId, owner) => {
    axios
      .post('http://localhost:3001/owner', owner)
      .then(response => {
        const newOwner = response.data;
        this.setState({ owners: [...this.state.owners, response.data] });
        const adoptedAnimal = {
          ...this.state.animals.find(animal => animal._id == animalId),
          adopted: true,
          ownerId: newOwner._id
        }
        axios.put(`http://localhost:3001/animal/${adoptedAnimal._id}`, adoptedAnimal).then(response => {
          this.setState({
            animals: [
              ...this.state.animals.filter(animal => animal._id != animalId),
              response.data
            ]
          })
        })
      });
  }

  onEdit = (editedAnimalId, editedAnimal) => {
    axios.put(`http://localhost:3001/animal/${editedAnimalId}`, editedAnimal).then(response => this.setState({
      animals: [
        ...this.state.animals.filter(animal => animal._id !== editedAnimalId),
        response.data
      ]
    }));
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
