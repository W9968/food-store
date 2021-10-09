import React from 'react'
import { Images, Team, TitleTeam } from 'styles/About.element'

const MeetTeam: React.FC = () => {
  return (
    <>
      <Team>
        <TitleTeam>
          rencontre nous
          <p>les deux personnes derrière l'idée de cette startup</p>
        </TitleTeam>
        <div>
          <Images>
            <img
              src='https://scontent.ftun9-1.fna.fbcdn.net/v/t1.6435-9/215493129_838153400458227_6817026145581698703_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Is7BDRG0pCsAX8VPuPb&_nc_ht=scontent.ftun9-1.fna&oh=750e3c3e979ccd6ae902643cf791a279&oe=61861BBF'
              alt='contributor profile female'
            />
            <p>Chaima Alaya</p>
          </Images>
          <Images>
            <img
              src='https://scontent.ftun9-1.fna.fbcdn.net/v/t1.6435-9/157291846_4034300813267851_194122634916298964_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_ohc=q2TCL2Wu0ZwAX_Fqa-m&_nc_ht=scontent.ftun9-1.fna&oh=6ad473718e600514b5e2b47d1432a2a1&oe=6186420E'
              alt='contributor profile male'
            />
            <p>Oussama Hammami</p>
          </Images>
        </div>
      </Team>
    </>
  )
}

export default MeetTeam
