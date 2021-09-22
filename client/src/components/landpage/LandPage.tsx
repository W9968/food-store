import React from 'react'
import Space from 'hooks/useSpace'
import {
  Wrapper,
  TitleHero,
  HeroSection,
  Image,
  GoToLink,
} from 'styles/LandPage.element'

const LandPage: React.FC = () => {
  return (
    <>
      <Wrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Space />
        <HeroSection>
          <div>
            <TitleHero>عنا ما خير</TitleHero>
            <Image src='./asset/foodstore.svg' alt='landing page' />
          </div>
          <GoToLink to='/about'>apprendre a nous connaitre</GoToLink>
        </HeroSection>
      </Wrapper>
    </>
  )
}

export default LandPage
