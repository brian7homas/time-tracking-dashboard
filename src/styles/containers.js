import styled from 'styled-components'
const Container = styled.main`
  // border: solid 2px red;
  height: 100vh;
  display:flex;
  align-items: center;
  justify-content: center;
`
const CardsContainer = styled.div`
  // border: solid 2px green;
  display:grid;
  max-width: 800px;
  // place-items: center center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
  "main one two three"
  "main four five six"
`
export {Container, CardsContainer}