import styled from 'styled-components'
const breakpoints = [376, 411, 576, 707, 845, 1107, 1200]
const mq = breakpoints.map(
  bp => `@media (max-width: ${bp}px)`
)
const Container = styled.main`
  height: 100vh;
  display:flex;
  align-items: center;
  justify-content: center;
  ${mq[5]}{
    height: auto;
  }
`
const CardsContainer = styled.div`
  display:grid;
  grid-gap:2em;
  justify-content: center;
  max-width: 1080px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
  "main one two three"
  "main four five six";
  ${mq[5]}{
    grid-template-columns: 1fr 1fr ;
    grid-auto-rows: minmax(100px, auto);
    grid-template-areas:
    "main one"
    "two three"
    "four five"
    "six . ";
  }
  ${mq[3]}{
    grid-template-columns: 1fr ;
    grid-template-rows: auto;
    grid-template-areas:
    "main"
    "one"
    "two"
    "three"
    "four"
    "five"
    "six";
    width: 55%;
    padding:2em 0;
  }
  ${mq[2]}{
    width: 75%;
  }
`
export {Container, CardsContainer}