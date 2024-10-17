const Field = (props) => {
  const { label, type, onChange, value } = props
  return (
    <div key={label} className="flex flex-col gap-1">
      <label className="text-slate-600" htmlFor={label}>
        {label}
      </label>
      <input
        className="px-2 py-1 bg-slate-100 border border-slate-300 rounded-lg focus:outline-emerald-700 w-64"
        id={label}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Field
