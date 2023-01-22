import * as React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Card from "../components/card"
//Styles
import {Container, CardsContainer} from '../styles/containers'
import {MainCard, MainContent, MainMenuContainer, MainImage, MainMenuList, MainCopy, MainMenuListItem, MainCardHeader} from '../styles/main-card'

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

export const Head = () => <SEO title='Time Tracking Dashboard'></SEO>
