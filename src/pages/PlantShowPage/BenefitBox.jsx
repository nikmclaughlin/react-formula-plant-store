const BenefitBox = (props) => {
  const { icon, title, description } = props

  return (
    <div className="flex-1 flex flex-col gap-2 items-center justify-center p-4 text-center">
      <i className={`text-4xl text-emerald-700 ${icon}`} />
      <div className=" text-slate-800">{title}</div>
      <div className="text-slate-600 text-balance text-sm">{description}</div>
    </div>
  )
}

export default BenefitBox
