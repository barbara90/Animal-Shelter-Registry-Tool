import React from 'react';
import Animal from '../AnimalComponent/Animal';

const animalList = (props) => {
    return(
        <ul>
            {props.animals.map(animal => {
                return(
                    <li>
                        <Animal
                            name={animal.name}
                            dateOfBirth={animal.dateOfBirth}
                            registrationDate={animal.registrationDate}
                            breed={animal.breed}
                            chipId={animal.chipId}
                            color={animal.color}
                            notes={animal.notes}
                        />
                    </li>
                )
            })}
        </ul>
    );
}

export default animalList;