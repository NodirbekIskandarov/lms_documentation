import React from 'react'
import { FooterCardTitle, FooterChildComponent, FooterChildComponentCard, FooterComponent, FooterLineComponent, FooterMenuItem, FooterSocialsComponent, FooterSocialsList, FooterSocialsText, FooterSocialsTextP } from './styles'
import { Link } from 'react-router-dom'
import { FaTelegram, FaFacebook } from "react-icons/fa";
import { BsInstagram, BsYoutube } from "react-icons/bs";
function Footer() {
  return (
    <FooterComponent>
      <FooterChildComponent>
        <FooterChildComponentCard>
          <FooterCardTitle>LMS</FooterCardTitle>
          <FooterMenuItem>
            <Link className='link' to="/">Tizim Imkoniyatlari</Link>
          </FooterMenuItem>
          <FooterMenuItem>
            <Link className='link' to="/">Integratsiya</Link>
          </FooterMenuItem>
          <FooterMenuItem>
            <Link className='link' to="/">FAQs</Link>
          </FooterMenuItem>
        </FooterChildComponentCard>

        <FooterChildComponentCard>
          <FooterCardTitle>Yo'riqnomalar</FooterCardTitle>
          <FooterMenuItem>
            <Link className='link' to="/">Talabalarga</Link>
          </FooterMenuItem>
          <FooterMenuItem>
            <Link className='link' to="/">O'qituvchilarga</Link>
          </FooterMenuItem>
          <FooterMenuItem>
            <Link className='link' to="/">Adminstratorlarga</Link>
          </FooterMenuItem>
          <FooterMenuItem>
            <Link className='link' to="/">Dekanlarga</Link>
          </FooterMenuItem>
          <FooterMenuItem>
            <Link className='link' to="/">Kadrlar bo'limiga</Link>
          </FooterMenuItem>
          <FooterMenuItem>
            <Link className='link' to="/">Kafedra mudiriga</Link>
          </FooterMenuItem>
        </FooterChildComponentCard>

        <FooterChildComponentCard>
          <FooterCardTitle>Blog</FooterCardTitle>
          <FooterMenuItem>
            <Link className='link' to="/">Hammasi</Link>
          </FooterMenuItem>
          <FooterMenuItem>
            <Link className='link' to="/">Yangiliklar</Link>
          </FooterMenuItem>
          <FooterMenuItem>
            <Link className='link' to="/">Seminarlar</Link>
          </FooterMenuItem>
          <FooterMenuItem>
            <Link className='link' to="/">Tizim versiyalari</Link>
          </FooterMenuItem>
        </FooterChildComponentCard>

        <FooterChildComponentCard>
          <FooterCardTitle>Aloqa</FooterCardTitle>
          <FooterMenuItem>
            <Link className='link' to="/">+998991234567</Link>
          </FooterMenuItem>
          <FooterMenuItem>
            <Link className='link' to="/">+998991234567</Link>
          </FooterMenuItem>
          <FooterMenuItem>
            <Link className='link' to="/">LMS tizimi muhokama guruhi</Link>
          </FooterMenuItem>
        </FooterChildComponentCard>
      </FooterChildComponent>
      <FooterLineComponent/>
      <FooterSocialsComponent>
        <FooterSocialsList>
          <Link className='link' to="/"><FaTelegram/></Link>
          <Link className='link' to="/"><BsInstagram/></Link>
          <Link className='link' to="/"><FaFacebook/></Link>
          <Link className='link' to="/"><BsYoutube/></Link>
        </FooterSocialsList>
        <FooterSocialsText>
          <FooterSocialsTextP>Ishlab chiqaruvchi: Raqamli ta'lim texnologiyalarini rivojlantirish markazi</FooterSocialsTextP>
        </FooterSocialsText>
      </FooterSocialsComponent>
    </FooterComponent>
  )
}

export default Footer