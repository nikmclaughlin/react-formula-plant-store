import { useEffect } from 'react'
import * as plantService from 'services/plant'
import NavBar from 'sharedComponents/NavBar'
import RedirectToSignInIfSignedOut from 'sharedComponents/RedirectToSignInIfSignedOut'

const PlantListPage = () => {
  useEffect(() => {
    ;(async () => {
      const response = await plantService.getPlants()
      const data = await response.json()
      console.log(data)
    })()
  }, [])

  return (
    <RedirectToSignInIfSignedOut>
      <NavBar />
      <div>TODO: Plant List</div>
    </RedirectToSignInIfSignedOut>
  )
}

export default PlantListPage
