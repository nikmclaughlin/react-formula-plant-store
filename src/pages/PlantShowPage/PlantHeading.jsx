const PlantHeading = (props) => {
  const { plant } = props
  return (
    <>
      <div className="flex justify-between items-center text-emerald-700">
        <div className="text-4xl font-playfair">{plant.name}</div>
        <div className="text-2xl">${plant.price}</div>
      </div>
      <div className="text-lg italic text-slate-500 p-2">
        {plant.botanical_name}
      </div>
    </>
  )
}

export default PlantHeading
