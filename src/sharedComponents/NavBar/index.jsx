import SessionContext from 'contexts/sessionContext'
import { useContext } from 'react'

const NavBar = () => {
  const { username } = useContext(SessionContext)
  return (
    <div className="bg-emerald-700 flex items-center justify-center font-lato">
      <div className="w-full max-w-5xl flex items-center justify-between px-10 py-2">
        <div className="flex items-center gap-2">
          <img
            className="w-8"
            src="https://static-task-assets.react-formula.com/capstone_logo_light.png"
          />
          <div className="text-white font-playfair text-2xl">
            Marilyn&apos;s
          </div>
        </div>
        <button className="flex items-center gap-2 text-emerald-100">
          <i className="fa-solid fa-user text-xl" />
          {username}
        </button>
      </div>
    </div>
  )
}

export default NavBar
