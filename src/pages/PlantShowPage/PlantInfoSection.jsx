import PlantHeading from './PlantHeading'

const PlantInfoSection = (props) => {
  const { plant } = props
  return (
    <div className="flex md:flex-row flex-col gap-8">
      <div className="md:hidden">
        <PlantHeading plant={plant} />
      </div>
      <div className="flex-1 flex flex-col">
        <img src={plant.images[0].src} className="rounded-lg" />
        <div className="flex gap-4">
          <div>Healthy</div>
          <div>Shipping</div>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <div className="hidden md:block">
          <PlantHeading plant={plant} />
        </div>
        <div className="p-2">
          <p className="text-lg leading-loose text-slate-700">
            {plant.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default PlantInfoSection
