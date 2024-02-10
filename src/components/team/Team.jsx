import React from 'react'
import { TeamChildComponent, TeamChildListBox, TeamListItem, TeamMainComponent, TeamMemberImage, TeamMemberName, TeamMemberPosition } from './styles'

function Team() {

    const data = [
        {
            "name": "Utkir Xamdamov",
            "image_src": "https://i2-prod.mirror.co.uk/incoming/article16194499.ece/ALTERNATES/s1200b/0_Ana-de-Armas.jpg",
            "work": "Milliy konsultant"
        },
        {
            "name": "Utkir Xamdamov",
            "image_src": "https://i2-prod.mirror.co.uk/incoming/article16194499.ece/ALTERNATES/s1200b/0_Ana-de-Armas.jpg",
            "work": "Milliy konsultant"
        },
        {
            "name": "Utkir Xamdamov",
            "image_src": "https://i2-prod.mirror.co.uk/incoming/article16194499.ece/ALTERNATES/s1200b/0_Ana-de-Armas.jpg",
            "work": "Milliy konsultant"
        },
        {
            "name": "Utkir Xamdamov",
            "image_src": "https://i2-prod.mirror.co.uk/incoming/article16194499.ece/ALTERNATES/s1200b/0_Ana-de-Armas.jpg",
            "work": "Milliy konsultant"
        },
        {
            "name": "Utkir Xamdamov",
            "image_src": "https://i2-prod.mirror.co.uk/incoming/article16194499.ece/ALTERNATES/s1200b/0_Ana-de-Armas.jpg",
            "work": "Milliy konsultant"
        }
    ]

  return (
    <TeamMainComponent>
        <TeamChildComponent>
            <TeamChildListBox>
                {
                    data?.map((item, index) => {
                        return (
                            <TeamListItem key={index}>
                                <TeamMemberImage src={item.image_src} alt='image'/>
                                <TeamMemberName>{item.name}</TeamMemberName>
                                <TeamMemberPosition>{item.work}</TeamMemberPosition>
                            </TeamListItem>
                        )
                    })
                }
            </TeamChildListBox>
        </TeamChildComponent>
    </TeamMainComponent>
  )
}

export default Team