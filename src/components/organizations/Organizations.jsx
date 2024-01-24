import React from 'react'
import {  OrganizationsFlags, OrganizationsHeading, OrganizationsSection } from './styles'

const Organizations = () => {
    return (
        <OrganizationsSection>

            <OrganizationsHeading>
                <h2 className='organizations__heading-2'>
                    HEMIS axborot tizimi 217 dan ortiq Oliy ta’lim muassasalari va
                    <br className='heading__br-1' /> 1 milliondan ortiq foydalanuvchilar (talaba va o‘qituvchilar)
                    <br className='heading__br-2' /> tanlovi
                </h2>
            </OrganizationsHeading>

            <OrganizationsFlags>
                <img width="100px" height="100px" src="https://yt3.googleusercontent.com/dsLYlhLR3pMTCoVQNVV2ioNe7jeEOj76GM8bVJ399snmfDyJxQtiqlwTZ_RP3Mg1x8kcKSuX-Vs=s900-c-k-c0x00ffffff-no-rj" alt="tatu" />
            </OrganizationsFlags>
        </OrganizationsSection>
    )
}

export default Organizations