import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as plantService from 'services/plant'
import NavBar from 'sharedComponents/NavBar'

const PlantShowPage = () => {
  const [plant, setPlant] = useState()
  const { plantId } = useParams()

  useEffect(() => {
    ;(async () => {
      const response = await plantService.getPlantById({ plantId: plantId })
      setPlant(await response.json())
    })()
  }, [plantId])

  return (
    <>
      <NavBar />
      <div className="flex justify-center bg-emerald-50 min-h-screen">
        <div className="w-full max-w-5xl px-6 py-20">
          {plant && (
            <div>
              <img src={plant.images[0].src} className="w-96" />
              <div>{plant.name}</div>
              <div>{plant.price}</div>
              <div>{plant.botanical_name}</div>
              <div>{plant.care_instructions}</div>
              <div>{plant.description}</div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default PlantShowPage
