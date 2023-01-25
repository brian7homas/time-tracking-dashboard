import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  :root{
    --color-primary-blue: hsl(246, 80%, 60%);
    --color-primary-work: hsl(15,100%,68%);
    --color-primary-study: hsl(348, 100%, 68%);
    --color-primary-play: hsl(195, 74%, 62%);
    --color-primary-exercise: hsl(145, 58%, 55%);
    --color-primary-social: hsl(264, 64%, 52%);
    --color-primary-self: hsl(43, 84%, 65%);
    --color-neutral-dark-blue1: hsl(226, 43%, 10%);
    --color-neutral-dark-blue2: hsl(235, 46%, 20%);
    --color-neutral-blue: hsl(235, 45%, 61%);
    --color-neutral-pale-blue: hsl(236, 100%, 87%);
  }
  body{
    background-color: var(--color-neutral-dark-blue1);
    color: white;
    font-family: "Rubik";
  }
  #active{
    color: white;
    transition: color .2s;
  }
  .card{
    cursor: pointer;
    :hover{
      background-color: var(--color-neutral-blue);
    }
    transition: background-color .2s;
  }
`

export default function Layout({ children }){
  return (
    <React.Fragment>
      <GlobalStyle>
        { children }
      </GlobalStyle>
    </React.Fragment>
  )
}