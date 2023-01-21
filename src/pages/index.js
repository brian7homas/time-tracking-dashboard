import * as React from "react"
import Layout from "../components/layout"
import styled from 'styled-components'
//Styles
import {Container, CardsContainer} from '../styles/containers'
import {MainCard, MainContent, MainMenuContainer, MainImage, MainMenuList, MainCopy, MainMenuListItem} from '../styles/main-card'
import {CardHeader} from '../styles/card'

const IndexPage = () => {
  return (
    <>
      <Layout/>
      <Container>
        <CardsContainer>
          <MainCard>
            <MainContent>
              <MainImage src="https://via.placeholder.com/50" alt="" />
              <MainCopy>Report for</MainCopy>
              <CardHeader>Jeremy Robertson</CardHeader>
            </MainContent>
            <MainMenuContainer>
              <MainMenuList>
                <MainMenuListItem>Daily</MainMenuListItem>
                <MainMenuListItem>Weekly</MainMenuListItem>
                <MainMenuListItem>Monthly</MainMenuListItem>
              </MainMenuList>
            </MainMenuContainer>
          </MainCard>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
        </CardsContainer>
      </Container>
    </>
  )
}

export default IndexPage

export const Head = () => <SEO title='Time Tracking Dashboard'></SEO>
