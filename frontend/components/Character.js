// ❗ Create a state to hold whether the homeworld is rendering or not
// ❗ Create a "toggle" click handler to show or remove the homeworld
// ❗ Add the props
// I tried to set "Details:" to show only after the character card onclick was performed to then have character details be presented, but from what I could figure, doing so whould require changing the character-card's onclick code, thus losing out on holding 100% completion; Other possibilities would require ummmm... a bunch of conditional if statments and/or click count conditional parameters. 
import React, {useState} from 'react'

function Character(props) { 
  const [showHomeworld, setShowHomeworld] = useState(false);
  const [showCharacterDetails, setShowCharacterDetails] = useState(false);
  const toggleHomeworld = () => {
    setShowHomeworld(!showHomeworld);
  };
  const toggleCharacterDetails = () => {
    setShowCharacterDetails(!showCharacterDetails);
  };
  const handleCardClick = () => {
    toggleHomeworld();
    toggleCharacterDetails();
  };
  return (
    <div className="character-card" onClick={handleCardClick}>
      {/* Use the same markup with the same attributes as in the mock */}
      <h3 className="character-name">{props.name}</h3>
      <h4 className="character-details" onClick={toggleCharacterDetails}> Details:</h4>
      {showCharacterDetails && (
        <>
          <p>Birth Year: {props.birthYear}</p>
          <p>Created: {props.created}</p>
          <p>Edited: {props.edited}</p>
          <p>Eye Color: {props.eyeColor}</p>
          <p>Gender: {props.gender}</p>
          <p>Hair Color: {props.hairColor}</p>
          <p>Height: {props.height}</p>
          <p>Mass: {props.mass}</p>
          <p>Skin Color: {props.skinColor}</p>
        </>
      )}
      {showHomeworld && (
        <p className="character-planet">Planet:{props.homeworld.name}</p>
      )}
      
    </div>
  );
}

export default Character;
