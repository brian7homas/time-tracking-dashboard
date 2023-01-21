import styled from "styled-components"
const MainCard = styled.div`
  grid-area: main;
  background-color: var(--color-neutral-dark-blue2);
  border-radius: 20px;
`
const MainContent = styled.div`
  border-radius: 20px 20px 15px 15px;
  padding: 1.5rem 1.65rem 4.5rem 1.65rem;
  background-color: var(--color-primary-blue);
`
const MainMenuContainer = styled.div`
  padding:0 1.65em;
  margin: 2.5rem 0;
`
const MainImage = styled.img`
  border-radius: 50% 50%;
  border: white 3px solid;
  margin-bottom: 2em;
`
const MainMenuList = styled.ul`
  list-style:none;
`
const MainMenuListItem = styled.li`
  font-size: 1rem;
  font-weight: 300;
  margin: 1rem 0;
`
const MainCopy = styled.p`
  color: var(--color-neutral-pale-blue);
  font-size: .75rem;
  font-weight: 300;
  margin:1.5rem 0 1rem 0;
`
export {MainCard, MainContent, MainMenuContainer, MainImage, MainMenuList, MainCopy, MainMenuListItem}