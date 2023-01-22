import React from 'react';
import {CardBackground, CardForeground, CardTitle, CardContentContainer, CardHeader, CardMenuDot, CardMenuDotContainer, CardBody, CardDataMain, CardDataSecondary} from '../styles/card'

const Card = ({data}) => {
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