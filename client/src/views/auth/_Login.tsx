import React from 'react'
import { useHistory } from 'react-router-dom'
import { Wrapper, Cols, Lines, Resetdiv, RightSide } from 'styles/Form.styles'

// import components
import {
  Input,
  Button,
  HeroAuthText,
  HeroLeftSide,
  NavLogo,
} from 'components/export'
import GoggleButton from 'components/button/GoggleButton'

const _Login: React.FC = () => {
  const history = useHistory()
  return (
    <>
      <Wrapper>
        {/*  this will contain forms */}
        <Cols
          className='first-child'
          initial={{ opacity: 0, x: '-10%' }}
          animate={{ opacity: 1, x: '0%' }}
          transition={{ type: 'tween' }}>
          {/* this one will have form */}
          <Lines>
            <HeroAuthText content='Acceder à Votre Compte' />
            <Input
              type='email'
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                console.log(e.currentTarget.value)
              }
              palceHolder='Entrez votre email'
            />
            <Input type='email' palceHolder='Entrez votre mot de passe' />
            <Button title='connexion' status={false} />
          </Lines>
          {/* this one will havee the reset password button */}
          <Lines>
            <Resetdiv>
              Mot de passe oublié ? cliquez{' '}
              <span
                style={{
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontStyle: 'italic',
                }}>
                ici
              </span>{' '}
              pour réinitialiser.
            </Resetdiv>
          </Lines>
        </Cols>
        {/* form side, auth login option */}
        <Cols
          className='last-child'
          initial={{ opacity: 0, x: '10%' }}
          animate={{ opacity: 1, x: '0%' }}
          transition={{ type: 'tween' }}>
          <RightSide>
            <NavLogo type='lg' onClick={() => history.push('/')} />
            <HeroLeftSide content='Content De Te Revoir' />
            <Resetdiv>
              Si vous n'avez pas de compte cliquez{' '}
              <span
                onClick={(): void => history.push('/register')}
                style={{
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontStyle: 'italic',
                }}>
                ici
              </span>{' '}
              <br />
              pour en créer un.
            </Resetdiv>
            <p
              style={{
                fontWeight: 700,
              }}>
              Or inscrivez-vous avec
            </p>
            <GoggleButton />
          </RightSide>
        </Cols>
      </Wrapper>
    </>
  )
}

export default _Login
