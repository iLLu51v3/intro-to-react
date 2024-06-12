// ❗ Create state to hold the data from the API
// ❗ Create effects to fetch the data and put it in state
/* ❗ Map over the data in state, rendering a Character at each iteration */

import React from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() { 
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App







// ______________________________________________________________//


// import React, {useState, useEffect} from 'react';
// import axios from 'axios';
// import Character from './Character';

// const urlPlanets = 'http://localhost:9009/api/planets';
// const urlPeople = 'http://localhost:9009/api/people';

// function App() {
//   // const [planet, setPlanet] = useState();
//   const [character, setCharacter] = useState();
  
//   useEffect(() => {
//     Promise.all([axios.get(urlPlanets), axios.get(urlPeople)])
//       .then(([planetResponse, characterResponse]) => {
//         const planetData = planetResponse.data;
//         const characterData = characterResponse.data;

//         const updatedCharacter = characterData.map(character => {
//           const homeworld = planetData.find(planet => planet.id === character.homeworld);
//           return { ...character, homeworld };
//         });
      
//         setCharacter(updatedCharacter);
//       })
//       .catch(error => {
//           console.log(error);
//         });
//     }, []);

//   return (
//     <div>
//       <h2>Star Wars Characters</h2>
//       {character && character.map(character => (
//         <Character
//         key={character.id}
//         name={character.name}
//         birthYear={character.birth_year}
//         created={character.created}
//         edited={character.edited}
//         eyeColor={character.eye_color}
//         gender={character.gender}
//         hairColor={character.hair_color}
//         height={character.height}
//         mass={character.mass}
//         skinColor={character.skin_color}
//         homeworld={character.homeworld}
//         />
//       ))}
//     </div>
//   );
// }

// export default App;

// // ❗ DO NOT CHANGE THE CODE  BELOW
// if (typeof module !== 'undefined' && module.exports) module.exports = App
