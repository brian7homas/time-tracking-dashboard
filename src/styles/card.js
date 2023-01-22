import styled from "styled-components";

const CardBackground = styled.div`
  height: 100%;
  display:flex;
  flex-direction:column;
  justify-content: flex-end;
  border-radius: 20px;
`

const CardForeground = styled.div`
  background-color: var(--color-neutral-dark-blue2);
  height: 80%;
  border-radius: 15px 15px 20px 20px;
`
const CardTitle = styled.h6`
  font-size: 1rem;
  font-weight: 500;
`
const CardContentContainer = styled.div`
  margin: 1.5em 2em 5em 2em;
`
const CardHeader = styled.div`
  display:flex;
  align-items: center;
  justify-content:space-between;
`
const CardMenuDotContainer = styled.div`
  display:flex;
  justify-content: space-evenly;
`
const CardMenuDot = styled.div`
  height:4px;
  width:4px;
  border-radius: 50px;
  background-color: white;
  margin: 0 .12em;
`
const CardBody = styled.div`
  margin-top: 2.2em;
`
const CardDataMain = styled.h1`
  font-size: 3.4rem;
  font-weight: 300;
`
const CardDataSecondary = styled.p`
  margin: .75em auto;
  font-size: .8rem;
  color: var(--color-neutral-pale-blue);
`
export {CardBackground, CardForeground, CardTitle, CardContentContainer, CardHeader, CardMenuDot, CardMenuDotContainer, CardBody, CardDataMain, CardDataSecondary}