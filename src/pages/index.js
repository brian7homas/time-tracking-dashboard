import * as React from "react"
import { useState, useEffect, useRef  } from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import gsap from 'gsap'
//Components
import { Seo } from "../components/Seo"
import Card from "../components/card"
//Styles
import {Container, CardsContainer} from '../styles/containers'
import {MainCard, MainContent, MainMenuContainer, MainImage, MainMenuList, MainCopy, MainMenuListItem, MainCardHeader} from '../styles/main-card'
//Img
import UserImage from '../images/image-jeremy.png'
//Animation timeline
const MainDataDisplay = gsap.timeline({defaults:{
  stagger:{each: .025, ease: 'power3.in'},
  ease: 'power3.inOut'
}})

const IndexPage = () => {
  const [interval, setInterval] = useState('Daily')
  const previousRef = useRef(null)
  const secondaryRef = useRef([])
  const menu = ['Daily', 'Weekly', 'Monthly']
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
  useEffect(() =>{
    previousRef.current = interval
    MainDataDisplay.fromTo(`#${interval}`, .25,{y:'-4.5px', opacity: 0},{y:0,opacity:1})
  }, [interval])
  return (
    <>
      <Layout/>
      <Container>
        <CardsContainer>
          <MainCard>
            <MainContent>
              <MainImage src={UserImage} alt="user image" />
              <MainCopy>Report for</MainCopy>
              <MainCardHeader>Jeremy Robertson</MainCardHeader>
            </MainContent>
            <MainMenuContainer>
              <MainMenuList>
                {
                  menu.map((index) => {
                    return(
                      <MainMenuListItem
                        key={index}
                        className='list-item'
                        id={interval !== index ? '' : 'active'}
                        ref={(element) => {
                          secondaryRef.current[index] = element
                        }} 
                        onClick={() =>{
                          if(interval !== index){
                            gsap.to(`#${interval}`, .2,{opacity:0, y:'-4.5', stagger: {each: .025, from: 'end', axis: 'x', ease: 'power3.in'}})
                            .then(() =>{
                              setInterval(function() {return index})
                            })
                          }
                        }}>{index}</MainMenuListItem>
                    )
                  })
                }
              </MainMenuList>
            </MainMenuContainer>
          </MainCard>
          {
            data.allDataJson.nodes.map(data => {
              return(
                <Card 
                  key={data.title}
                  data={data}
                  state={interval}
                  previousRef={previousRef}
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
