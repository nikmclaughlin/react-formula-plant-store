import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as userService from 'services/user'
import RedirectToPlantsIfSignedIn from 'sharedComponents/RedirectToPlantsIfSignedIn'
import AuthForm from './AuthForm'
import FormContainer from './FormContainer'

const SignUpPage = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()
  return (
    <RedirectToPlantsIfSignedIn>
      <FormContainer>
        <div className="text-rose-500 font-lato h-6">{errorMessage}</div>
        <AuthForm
          fields={[
            {
              label: 'username',
              type: 'text',
            },
            {
              label: 'password',
              type: 'password',
            },
            {
              label: 'confirm password',
              type: 'password',
            },
          ]}
          submitButtonLabel="create account"
          onSubmit={async (values) => {
            setErrorMessage('')
            if (values.username.length < 4) {
              setErrorMessage('username too short')
              return
            }
            if (values.password.length < 4) {
              setErrorMessage('password too short')
              return
            }
            if (values.password !== values['confirm password']) {
              setErrorMessage('passwords do not match')
              return
            }
            console.log('submitting user create')
            const response = await userService.createUser({
              username: values.username,
              password: values.password,
            })
            if (response.status === 201) {
              setErrorMessage('')
              console.log('user created')
              navigate('/', {
                state: {
                  newAccount: true,
                },
              })
            } else {
              const data = await response.json()
              setErrorMessage(data.error ?? 'error creating new account')
            }
          }}
        />
        <div className="text-emerald-700 text-sm">
          <span>Already have an account? </span>
          <Link to="/" className="underline">
            Sign in
          </Link>
        </div>
      </FormContainer>
    </RedirectToPlantsIfSignedIn>
  )
}

export default SignUpPage
