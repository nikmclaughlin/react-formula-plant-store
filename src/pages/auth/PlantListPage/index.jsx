import NavBar from 'sharedComponents/NavBar'
import RedirectToSignInIfSignedOut from 'sharedComponents/RedirectToSignInIfSignedOut'

const PlantListPage = () => {
  return (
    <RedirectToSignInIfSignedOut>
      <NavBar />
      <div>TODO: Plant List</div>
    </RedirectToSignInIfSignedOut>
  )
}

export default PlantListPage
