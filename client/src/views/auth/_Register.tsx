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

const _Register: React.FC = () => {
  const history = useHistory()
  return (
    <>
      <Wrapper>
        {/*  this will contain forms */}
        <Cols
          className='last-child'
          initial={{ opacity: 0, x: '-10%' }}
          animate={{ opacity: 1, x: '0%' }}
          transition={{ type: 'tween' }}>
          {/* this one will have form */}
          <RightSide>
            <NavLogo type='lg' onClick={() => history.push('/')} />
            <HeroLeftSide content='Inscrivez à Notre Plateforme' />
            <Resetdiv>
              Si vous avez un compte cliquez{' '}
              <span
                onClick={(): void => history.push('/login')}
                style={{
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontStyle: 'italic',
                }}>
                ici
              </span>{' '}
              <br />
              pour se connecter.
            </Resetdiv>
          </RightSide>
        </Cols>
        {/* form side, auth login option */}
        <Cols
          className='first-child'
          initial={{ opacity: 0, x: '10%' }}
          animate={{ opacity: 1, x: '0%' }}
          transition={{ type: 'tween' }}>
          <Lines>
            <HeroAuthText content='Acceder à Votre Compte' />
            <Input type='text' palceHolder='Entrez votre nom' />
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
      </Wrapper>
    </>
  )
}

export default _Register
