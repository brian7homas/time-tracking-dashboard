import * as React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
//Components
import { Seo } from "../components/Seo"
import Card from "../components/card"
//Styles
import {Container, CardsContainer} from '../styles/containers'
import {MainCard, MainContent, MainMenuContainer, MainImage, MainMenuList, MainCopy, MainMenuListItem, MainCardHeader} from '../styles/main-card'
//Img
import UserImage from '../images/image-jeremy.png'

const IndexPage = () => {
  const data  = useStaticQuery(
    graphql`
    query Data{
      allDataJson {
        nodes {
          title
          timeframes {
            weekly {
              current
              previous
            }
            monthly {
              current
              previous
            }
            daily {
              previous
              current
            }
          }
        }
      }
    }
    `
  )
  return (
    <>
      <Layout/>
      <Container>
        <CardsContainer>
          <MainCard>
            <MainContent>
              <MainImage src={UserImage} alt="" />
              <MainCopy>Report for</MainCopy>
              <MainCardHeader>Jeremy Robertson</MainCardHeader>
            </MainContent>
            <MainMenuContainer>
              <MainMenuList>
                <MainMenuListItem>Daily</MainMenuListItem>
                <MainMenuListItem>Weekly</MainMenuListItem>
                <MainMenuListItem>Monthly</MainMenuListItem>
              </MainMenuList>
            </MainMenuContainer>
          </MainCard>
          {
            data.allDataJson.nodes.map(data => {
              return(
                <Card 
                  key={data.title}
                  data={data}
                />
              )
            })
          }
        </CardsContainer>
      </Container>
    </>
  )
}

export default IndexPage

export const Head = () => <Seo title='Time Tracking Dashboard'></Seo>
