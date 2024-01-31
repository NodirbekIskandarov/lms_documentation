import React from 'react'
import { CardBottomDiv, CardsElements } from './styles'

const CommentariesCards = ({p,bottomP, bottomH5, bottomImg, dataAos}) => {
    return (
        <CardsElements data-aos={dataAos}>
            <p className='cards__element-paragriph'>{p} </p>
            <hr className='line__border'/>
            <CardBottomDiv>
                <div>
                    <h5 className='bottom__div-head5'>{bottomH5}</h5>
                    <p>{bottomP}</p>
                </div>

                <div>
                    <img width={56} height={56} src={bottomImg} alt="dsfasdf" />
                </div>
            </CardBottomDiv>
        </CardsElements>
    )
}

export default CommentariesCards