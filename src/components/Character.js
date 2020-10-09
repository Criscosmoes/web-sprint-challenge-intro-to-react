// Write your Character component here
import React from 'react'; 
import styled from 'styled-components'; 

const StyledCharacter = styled.div`

& {
    display: flex; 
    justify-content: space-between;
    align-items: center;
    width: 98%; 
    border: 2px solid black;  
    margin: 1%;  
}

.name {
    font-size: 4rem; 
    font-weight: bolder;
    letter-spacing: 2px;
    margin: .5%;  

}

.height {
    font-size: 2.2rem; 
    padding: .5%; 
    border-radius: 33px 60px; 
    width: 8%; 
    margin-right: 2%;
    background: #909090;
    color: black; 
}

`

const Character = (props) => {
    

    return (
        <StyledCharacter>
            <div className="name">{props.name}</div>
            <div className="height">{props.birthYear}</div>
        </StyledCharacter>
    )
}


export default Character; 