import AuthForm from './AuthForm'

const SignUpPage = () => {
  return (
    <>
      <div className="font-playfair text-3xl">sign up!</div>
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
      />
    </>
  )
}

export default SignUpPage
