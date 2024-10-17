import { useState } from 'react'
import Field from './Field'

const AuthForm = (props) => {
  const { fields, submitButtonLabel, onSubmit } = props
  const [formValues, setFormValues] = useState(() => {
    const initialState = {}
    fields.map((field) => {
      initialState[field.label] = ''
    })
    return initialState
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  return (
    <form
      className="bg-white border border-slate-300 rounded-lg flex flex-col gap-8 p-4 font-lato"
      onSubmit={async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        await onSubmit(formValues)
        setIsSubmitting(false)
      }}
    >
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
      <button
        className="bg-emerald-700 text-white rounded-lg w-full py-2 relative disabled:opacity-60"
        disabled={isSubmitting}
      >
        {submitButtonLabel}
        {isSubmitting && (
          <div className="absolute top-0 right-6 flex items-center h-full">
            <i className="fa-solid fa-circle-notch text-emerald-300 animate-spin" />
          </div>
        )}
      </button>
    </form>
  )
}

export default AuthForm
