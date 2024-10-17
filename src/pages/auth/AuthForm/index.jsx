const AuthForm = (props) => {
  const { fields } = props

  return (
    <form className="bg-white border border-slate-300 rounded-lg flex flex-col gap-8 p-4 font-lato">
      <div className="flex flex-col gap-2">
        {fields.map((field) => (
          <div key={field.label} className="flex flex-col gap-1">
            <label className="text-slate-600" htmlFor={field.label}>
              {field.label}
            </label>
            <input
              className="px-2 py-1 bg-slate-100 border border-slate-300 rounded-lg focus:outline-emerald-700 w-64"
              id={field.label}
              type={field.type}
            />
          </div>
        ))}
      </div>
      <button className="bg-emerald-700 text-white rounded-lg w-full py-2">
        Click me
      </button>
    </form>
  )
}

export default AuthForm
