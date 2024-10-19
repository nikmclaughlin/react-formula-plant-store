import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as plantService from 'services/plant'
import LoadingSpinner from 'sharedComponents/LoadingSpinner'
import NavBar from 'sharedComponents/NavBar'
import PlantInfoSection from './PlantInfoSection'

const PlantShowPage = () => {
  const [plant, setPlant] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const { plantId } = useParams()

  useEffect(() => {
    ;(async () => {
      setIsLoading(true)
      const response = await plantService.getPlantById({ plantId: plantId })
      setPlant(await response.json())
      setIsLoading(false)
    })()
  }, [plantId])

  return (
    <>
      <NavBar />
      <div className="flex justify-center bg-emerald-50 min-h-screen font-lato">
        <div className="w-full max-w-5xl px-6 py-20">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <>{plant && <PlantInfoSection plant={plant} />}</>
          )}
        </div>
      </div>
    </>
  )
}

export default PlantShowPage
