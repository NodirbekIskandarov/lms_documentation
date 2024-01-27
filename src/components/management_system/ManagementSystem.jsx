import React from 'react'
import { ManagementButtonVideo, ManagementButtons, ManagementImg, ManagementSection, TitleComponent } from './styles'
import { Button } from '../../layouts/Navbar/styles'

const ManagementSystem = () => {
    return (
        <ManagementSection>
            <h1 className='management__component-h1'> <span>LMS</span> - Oliy ta’lim jarayonlarini boshqarish axborot tizimi</h1>

            <TitleComponent >Ushbu axborot tizimi “Ma’muriy boshqaruv”, “O‘quv jarayoni”, “Ilmiy
                faoliyat” va “Moliyaviy boshqaruv” modullarini o‘z ichiga olgan.
            </TitleComponent>

            <ManagementButtons>
                <Button>Yo'riqnoma</Button>
                <ManagementButtonVideo>
                    <div>
                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" class=""><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.5 14.67V9.33c0-.79.88-1.27 1.54-.84l4.15 2.67a1 1 0 010 1.68l-4.15 2.67c-.66.43-1.54-.05-1.54-.84z" fill="currentColor"></path></svg>
                    </div>
                    Video
                </ManagementButtonVideo>
            </ManagementButtons>

            <ManagementImg>
                <div>
                    <img src="https://files.libertycity.ru/download/gta5_bmw/fulls/b63488b1f0e9dd1115959cb11b8224a1/16134056465533_w8sbhgp0pxq.jpg" alt="main" class="w-full object-contain"/>
                </div>
            </ManagementImg>
        </ManagementSection>
    )
}

export default ManagementSystem