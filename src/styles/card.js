import styled from "styled-components";
const breakpoints = [376, 411, 576, 707, 845, 1107, 1200]
const mq = breakpoints.map(
  bp => `@media (max-width: ${bp}px)`
)
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
const CardTitle = styled.h1`
  font-size: 1rem;
  font-weight: 500;
`
const CardContentContainer = styled.div`
  margin: 1.5em 1em 5em 1em;
  ${mq[0]}{
    margin: 1.5em 1em 2.5em 1em;
  }
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
  ${mq[3]}{
    margin-top: 1.2em;
    display:flex;
    justify-content: space-between;
    align-items: baseline;
  }
  ${mq[0]}{
    align-items:baseline;
  }
`
const CardDataMain = styled.h1`
  font-size:clamp(1rem, 4.5vw, 3.4rem);
  font-weight: 300;
  opacity:0;
  ${mq[5]}{
    font-size:clamp(1rem, 6vw, 4.4rem);
  }
  ${mq[3]}{
    font-size:clamp(1rem, 8vw, 6.4rem);
  }
`
const CardDataSecondary = styled.p`
  margin: .75em auto;
  font-size: .8rem;
  color: var(--color-neutral-pale-blue);
  opacity: 0;
  ${mq[3]}{
    margin: .75em 0 0 0;
    font-size: 1rem;
    font-size: .85em;
  }
  ${mq[0]}{
    margin: .75em 0 0 0;
    font-size: 3.5vw;
  }
`
export {CardBackground, CardForeground, CardTitle, CardContentContainer, CardHeader, CardMenuDot, CardMenuDotContainer, CardBody, CardDataMain, CardDataSecondary}