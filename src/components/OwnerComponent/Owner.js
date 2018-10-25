import React from 'react';

import './Owner.css';

const owner = props => {
  const owner = props.owner;

  return (
    <div className="owner">
      <div className="owner__name">{owner.name}</div>
      <div><span className="owner__data-title">Phone number: </span>{owner.contact.phoneNumber}</div>
      <div><span className="owner__data-title">Postcode: </span>{owner.contact.address.postCode}</div>
      <div><span className="owner__data-title">City: </span>{owner.contact.address.city}</div>
      <div><span className="owner__data-title">Street: </span>{owner.contact.address.street}</div>
      <div><span className="owner__data-title">House Number: </span>{owner.contact.address.houseNumber}</div>
      <div><span className="owner__data-title">Notes: </span>{owner.notes}</div>
    </div>
  );
}

export default owner;
