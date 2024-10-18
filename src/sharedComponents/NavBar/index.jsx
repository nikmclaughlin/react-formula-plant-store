import SessionContext from 'contexts/sessionContext'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const { username, signOut } = useContext(SessionContext)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  return (
    <div
      className="bg-emerald-700 flex items-center justify-center font-lato"
      onMouseLeave={() => setIsUserMenuOpen(false)}
    >
      <div className="w-full max-w-5xl flex items-center justify-between px-10 py-4">
        <Link to="/plants">
          <div className="flex items-center gap-2">
            <img
              className="w-8"
              src="https://static-task-assets.react-formula.com/capstone_logo_light.png"
            />
            <div className="text-white font-playfair text-3xl">
              Marilyn&apos;s
            </div>
          </div>
        </Link>
        <div className="relative flex-1 flex justify-end">
          <button
            className="flex items-center gap-2 text-emerald-100"
            onClick={() => setIsUserMenuOpen(true)}
          >
            <i className="fa-solid fa-user text-xl" />
            {username}
          </button>
          {isUserMenuOpen && (
            <div className="absolute top-8 bg-white py-2 px-4 rounded-md shadow-md">
              <button
                className="text-slate-500 hover:text-emerald-700 flex items-center gap-2"
                onClick={signOut}
              >
                <i className="fa-solid fa-right-from-bracket" />
                sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default NavBar
