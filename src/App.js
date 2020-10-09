import React, {useEffect, useState} from 'react';
import axios from 'axios'; 
import './App.css';
import CharacterList from './components/CharacterList';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const[characterList, setCharacterList] = useState([]); 

    useEffect(() => {

        axios.get('https://swapi.dev/api/people/')
        .then(respone => {
            setCharacterList(respone.data.results);
        })
        .catch(error => {
            console.log(error); 
        })


    }, [])





  return (
    <div className="App">
      <h1 className="title">React Wars</h1>
      <CharacterList characterList={characterList} /> 
    </div>
  );
}

export default App;
