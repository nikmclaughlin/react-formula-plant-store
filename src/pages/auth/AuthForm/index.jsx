import { useState } from 'react'
import Field from './Field'

const AuthForm = (props) => {
  const { fields, submitButtonLabel } = props
  const [formValues, setFormValues] = useState(() => {
    const initialState = {}
    fields.map((field) => {
      initialState[field.label] = ''
    })
    return initialState
  })

  return (
    <form className="bg-white border border-slate-300 rounded-lg flex flex-col gap-8 p-4 font-lato">
      <div className="flex flex-col gap-2">
        {fields.map((field) => (
          <Field
            key={field.label}
            label={field.label}
            type={field.type}
            value={formValues[field.label]}
            onChange={(e) =>
              setFormValues({
                ...formValues,
                [field.label]: e.target.value,
              })
            }
          />
        ))}
      </div>
      <button className="bg-emerald-700 text-white rounded-lg w-full py-2">
        {submitButtonLabel}
      </button>
    </form>
  )
}

export default AuthForm
