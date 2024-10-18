import { useEffect, useState } from 'react'
import * as plantService from 'services/plant'
import NavBar from 'sharedComponents/NavBar'
import RedirectToSignInIfSignedOut from 'sharedComponents/RedirectToSignInIfSignedOut'
import PlantItem from './PlantItem'

const PlantListPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [plants, setPlants] = useState([])

  const plantItems = plants.map((plant) => (
    <PlantItem plant={plant} key={plant.id} />
  ))

  useEffect(() => {
    ;(async () => {
      setIsLoading(true)
      const response = await plantService.getPlants()
      const data = await response.json()
      setPlants(data)
      setIsLoading(false)
    })()
  }, [])

  return (
    <RedirectToSignInIfSignedOut>
      <NavBar />
      <div className="min-h-screen bg-emerald-50">
        {isLoading ? (
          <div className="flex justify-center p-20">
            <i className="fa-solid fa-spinner animate-spin text-3xl text-emerald-300" />
          </div>
        ) : (
          <div className="flex justify-center py-16">
            <div className="w-full max-w-5xl p-6 flex flex-col gap-6">
              <div className="text-3xl font-playfair text-emerald-700">
                Plants In Stock
              </div>
              <div className="flex flex-wrap gap-12 py-6 justify-center">
                {plantItems}
              </div>
            </div>
          </div>
        )}
      </div>
    </RedirectToSignInIfSignedOut>
  )
}

export default PlantListPage
