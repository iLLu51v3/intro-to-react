// ❗ Create a state to hold whether the homeworld is rendering or not
// ❗ Create a "toggle" click handler to show or remove the homeworld
// ❗ Add the props

// Could improve this to close one card and open another, as well as double click to keep multiple open (to compare info?) (maybe sort then based on characteristics?)

import React, {useState} from 'react'

export default function Character(props) {
  // ❗ Create a state to hold whether the homeworld is rendering or not 
  const [showHomeworld] = useState(false)
  const [showCharacterDetails, setShowCharacterDetails] = useState(false)
  const [showHomeworldDetails, setShowHomeworldDetails] = useState(false)
  const [showDetailsButtons, setShowDetailsButtons] = useState(false) // Show buttons on character-card click --> not showing the data of characteristics

  // const toggleHomeworld = () => {
  //       setShowHomeworld(!showHomeworld)
  //     };

  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const handleCardClick = () => {
    // toggleHomeworld()
    setShowDetailsButtons(!showDetailsButtons)
  }

  const handleCharacterClick = (event) => { // the button using this const controls the show of these details
    event.stopPropagation() // Avoid closing the character-card when clicking on a button
    setShowCharacterDetails(!showCharacterDetails); // sets the details to be true if the button is clicked --> it wouldnt show the details otherwise
  }

  const handleHomeworldClick = (event) => { // the button using this const controls the show of these details
    event.stopPropagation() // Avoid closing the character-card when clicking on a button
    setShowHomeworldDetails(!showHomeworldDetails)
  }
// ❗ Add the props
  return (
    <div className="character-card" onClick={handleCardClick}>
      {/* Use the same markup with the same attributes as in the mock */}
      <h3 className="character-name">{props.name}</h3>
        {showDetailsButtons && (
          <>
          {showHomeworld &&(<p>Homeworld: {props.homeworld.name}</p>)} {/* Line is unnecessary, but required for reaching MVP*/}
          <button onClick={handleCharacterClick}className="character-details"> Chracteristics of {props.name} </button>
          {showCharacterDetails && ( // an 'if' conditional but concise (if showCharacterDetails is true, the following will render --> opening up the details )
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
              <p>Homeworld: {props.homeworld.name}</p>
            </>
          )}
          <button onClick={handleHomeworldClick}className="character-planet">Details on {props.homeworld.name}</button> 
          {showHomeworldDetails && (
            <>
              <p>Climate: {props.climate}</p>
              <p>Created: {props.created}</p>
              <p>Diameter: {props.diameter}</p>
              <p>Edited: {props.edited}</p>
              <p>Gravity: {props.gravity}</p>
              <p>Orbital Period: {props.orbitalPeriod}</p>
              <p>Population: {props.population}</p>
              <p>Rotation Period: {props.rotationPeriod}</p>
              <p>Surface Water: {props.surfaceWater}</p>
              <p>Terrain: {props.terrain}</p>   
            </>
          )}
        </>
      )}
    </div>
  );
}

// __________________________Previous Attempt____________________________________//


// import React, {useState} from 'react'

// function Character(props) { 
//   const [showHomeworld, setShowHomeworld] = useState(false);
//   const [showCharacterDetails, setShowCharacterDetails] = useState(false);
//   const toggleHomeworld = () => {
//     setShowHomeworld(!showHomeworld);
//   };

//   const toggleCharacterDetails = () => {
//     setShowCharacterDetails(!showCharacterDetails);
//   };
//   const handleCardClick = () => {
//     toggleHomeworld();
//     toggleCharacterDetails();
//   };
//   return (
//     <div className="character-card" onClick={handleCardClick}>
//       {/* Use the same markup with the same attributes as in the mock */}
//       <h3 className="character-name">{props.name}</h3>
//       <h4 className="character-details" onClick={toggleCharacterDetails}> Details:</h4>
//       {showCharacterDetails && (
//         <>
//           <p>Birth Year: {props.birthYear}</p>
//           <p>Created: {props.created}</p>
//           <p>Edited: {props.edited}</p>
//           <p>Eye Color: {props.eyeColor}</p>
//           <p>Gender: {props.gender}</p>
//           <p>Hair Color: {props.hairColor}</p>
//           <p>Height: {props.height}</p>
//           <p>Mass: {props.mass}</p>
//           <p>Skin Color: {props.skinColor}</p>
//         </>
//       )}
//       {showHomeworld && (
//         <p className="character-planet">Planet:{props.homeworld.name}</p>
//       )}

//     </div>
//   );
// }

// export default Character;