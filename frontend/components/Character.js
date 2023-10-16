import React, {useState} from 'react'

function Character(props) { // ❗ Add the props
  const [homeworld, setHomeworld] = useState(false);
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const toggleHomeworld = () => {
    setHomeworld(!homeworld);
  };
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  return (
    <div>
      {/* Use the same markup with the same attributes as in the mock */}
      <h3>{props.name}</h3>
      <p>Birth Year: {props.birthYear}</p>
      <p>Created: {props.created}</p>
      <p>Edited: {props.edited}</p>
      <p>Eye Color: {props.eyeColor}</p>
      <p>Gender: {props.gender}</p>
      <p>Hair Color: {props.hairColor}</p>
      <p>Height: {props.height}</p>
      <p>Mass: {props.mass}</p>
      <p>Skin Color: {props.skinColor}</p>
      <button onClick={toggleHomeworld}>{homeworld ? 'Hide Homeworld' : 'Show Homeworld'}</button>
      {homeworld && (
        <p>Homeworld: {props.homeworld.name}</p>
      )}
    </div>
  )
}

export default Character
