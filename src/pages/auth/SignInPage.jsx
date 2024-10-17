import AuthForm from './AuthForm'

const SignInPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 p-6">
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
    </div>
  )
}

export default SignInPage
