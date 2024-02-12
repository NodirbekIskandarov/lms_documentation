import React from 'react'
import { FaqsBoxComponent, FaqsChildComponent, FaqsImage, FaqsImageComponent, FaqsMainComponent, FaqsTextH1, FaqsTextP, FaqsTextPart } from './styles'

function Faqs() {
  return (
    <FaqsMainComponent>
        <FaqsChildComponent>
            <FaqsBoxComponent>
                <FaqsTextPart>
                    <FaqsTextH1>
                        Biz sizni qo'llab-quvvatlash uchun shu yerdamiz
                    </FaqsTextH1>
                    <FaqsTextP>
                        Oliy ta’lim jarayonlarini boshqarish - LMS axborot tizimidan foydalanish bo’yicha tez-tez beriladigan savollarga javoblar
                    </FaqsTextP>
                </FaqsTextPart>
                <FaqsImageComponent>
                    <FaqsImage src='https://i2-prod.mirror.co.uk/incoming/article16194499.ece/ALTERNATES/s1200b/0_Ana-de-Armas.jpg' alt='image'/>
                </FaqsImageComponent>
            </FaqsBoxComponent>
        </FaqsChildComponent>
    </FaqsMainComponent>
  )
}

export default Faqs