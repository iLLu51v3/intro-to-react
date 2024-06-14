// ❗ Create state to hold the data from the API
// ❗ Create effects to fetch the data and put it in state
/* ❗ Map over the data in state, rendering a Character at each iteration */

import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Character from './Character'
// import Planets from './Planets'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

export default function App() { 
  // ❗ Create state to hold the data from the API
  const [character, setCharacter] = useState();
  const [planet, setPlanet] = useState();

  // ❗ Create effects to fetch the data and put it in state
useEffect(() => {
  axios.get(urlPlanets) // As seen in past assignments, we use the .get request to pull the data from the api (urlPlanets) using axios 
  .then((planetRes) => { // .then is creating a promise --> taking the recieved information (data)
    console.log(planetRes)
    const planetData = planetRes.data
    // const updatePlanetData = planetData.map(() => {}) // ❗❗Not required because the planet is/will directly tie to the character/charData props
    setPlanet(planetData)
  })
  .catch(error => {
    console.log(error);
  })
}, [])

useEffect (() => {
  axios.get(urlPeople)
  .then((characterRes) => {
    const charData = characterRes.data
    // ❗Map over charData to include the planetData. Assigning the correct Homeworld to the specific character chosen
    const updateCharData = charData.map(character => {
      const homeworld = planet ? planet.find(planet => planet.id === character.homeworld) : undefined;
      /** sets up homeworld to be the planet/homeworld of the character
       * as long as the planet.id is the same as the character.homeworld
       * character.homworld is the character attribute, with an ID, which has a corresponding homeworld with an ID key and value
       * 
       */
      return {...character, homeworld}
      /** returns the updateCharData with:
       * The same props of character in addition to the props of homeworld
       * 
       */
    })
    setCharacter(updateCharData)
  })
  .catch(error => {
    console.log(error);
  });
},[planet])

  return ( // DevTools: Elements: <body> --> <div> --> <div> --> <div> <p>
    <div>
      <h2>Star Wars Characters</h2>
      <p>Click on a Star Wars Chracter Below to Learn More on Them and Their Homeworld</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
      {character && character.map(character => (
        <Character
        key={character.id}
        name={character.name}
        birthYear={character.birth_year}
        created={character.created}
        edited={character.edited}
        eyeColor={character.eye_color}
        gender={character.gender}
        hairColor={character.hair_color}
        height={character.height}
        mass={character.mass}
        skinColor={character.skin_color}
        homeworld={character.homeworld}
        />
      ))}
    </div>
  )
}


// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App







// __________________________Previous Attempt____________________________________//


// import React, {useState, useEffect} from 'react';
// import axios from 'axios';
// import Character from './Character';

// const urlPlanets = 'http://localhost:9009/api/planets';
// const urlPeople = 'http://localhost:9009/api/people';

// function App() {
//   // const [planet, setPlanet] = useState();
//   const [character, setCharacter] = useState();
  
  // useEffect(() => {
  //   Promise.all([axios.get(urlPlanets), axios.get(urlPeople)])
  //     .then(([planetResponse, characterResponse]) => {
  //       const planetData = planetResponse.data;
  //       const characterData = characterResponse.data;

  //       const updatedCharacter = characterData.map(character => {
  //         const homeworld = planetData.find(planet => planet.id === character.homeworld);
  //         return { ...character, homeworld };
  //       });
      
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
