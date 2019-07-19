import React from 'react';
import styled from 'styled-components';

const PersonDiv = styled.div`
  width: 25%;
  border: 1px solid gray;
  border-radius: 5px;
  margin: 10px 0;
  
`;

function PersonCard(props) {
  let person = props.person;

  return (
      <PersonDiv>
        <h2>{person.name}</h2>
        <ul>
          <li>Height: {person.height}</li>
          <li>Mass: {person.mass}</li>
          <li>Hair Color: {person.hair_color}</li>
          <li>Skin Color: {person.skin_color}</li>
          <li>Eye Color: {person.eye_color}</li>
          <li>Birth Year: {person.birth_year}</li>
          <li>Gender: {person.gender}</li>
          <li>Homeworld: <a href={person.homeworld}>{person.homeworld}</a></li>
          {/* For homeworld, a future update could be linking it to another page that makes another API Call. It's too taxing to try to make an extra call for every person */}
          {/* Alternatively, I could collect each homeworld link in our results, make the calls, and map through each person to update their homeworld property with the new name */}
        </ul>
      </PersonDiv>
  );
}

export default PersonCard;