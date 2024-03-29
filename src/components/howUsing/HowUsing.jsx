import React from 'react'

import { Head3, Head3TitleContainer, HowUsingContainers, HowUsingEducation, HowUsingFlex, HowUsingHead4, HowUsingHead5, HowUsingImg, HowUsingParagrifs, HowUsingSection, HowUsingWrap } from './styles'
import { TitleComponent } from '../management_system/styles'

const HowUsing = () => {
  return (
    <HowUsingSection>

      <Head3TitleContainer className='how__using-title'>
        <Head3>Tizimdan qanday foydalanasiz?</Head3>
        <TitleComponent>
          O‘zbekiston Respublikasi oliy ta'lim muassasalari mas'ul xodimlari
          tomonidan amalga oshiriladigan ishlar:
        </TitleComponent>
      </Head3TitleContainer>

      <HowUsingContainers>
        <HowUsingEducation data-aos="fade-down-right"  className='how__using-containers how__using-hover'>
          <div>
            <div>
              <HowUsingHead4>LMS bilan ta’lim muassasasi</HowUsingHead4>

              <HowUsingParagrifs>Boshqaruvning barcha sub’ektlari, shu jumladan talabalar va ularning ota-onalarini axborotga bo‘lgan ehtiyojini qondirish. Boshqaruv xodimlari tomonidan ma’lumotlarni tahlil qilish va qarorlar qabul qilish samaradorligini oshirish.</HowUsingParagrifs>
            </div>

            <div className='how__using-img education__img'>
              <HowUsingImg className='hover__img' src="	https://hemis.uz/_nuxt/img/rocket.283d4a7.png" alt="LMS" />
            </div>
          </div>
        </HowUsingEducation>

        <HowUsingWrap >
          <div className='how__using-wrap' >

            <HowUsingFlex data-aos="fade-down-left" className='how__using-containers how__using-hover'>

              <div className='img__paragrifs-containers'>
                <HowUsingHead5>LMS Mobile bilan ta’lim ma’lumotlaringiz doimo siz bilan!</HowUsingHead5>

                <HowUsingParagrifs>10 ga yaqin ma’lumotlarni elektron ko‘rinishda olish hamda qaror qabul qilishda sub’ektiv omillarning ta’sirini bartaraf etish mumkin
                </HowUsingParagrifs>
              </div>

              <div className='img__paragrifs-containers how__using-img'>
                <HowUsingImg className='hover__img' src="https://hemis.uz/_nuxt/img/locker.21eea62.png" alt="LMS" />
              </div>
            </HowUsingFlex>

            <HowUsingFlex data-aos="fade-up-left" className='how__using-containers how__using-hover'>

              <div className='img__paragrifs-containers'>
                <HowUsingHead5>Ma’lumotlar va fayllar xavfsizligi</HowUsingHead5>

                <HowUsingParagrifs>Barcha ma’lumotlar zaxiralanadi va ta’lim jarayonidagi axborot oqimlari maqsadli tashkil etiladi
                </HowUsingParagrifs>
              </div>

              <div className='img__paragrifs-containers how__using-img'>
                <HowUsingImg className='hover__img' src="https://hemis.uz/_nuxt/img/lock.9653830.png" alt="LMS" />
              </div>
            </HowUsingFlex>

          </div>
        </HowUsingWrap>
      </HowUsingContainers>

    </HowUsingSection>
  )
}

export default HowUsing