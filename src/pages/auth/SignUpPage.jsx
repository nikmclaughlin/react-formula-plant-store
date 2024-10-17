import AuthForm from './AuthForm'

const SignUpPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 p-6">
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
    </div>
  )
}

export default SignUpPage
