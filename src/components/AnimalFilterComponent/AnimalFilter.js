import React from 'react';

const animalFilter = (props) => {
    return(
    <div>
        <input type="radio" name="breed" value="all"/> all
        <input type="radio" name="breed" value="cat"/> cats
        <input type="radio" name="breed" value="dog"/> dogs
    </div>
    );
}

export default animalFilter;