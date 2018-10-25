import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'; 
import './AnimalForm.css';

class AnimalForm extends Component {
  onSubmit = (event, animal, editedAnimalId) => {
    event.preventDefault();
    if (!animal) {
      this.props.onRegister({
        name: this.nameInput.value,
        dateOfBirth: this.dateOfBirthInput.value,
        registrationDate: this.registrationDateInput.value,
        breed: this.breedInput.value,
        chipId: this.chipIdInput.value,
        color: this.colorInput.value,
        notes: this.notesInput.value,
        adopted: false
      });
      this.props.history.push('/');
    } else {
      this.props.onEdit(editedAnimalId, {
        name: this.nameInput.value,
        dateOfBirth: this.dateOfBirthInput.value,
        registrationDate: this.registrationDateInput.value,
        breed: this.breedInput.value,
        chipId: this.chipIdInput.value,
        color: this.colorInput.value,
        notes: this.notesInput.value,
        adopted: false
      });
      this.props.history.push('/');
    }
  }

  render() {
    let animal;
    let editedAnimalId;
    let registrationButton;
    let editButton;
    if (this.props.animals) {
      editedAnimalId = this.props.match.params.animalId;
      animal = this.props.animals.find(animal => animal._id === editedAnimalId);
    }
    if (!animal) {
      registrationButton = <button id="submit" value="Submit">Register</button>
    } else {
      editButton = <button id="submit" value="Submit">Edit</button>
    }
    return (
      <form name="animal-form" className="create-animal" onSubmit={(event) => this.onSubmit(event, animal, editedAnimalId)}>
        <label htmlFor="name">Name</label>
        <input
          ref={nameInput => { this.nameInput = nameInput }}
          type="text"
          id="name"
          required
          defaultValue={animal ? animal.name : ''} />

        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input
          ref={dateOfBirthInput => { this.dateOfBirthInput = dateOfBirthInput }}
          type="date"
          id="dateOfBirth"
          required
          defaultValue={animal ? animal.dateOfBirth : ''} />
        <label htmlFor="registrationDate">Registration Date</label>

        <input
          ref={registrationDateInput => { this.registrationDateInput = registrationDateInput }}
          type="date"
          id="registrationDate"
          required
          defaultValue={animal ? animal.registrationDate : ''} />

        <label htmlFor="breed">Breed</label>
        <select
          ref={breedInput => { this.breedInput = breedInput }}
          defaultValue={animal ? animal.breed : ''}>
          <option value="cat">cat</option>
          <option value="dog">dog</option>
        </select>

        <label htmlFor="chipId">Chip Id</label>
        <input
          ref={chipIdInput => { this.chipIdInput = chipIdInput }}
          type="text"
          id="chipId"
          maxLength="50"
          defaultValue={animal ? animal.chipId : ''} />
        
        <label htmlFor="color">Color of Fur</label>
        <input
          ref={colorInput => { this.colorInput = colorInput }}
          type="text"
          id="color"
          required
          defaultValue={animal ? animal.color : ''} />

        <label htmlFor="notes">Notes</label>
        <input
          ref={notesInput => { this.notesInput = notesInput }}
          type="text"
          id="notes"
          defaultValue={animal ? animal.notes : ''} />
          
        {registrationButton}
        {editButton}
      </form>
    );
  }
}

export default withRouter(AnimalForm);
