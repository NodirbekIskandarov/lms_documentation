import React from 'react'
import { IntegrationCardsDiv } from './styled'

const IntegrationCards = ({imgSrc}) => {
  return (
    <IntegrationCardsDiv>
        <div className='card__imgs'>
            <img src={imgSrc} alt="" />
        </div>
    </IntegrationCardsDiv>
  )
}

export default IntegrationCards