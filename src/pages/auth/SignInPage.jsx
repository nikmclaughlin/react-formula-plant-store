import AuthForm from './AuthForm'

const SignInPage = () => {
  return (
    <>
      <div className="font-playfair text-3xl">sign In!</div>
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
      />
    </>
  )
}

export default SignInPage
