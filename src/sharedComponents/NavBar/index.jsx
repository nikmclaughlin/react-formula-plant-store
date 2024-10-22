import SessionContext from 'contexts/SessionContext'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import CartModal from './modals/CartModal'
import MobileMenuModal from './modals/MobileMenuModal'
import ModalWrapper from './modals/ModalWrapper'

const NavBar = () => {
  const { username, signOut } = useContext(SessionContext)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isCartMenuOpen, setIsCartMenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
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
          <div className="hidden sm:flex relative flex-1 justify-end gap-10">
            <button
              className="flex items-center gap-2 text-emerald-100"
              onClick={() => setIsUserMenuOpen(true)}
            >
              <i className="fa-solid fa-user text-xl" />
              {username}
            </button>
            {isUserMenuOpen && (
              <div className="absolute top-8 right-16 bg-white py-2 px-4 rounded-md shadow-md">
                <button
                  className="text-slate-500 hover:text-emerald-700 flex items-center gap-2"
                  onClick={signOut}
                >
                  <i className="fa-solid fa-right-from-bracket" />
                  sign out
                </button>
              </div>
            )}
            <button
              className="flex items-center gap-2 text-emerald-100"
              onClick={() => setIsCartMenuOpen(true)}
            >
              <i className="fa-solid fa-shopping-cart text-xl" />
              cart
            </button>
          </div>
          <button onClick={() => setIsMobileMenuOpen(true)}>
            <i className="block sm:hidden fa-solid fa-bars text-emerald-300 text-3xl" />
          </button>
        </div>
      </div>
      <ModalWrapper
        isOpen={isCartMenuOpen}
        onCloseClick={() => setIsCartMenuOpen(false)}
      >
        <CartModal />
      </ModalWrapper>
      <ModalWrapper
        isOpen={isMobileMenuOpen}
        onCloseClick={() => setIsMobileMenuOpen(false)}
      >
        <MobileMenuModal
          onCartOpenClick={() => {
            setIsCartMenuOpen(true)
            setIsMobileMenuOpen(false)
          }}
        />
      </ModalWrapper>
    </>
  )
}

export default NavBar
