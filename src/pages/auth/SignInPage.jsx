import { useState } from 'react'
import { Link } from 'react-router-dom'
import * as userService from 'services/user'
import AuthForm from './AuthForm'
import FormContainer from './FormContainer'

const SignInPage = () => {
  const [errorMessage, setErrorMessage] = useState('')
  return (
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
        ]}
        submitButtonLabel="sign in"
        onSubmit={async (values) => {
          setErrorMessage('')
          const response = await userService.createSession({
            username: values.username,
            password: values.password,
          })
          const data = await response.json()
          if (response.status !== 201) {
            setErrorMessage(data.error ?? 'error signing in')
            return
          } else {
            setErrorMessage('')
            console.log(data) // TODO
          }
        }}
      />
      <Link to="/sign-up" className="text-emerald-700 text-sm underline">
        create a new account
      </Link>
    </FormContainer>
  )
}

export default SignInPage
