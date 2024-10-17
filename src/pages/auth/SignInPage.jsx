import AuthForm from './AuthForm'

const SignInPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 p-6">
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
      />
    </div>
  )
}

export default SignInPage
