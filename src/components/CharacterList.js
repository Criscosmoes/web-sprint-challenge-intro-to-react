import React from 'react'; 
import Character from './Character'; 
import './CharacterList.css'; 


const CharacterList = ({characterList}) => {

    const charList = characterList.map(cur => {
        return <Character key={cur.created} name={cur.name} birthYear={cur.birth_year} /> 
    }); 



    return (
        <div className="character-container">
            {charList}
        </div>
    )
}


export default CharacterList; 