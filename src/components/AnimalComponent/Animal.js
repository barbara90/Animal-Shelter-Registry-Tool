import React from 'react';

const animal = (props) => {
    return(
        <div>
            <span>{props.name}</span>
            <span>{props.dateOfBirth}</span>
            <span>{props.registrationDate}</span>
            <span>{props.breed}</span>
            <span>{props.chipId}</span>
            <span>{props.color}</span>
            <span>{props.notes}</span>
        </div>
    );
};

export default animal;