import { EducationalManagementSection } from './styles'
import { HowUsingHead3 } from '../howUsing/styles'
import { TitleComponent } from '../management_system/styles'

const EducationalManagement = () => {

    return (
        <EducationalManagementSection>
            <div>
                <HowUsingHead3>Oliy ta’limni boshqarish
                    <br />axborot tizimi
                </HowUsingHead3>

                <TitleComponent>O‘zbekiston Respublikasi oliy ta'lim muassasalari mas'ul
                    <br /> xodimlari tomonidan amalga oshiriladigan ishlar:
                </TitleComponent>
            </div>
        </EducationalManagementSection>
    )
}

export default EducationalManagement