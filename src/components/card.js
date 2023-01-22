import React from 'react';
import {CardBackground, CardForeground, CardTitle, CardContentContainer, CardHeader, CardMenuDot, CardMenuDotContainer, CardBody, CardDataMain, CardDataSecondary} from '../styles/card'
//Img
import WorkIcon from '../images/icon-work.svg'
import PlayIcon from '../images/icon-play.svg'
import StudyIcon from '../images/icon-study.svg'
import ExerciseIcon from '../images/icon-exercise.svg'
import SocialIcon from '../images/icon-social.svg'
import SelfIcon from '../images/icon-self-care.svg'

const Card = ({data, state}) => {
  let image, bg, displayCurrent, displayPrevious, timeframe
  const DisplayData = () =>{
    if(state === 'Daily') {displayCurrent = data.timeframes.daily.current;displayPrevious = data.timeframes.daily.previous; timeframe = 'Yesterday'}
    if(state === 'Weekly') {displayCurrent = data.timeframes.weekly.current;displayPrevious = data.timeframes.weekly.previous; timeframe = 'Last Week'}
    if(state === 'Monthly') {displayCurrent = data.timeframes.monthly.current;displayPrevious = data.timeframes.monthly.previous; timeframe = 'Last Month'}
  }
  const CardDesign = () =>{
    // console.log(data.timeframes.weekly)
    if(data.title === 'Work'){
      image = WorkIcon
      bg = 'work'
      DisplayData()
    }
    else if(data.title === 'Play'){
      image = PlayIcon
      bg = 'play'
      DisplayData()
    }
    else if(data.title === 'Study'){
      image = StudyIcon
      bg = 'study'
      DisplayData()
    }
    else if(data.title === 'Exercise'){
      image = ExerciseIcon
      bg = 'exercise'
      DisplayData()
    }
    else if(data.title === 'Social'){
      image = SocialIcon
      bg = 'social'
      DisplayData()
    }
    else if(data.title === 'Self Care'){
      image = SelfIcon
      bg = 'self'
      DisplayData()
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
              <CardDataMain>{displayCurrent}Hrs</CardDataMain>
              <CardDataSecondary>{timeframe} - {displayPrevious}Hrs</CardDataSecondary>
            </CardBody>
          </CardContentContainer>
        </CardForeground>
      </CardBackground>
    </>
  );
};

export default Card;