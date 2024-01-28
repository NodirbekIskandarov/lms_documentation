import React from 'react'
import { CommentariesSection } from './styles'
import { Head3, Head3TitleContainer } from '../howUsing/styles'
import { TitleComponent } from '../management_system/styles'

const Commentaries = () => {
    return (
        <CommentariesSection>
            <div>
                <Head3TitleContainer>
                    <Head3>Axborot tizimi yuzasidan fikr va  mulohazalar</Head3>
                    <TitleComponent>Oliy ta’lim muassasalari professor-o‘qituvchilari, xodimlari
                        va talabalari tomonidan tizim bo‘yicha fikr va mulohazalar</TitleComponent>
                </Head3TitleContainer>

                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </CommentariesSection>
    )
}

export default Commentaries