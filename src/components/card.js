import React from 'react';
import {CardBackground, CardForeground, CardTitle, CardContentContainer, CardHeader, CardMenuDot, CardMenuDotContainer, CardBody, CardDataMain, CardDataSecondary} from '../styles/card'
//Img
import WorkIcon from '../images/icon-work.svg'
import PlayIcon from '../images/icon-play.svg'
import StudyIcon from '../images/icon-study.svg'
import ExerciseIcon from '../images/icon-exercise.svg'
import SocialIcon from '../images/icon-social.svg'
import SelfIcon from '../images/icon-self-care.svg'

const Card = ({data}) => {
  let image, bg
  const CardDesign = () =>{
    // console.log(data.timeframes.weekly)
    if(data.title === 'Work'){
      image = WorkIcon
      bg = 'work'
    }
    else if(data.title === 'Play'){
      image = PlayIcon
      bg = 'play'
    }
    else if(data.title === 'Study'){
      image = StudyIcon
      bg = 'study'
    }
    else if(data.title === 'Exercise'){
      image = ExerciseIcon
      bg = 'exercise'
    }
    else if(data.title === 'Social'){
      image = SocialIcon
      bg = 'social'
    }
    else if(data.title === 'Self Care'){
      image = SelfIcon
      bg = 'self'
    }
  }
  CardDesign()
  return (
    <>
      <CardBackground style={
          {
            'backgroundImage': `url(${image})`,
            'backgroundRepeat': 'no-repeat',
            'backgroundPosition': '80% top',
            'backgroundColor': `var(--color-primary-${bg})`
          }
        }>
        <CardForeground>
          <CardContentContainer>
            <CardHeader>
              <CardTitle>{data.title}</CardTitle>
              <CardMenuDotContainer>
                <CardMenuDot />
                <CardMenuDot />
                <CardMenuDot />
              </CardMenuDotContainer>
            </CardHeader>
            <CardBody>
              <CardDataMain>{data.timeframes.weekly.current}Hrs</CardDataMain>
              <CardDataSecondary>Last Week - {data.timeframes.weekly.previous}Hrs</CardDataSecondary>
            </CardBody>
          </CardContentContainer>
        </CardForeground>
      </CardBackground>
    </>
  );
};

export default Card;