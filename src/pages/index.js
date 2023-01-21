import * as React from "react"
import Layout from "../components/layout"
import styled from 'styled-components'
//Styles
const Container = styled.main`
  display:grid;
  height: 100vh;
  place-items: center center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
  "main one two three"
  "main four five six"
`
const Main = styled.div`
  grid-area: main;
  background-color: var(--color-primary-blue);
`
const IndexPage = () => {
  return (
    <>
      <Layout/>
      <Container>
        <Main>
          <h1>Jeremy Robertson</h1>
        </Main>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
      </Container>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Time Tracking Dashboard</title>
