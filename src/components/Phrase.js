import React from 'react'
import styled from '@emotion/styled'


const ContainPhrase = styled.div`
  padding: 3rem;
  border-radius: .5rem;
  background-color: #fff;
  max-width: 800px;
  margin: 20% 1rem 0 1rem;

  h1 {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;

    &::before {
      content: open-quote;
      font-size: 10rem;
      color: black;
      position: absolute;
      left: -1rem;
      top: -3rem;
    }
  }

  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.3rem;
    text-align: right;
    color: #666;
    margin-top: 2rem;
    font-weight: bold;
  }
`;

const Phrase = ({ phrase }) => {

  // Cargar una frase

  return (
    <ContainPhrase>
      <h1>{phrase.quote}</h1>
      <p>{phrase.author}</p>
    </ContainPhrase>
  )
}

export default Phrase
