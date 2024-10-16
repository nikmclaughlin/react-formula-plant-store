const AuthForm = (props) => {
  const { fields } = props

  return (
    <div>
      {fields.map((field) => (
        <div key={field.label}>
          <label htmlFor={field.label}>{field.label}</label>
          <input id={field.label} type={field.type} />
        </div>
      ))}
    </div>
  )
}

export default AuthForm
