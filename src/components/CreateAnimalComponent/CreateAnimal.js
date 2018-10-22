import React, {Component} from 'react';

class CreateAnimal extends Component {
    render() {
        return(
            <div>
                <label htmlFor="name">Name</label>
                <input ref={(nameInput)=>{this.nameInput=nameInput}} type="text" id="name"></input>
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <input ref={(dateOfBirthInput) => { this.dateOfBirthInput = dateOfBirthInput }} type="text" id="dateOfBirth"></input>
                <label htmlFor="registrationDate">Registration Date</label>
                <input ref={(registrationDateInput) => { this.registrationDateInput = registrationDateInput }} type="text" id="registrationDate"></input>
                <label htmlFor="breed">Breed</label>
                <input ref={(breedInput) => { this.breedInput = breedInput }} type="text" id="breed"></input>
                <label htmlFor="chipId">Chip Id</label>
                <input ref={(chipIdInput) => { this.chipIdInput = chipIdInput }} type="text" id="chipId"></input>
                <label htmlFor="color">Color of Fur</label>
                <input ref={(colorInput) => { this.colorInput = colorInput }} type="text" id="color"></input>
                <label htmlFor="notes">Notes</label>
                <input ref={(notesInput) => { this.notesInput = notesInput }} type="text" id="notes"></input>
                <button onClick={() => this.props.onRegister({ name: this.nameInput.value,
                    dateOfBirth: this.dateOfBirthInput.value, registrationDate: this.registrationDateInput.value,
                    breed: this.breedInput.value, chipId: this.chipIdInput.value, color: this.colorInput.value,
                    notes: this.notesInput.value})}>Register</button>
            </div>
        );
    }
}

export default CreateAnimal;