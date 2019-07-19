import React, { useState, useEffect } from 'react';
import './App.css';
import PersonCard from './components/PersonCard.js';
import styled from 'styled-components';
import { Palette } from './Palette.js';

const Header = styled.header`
  margin: auto;
  width: 100%;
  background: ${Palette.primary.mid};
  color: ${Palette.primary.shadow};
  text-shadow: 1px 1px 5px #fff;
  border-bottom:
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
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
      <Header>React Wars</Header>
      <Container>
        {(() => {
          if( content.hasOwnProperty('data') && content.data.hasOwnProperty('results') && Array.isArray(content.data.results)) {
            return content.data.results.map((person, index) => <PersonCard person={person} colors={index % 3}/>)
          }
          else return <Placeholder>Loading...</Placeholder>;
        })()}
      </Container>
    </div>
  );
}

export default App;
