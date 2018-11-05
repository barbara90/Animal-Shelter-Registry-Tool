import React from 'react';
import { Link } from 'react-router-dom';

import './AnimalList.css';

import Animal from '../AnimalComponent/Animal';
import Owner from '../OwnerComponent/Owner';

const animalList = props => {
  return (
    <ul className="animal-list">
      {props.animals.map(animal => {
        const animalComponent = <Animal animal={animal} />;
        if (animal.adopted) {
          return (
            <li key={animal.id}>
              {animalComponent}
              <Owner owner={props.owners.find(owner => owner._id == animal.ownerId)} />
            </li>
          )
        }
        return (
          <li key={animal.id}>
            {animalComponent}
            <div className="animal-list__controls">
              <Link to={`/adoptation/${animal._id}`}>Adopt</Link>
              <Link to={`/edit-animal/${animal._id}`}>Update</Link>
              <button onClick={() => props.onDeleteAnimal(animal._id)}>Delete</button>
            </div>
          </li>
        )
      })}
    </ul>
  );
}

export default animalList;
