const FormContainer = (props) => {
  const { children } = props
  return (
    <div className="flex">
      <div className="bg-emerald-200 hidden md:block">
        <img
          className="h-screen object-cover opacity-75 brightness-50"
          src="https://static-task-assets.react-formula.com/capstone_sign_in_scene.png"
        />
      </div>
      <div className="h-screen flex-1 flex flex-col items-center justify-center gap-2 p-4 bg-emerald-50">
        <img
          className="w-16"
          src="https://static-task-assets.react-formula.com/capstone_logo_dark.png"
        />
        <div className="font-playfair text-3xl text-emerald-700">
          Marilyn&apos;s
        </div>
        {children}
      </div>
    </div>
  )
}

export default FormContainer
