import { Link } from 'react-router-dom'
import AuthForm from './AuthForm'
import FormContainer from './FormContainer'

const SignUpPage = () => {
  return (
    <FormContainer>
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
      />
      <div className="text-emerald-700 text-sm">
        <span>Already have an account? </span>
        <Link to="/" className="underline">
          Sign in
        </Link>
      </div>
    </FormContainer>
  )
}

export default SignUpPage
