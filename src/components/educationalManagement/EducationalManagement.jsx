import { EducationalManagementSection } from './styles'
import { Head3, Head3TitleContainer } from '../howUsing/styles'
import { TitleComponent } from '../management_system/styles'
import VerticalTabs from './VerticalTabs'

const EducationalManagement = () => {

    return (
        <EducationalManagementSection>
            <Head3TitleContainer>
                <Head3>Oliy ta’limni boshqarish axborot tizimi </Head3>

                <TitleComponent>O‘zbekiston Respublikasi oliy ta'lim muassasalari mas'ul xodimlari tomonidan amalga oshiriladigan ishlar:
                </TitleComponent>
            </Head3TitleContainer>

            <div>
                <div>
                    <div>

                    </div>
                    <div>
                        <VerticalTabs />
                    </div>
                </div>
                <div></div>
            </div>
        </EducationalManagementSection>
    )
}

export default EducationalManagement

