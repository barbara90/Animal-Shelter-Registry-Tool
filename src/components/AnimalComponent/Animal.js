import React from 'react';

import './Animal.css';

const animal = props => {
  const animal = props.animal;

  return (
    <div className="animal">
      <div className="animal__name">{animal.name}</div>
      <div><span className="animal__data-title">Date of birth: </span>{animal.dateOfBirth}</div>
      <div><span className="animal__data-title">Date of registration: </span>{animal.registrationDate}</div>
      <div><span className="animal__data-title">Breed: </span>{animal.breed}</div>
      <div><span className="animal__data-title">ChipId: </span>{animal.chipId}</div>
      <div><span className="animal__data-title">Color: </span>{animal.color}</div>
      <div><span className="animal__data-title">Notes: </span>{animal.notes}</div>
    </div>
  );
};

export default animal;
