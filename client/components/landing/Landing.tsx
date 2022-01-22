import { FC, ReactNode } from 'react'
import {
  Banner,
  Cases,
  LandingWrapper,
  ContainerValues,
  MeetTeam,
} from 'styles/landing.module'
import Image from 'next/image'
import { BiHeart, BiLike, BiAccessibility } from 'react-icons/bi'
import LinkButton from 'components/buttons/LinkButton'

interface IarrayValues {
  icon: ReactNode
  title: string
  content: string
}

const valuesArray: IarrayValues[] = [
  {
    icon: <BiHeart />,
    title: 'empathy',
    content:
      'Empathize with your peers and customers by reaching out to them, supporting them and give them the best deals',
  },
  {
    icon: <BiLike />,
    title: 'solution',
    content:
      'Reduce food waste and minimize the amount of polution to drive values to businesses and build from there',
  },
  {
    icon: <BiAccessibility />,
    title: 'Reach',
    content:
      'Save your pocket but also help others in need to bring more values to society',
  },
]

const Landing: FC = () => {
  return (
    <LandingWrapper>
      <Banner>
        <h1>our mission</h1>
        <p>
          To create a food company that buys food groceries and sells them later
          at a competitive price to help others in need.
        </p>
        <br />
        <LinkButton title={'contact us'} slug={'/contact'} />
      </Banner>
      <ContainerValues>
        <h1>Our values</h1>
        <div>
          {valuesArray.map((el: IarrayValues, key: number) => {
            return (
              <Cases key={key}>
                <div>{el.icon}</div>
                <h3>{el.title}</h3>
                <p>{el.content}</p>
              </Cases>
            )
          })}
        </div>

        <h1>get to know us</h1>
        <p>
          Our team is made up of creatives with business knowhow, strategists
          who think outside of the box and push innovation
        </p>
        <MeetTeam>
          <span style={{ width: '400px' }}></span>
          <div>
            <Image
              width={400}
              height={400}
              src={'/asset/f1.jpg'}
              alt={'founder image'}
            />
            <h1>oussema hammami</h1>
            <p>CO-founder</p>
          </div>

          <div>
            <Image
              width={400}
              height={400}
              src={'/asset/f2.jpg'}
              alt={'founder image'}
            />
            <h1>chayma alya</h1>
            <p>CO-founder</p>
          </div>
        </MeetTeam>
      </ContainerValues>
    </LandingWrapper>
  )
}

export default Landing
