import React from 'react';

const animalFilter = props => {
  return (
    <div>
      <input
        type="radio"
        name="breed"
        value="all"
        checked={props.selectedFilter === 'all'}
        onChange={props.onAnimalFilterChange} />
      <label>all</label>
      <input
        type="radio"
        name="breed"
        value="cat"
        checked={props.selectedFilter === 'cat'}
        onChange={props.onAnimalFilterChange} />
      <label>cats</label>
      <input
        type="radio"
        name="breed"
        value="dog"
        checked={props.selectedFilter === 'dog'}
        onChange={props.onAnimalFilterChange} />
      <label>dogs</label>
    </div>
  );
}

export default animalFilter;
