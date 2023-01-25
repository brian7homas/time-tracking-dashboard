# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.brianthomas-develops.com/projects/time-tracker-dashboard/).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![Time Tracker Dashboard](src/images/ttd.gif)


### Links

- Solution URL: [Add solution URL here](https://lucent-centaur-a88c6d.netlify.app)
- Live Site URL [here](https://www.brianthomas-develops.com/projects/time-tracker-dashboard/)

## My process

### Built with

- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow
- [Gatsby](https://www.gatsbyjs.com/) - React framework
- [GSAP](https://greensock.com/gsap/) - Animation library
- [Styled Components](https://styled-components.com/) - For styles


### What I learned

Gatsby JS dev engine is easy to use except when it doesn't update the browser cache. If this happens I found that if you stop the dev server and run ```gatsby clean``` should take care of any caching issues.

I over thought the card data animations.

GSAP is easy to use but using it with React will test your state managing skills. I eventually found that the only animations I needed to complete card data fade in/out lives in the useEffect hook on the main index page where interval is the id of the current data set being displayed on the page.

```
  MainDataDisplay.fromTo(`.${interval}`, .25,{y:'-4.5px', opacity: 0},{y:0,opacity:1})
```

The exit animation lives in the ```onClick()``` function for each of the menu list items which I was able to shorten by iterating through menu array.

```const menu = ['Daily', 'Weekly', 'Monthly']```

``` 
  {
    menu.map((index) => {
      return(
        <MainMenuListItem
          key={index}
          id={interval !== index ? `inactive-${index}` : 'active'}
          ref={(element) => {
            secondaryRef.current[index] = element
          }} 
          onClick={() =>{
            if(interval !== index){
              gsap.to(`.${interval}`, .2,{opacity:0, y:'-4.5', stagger: {each: .025, from: 'end', axis: 'x', ease: 'power3.in'}})
              .then(() =>{
                setInterval(function() {return index})
              })
            }
          }}>{index}</MainMenuListItem>
      )
    })
  }
```

Graphql became helpful when trying to access the json data. I  figured out that Graphql does not source json files by default. You have to include the ```gatsby-source-filesystem``` and the ```gatsby-transformer-json``` plugin. Once I installed both plugins I was able to query Graphql for json data.

```
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
  ```


### Continued development

I love building and designing GSAP animations, in the future I plan to implement it somehow in every project to improve my frontend skills. I'll also be continuing to learn more about managing state in React when building animations.


### Useful resources

- [How To Use Refs In React With Hooks](https://blog.webdevsimplified.com/2020-05/use-ref/) - This helped with tracking which elements needed a enter/exit animation 
- [GSAP Staggers](https://greensock.com/docs/v3/Staggers) - Instead of using a basic fade in/out for the card data. This documentation helped with making the animation a bit more unique.

## Author

- Website - [Brian](https://www.brianthomas-develops.com)
- Frontend Mentor - [@joyreacher](https://www.frontendmentor.io/profile/joyreacher)
- LinkedIn - [Brian Thomas](www.linkedin.com/in/brianthomas--develops)
