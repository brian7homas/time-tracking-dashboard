import styled from "styled-components"
const breakpoints = [376, 411, 576, 707, 768, 845, 1107, 1200]
const mq = breakpoints.map(
  bp => `@media (max-width: ${bp}px)`
)
const MainCard = styled.div`
  grid-area: main;
  background-color: var(--color-neutral-dark-blue2);
  border-radius: 20px;
`
const MainContent = styled.div`
  border-radius: 20px 20px 15px 15px;
  padding: 1.5rem 1.65rem 4.5rem 1.65rem;
  background-color: var(--color-primary-blue);
  ${mq[6]}{
    padding: 1.5rem 1.65rem .5rem 1.65rem;
  }
  ${mq[3]}{
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.65rem;
  }
  ${mq[0]}{
    padding: 1rem .65rem;
  }
`
const MainMenuContainer = styled.div`
  padding:0 1.65em;
  margin: 2.5rem 0;
  ${mq[6]}{
    margin: .75rem 0;
  }
`
const MainImage = styled.img`
  border-radius: 50% 50%;
  border: white 3px solid;
  margin: 1em 0;
  max-width: 5em;
  ${mq[4]}{
    margin-bottom: 1em;
  }
  ${mq[2]}{
    max-width:4em;
  }
`
const MainMenuList = styled.ul`
  list-style:none;
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  ${mq[6]}{
    flex-direction: row;
    justify-content: space-between;
  }
`
const MainMenuListItem = styled.li`
  font-size: 1rem;
  font-weight: 300;
  margin: 1rem 0;
  cursor: pointer;
  color: var(--color-neutral-pale-blue);
  :hover{
    color: white;
  }
`
const MainCopy = styled.p`
  color: var(--color-neutral-pale-blue);
  font-size: .75rem;
  font-weight: 300;
  margin:1.5rem 0 1rem 0;
  ${mq[5]}{
    margin:.05rem 0;
  }
  ${mq[4]}{
    margin:.15rem 0;
  }
`
const MainCardHeader = styled.h1`
  font-size: clamp(1rem, 3.5vw, 3.4rem);
  font-weight: 300;
  ${mq[6]}{
    margin-bottom: .5em;
  }
`
export {MainCard, MainContent, MainMenuContainer, MainImage, MainMenuList, MainCopy, MainMenuListItem, MainCardHeader}