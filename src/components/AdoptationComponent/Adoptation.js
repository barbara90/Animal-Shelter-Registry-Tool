import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Animal from '../AnimalComponent/Animal';

import './Adoptation.css';

class ownerForm extends Component {
  onSubmit = (event) => {
    event.preventDefault();
    this.props.onAdopt(this.props.match.params.animalId, {
      name: this.nameInput.value,
      contact: {
        phoneNumber: this.phoneNumber.value,
        address: {
          postCode: this.postCode.value,
          city: this.city.value,
          street: this.street.value,
          houseNumber: this.houseNumber.value,
        }
      },
      notes: this.notesInput.value
    })
    this.props.history.push('/adopted');
  }

  render() {
    return (
      <div className="adoptation">
        <Animal animal={this.props.animals.find(animal => animal._id == this.props.match.params.animalId)} />
        <form onSubmit={(event) => this.onSubmit(event)}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            required
            ref={nameInput => { this.nameInput = nameInput }} />

          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            required
            ref={phoneNumber => { this.phoneNumber = phoneNumber }} />

          <label htmlFor="postCode">Post Code</label>
          <input
            type="text"
            id="postCode"
            required
            ref={postCode => { this.postCode = postCode }} />

          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            required
            ref={city => { this.city = city }} />

          <label htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            required
            ref={street => { this.street = street }} />

          <label htmlFor="houseNumber">House Number</label>
          <input
            type="text"
            id="houseNumber"
            required
            ref={houseNumber => { this.houseNumber = houseNumber }} />

          <label htmlFor="notes">Notes</label>
          <input
            type="text" id="notes"
            ref={notesInput => { this.notesInput = notesInput }} />

          <button id="submit" value="submit">Adoptation</button>
        </form>
      </div>
    );
  }
}

export default withRouter(ownerForm);
