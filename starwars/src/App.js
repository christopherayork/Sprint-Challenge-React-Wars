import React, { useState, useEffect } from 'react';
import './App.css';
import PersonCard from './components/PersonCard.js';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
`;
const Placeholder = styled.div`

`;

const axios = require('axios');
const defQuery = 'https://swapi.co/api/people/';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  let [query, setQuery] = useState(defQuery);
  let [content, setContent] = useState({});

  useEffect(() => {
    axios.get(query)
        .then(res => {
          setContent(res);
        })
        .catch(e => console.log(e));
  }, [query]);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Container>
        {(() => {
          if( content.hasOwnProperty('data') && content.data.hasOwnProperty('results') && Array.isArray(content.data.results)) {
            return content.data.results.map(person => <PersonCard person={person}/>)
          }
          else return <Placeholder>Loading...</Placeholder>;
        })()}
      </Container>
    </div>
  );
}

export default App;
