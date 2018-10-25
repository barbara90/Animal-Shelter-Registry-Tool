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
          const owner = props.owners.find(owner => owner.id === animal.ownerId);
          const ownerComponent = <Owner owner={owner} />;
          return (
            <li key={animal.id}>
              {animalComponent}
              {ownerComponent}
            </li>
          )
        }
        return (
          <li key={animal.id}>
            {animalComponent}
            <div className="animal-list__controls">
              <Link to={`/adoptation/${animal.id}`}>Adopt</Link>
              <Link to={`/edit-animal/${animal.id}`}>Update</Link>
              <button onClick={() => props.onDeleteAnimal(animal.id)}>Delete</button>
            </div>
          </li>
        )
      })}
    </ul>
  );
}

export default animalList;
