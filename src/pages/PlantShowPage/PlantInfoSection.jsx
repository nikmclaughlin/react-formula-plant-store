import { useState } from 'react'
import BenefitBox from './BenefitBox'
import PlantHeading from './PlantHeading'
import PlantPurchaseOptions from './PlantPurchaseOptions'

const PlantInfoSection = (props) => {
  const { plant } = props
  const [imageIndex, setImageIndex] = useState(0)

  return (
    <div className="flex md:flex-row flex-col gap-8">
      <div className="md:hidden">
        <PlantHeading plant={plant} />
      </div>
      <div className="flex-1 flex flex-col">
        <img src={plant.images[imageIndex].src} className="rounded-lg" />
        <div className="flex gap-4 p-4">
          <BenefitBox
            icon="far fa-check-circle"
            title="Guaranteed Healthy"
            description="Guaranteed to arrive healthy or your money back"
          />
          <div className="w-px bg-slate-300"></div>
          <BenefitBox
            icon="fa-solid fa-truck-fast"
            title="Free Shipping"
            description="Get free Ground shipping on orders of $50 or more"
          />
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
        <PlantPurchaseOptions
          plant={plant}
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
        />
      </div>
    </div>
  )
}

export default PlantInfoSection
