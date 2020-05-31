import React, { useState, useEffect } from 'react';
import Phrase from './components/Phrase'

import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  opacity: 80%;
  transition: background-size .3s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {
  const [phrase, setPhrase] = useState({})


  const handleClick = async  () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const phrase = await api.json();
    setPhrase(phrase[0]);

  }

  // Check is Loading phrase
  useEffect(() => {
    handleClick()
  }, [])

  return (
    <Container>
      <Phrase
        phrase={phrase}
      />
      <Button
        onClick={ handleClick }
      >
        Obtener frase
      </Button>
    </Container>
  )
}

export default App;
