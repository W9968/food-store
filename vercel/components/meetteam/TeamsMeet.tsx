import { FC } from 'react'
import { Heading, Row, Imagery } from 'styles/About.module'

const TeamsMeet: FC = () => {
  return (
    <>
      <Row>
        <Heading>notre équipe</Heading>
        <div>
          <Imagery
            width={200}
            height={200}
            loading='lazy'
            placeholder='blur'
            blurDataURL='iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mMUrgcAAKsAlNU6bZMAAAAASUVORK5CYII='
            alt='photo de collaborateur'
            src='https://scontent.ftun9-1.fna.fbcdn.net/v/t1.6435-9/215493129_838153400458227_6817026145581698703_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=3t9Nw3T5DloAX9_ZD4f&_nc_ht=scontent.ftun9-1.fna&oh=24d9bef4431977407d83f98d7cda3907&oe=61B19D3F'
          />
          <Imagery
            width={200}
            height={200}
            loading='lazy'
            placeholder='blur'
            blurDataURL='iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mMUrgcAAKsAlNU6bZMAAAAASUVORK5CYII='
            alt='photo de collaborateur'
            src='https://scontent.ftun9-1.fna.fbcdn.net/v/t1.6435-9/157291846_4034300813267851_194122634916298964_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_ohc=j4j1s-ZXv-oAX_df0Zh&_nc_ht=scontent.ftun9-1.fna&oh=ed2492c907b49894acbf0f77c29ca4e3&oe=61B1C38E'
          />
        </div>
      </Row>
    </>
  )
}

export default TeamsMeet
