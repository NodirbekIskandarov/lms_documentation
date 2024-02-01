import React from 'react'
import { Integration } from './styled'
import { Head3, Head3TitleContainer } from '../howUsing/styles'
import { TitleComponent } from '../management_system/styles'
import IntegrationCards from './IntegrationCards'

const LMSIntegration = () => {
    return (
        <Integration>
            <Head3TitleContainer>
                <Head3>LMS axborot tizimi integratsiyasi</Head3>
                <TitleComponent>Oliy ta’lim jarayonlarini boshqarish – LMS axborot tizimi 100 dan ortiq boshqa axborot tizimlari bilan integratsiya qilingan.
                </TitleComponent>
            </Head3TitleContainer>
            <div>
                <div className='integration__flex'>
                    <IntegrationCards imgSrc={"https://aloqabank.uz/upload/media/images/social.png"} />
                    <IntegrationCards imgSrc={"https://aloqabank.uz/upload/media/images/social.png"} />
                    <IntegrationCards imgSrc={"https://aloqabank.uz/upload/media/images/social.png"} />
                    <IntegrationCards imgSrc={"https://aloqabank.uz/upload/media/images/social.png"} />
                </div>

                <div className='integration__flex'>
                    <IntegrationCards imgSrc={"https://aloqabank.uz/upload/media/images/social.png"} />
                    <IntegrationCards imgSrc={"https://aloqabank.uz/upload/media/images/social.png"} />
                    <IntegrationCards imgSrc={"https://aloqabank.uz/upload/media/images/social.png"} />
                    <IntegrationCards imgSrc={"https://aloqabank.uz/upload/media/images/social.png"} />
                </div>
            </div>
        </Integration>
    )
}

export default LMSIntegration