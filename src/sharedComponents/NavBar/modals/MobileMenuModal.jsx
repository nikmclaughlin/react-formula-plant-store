import SessionContext from 'contexts/SessionContext'
import { useContext } from 'react'

const MobileMenuModal = (props) => {
  const { onCartOpenClick } = props
  const { username, signOut } = useContext(SessionContext)
  return (
    <div className="bg-emerald-800 flex flex-col gap-8 pt-20 px-14 pb-8 rounded-bl-lg shadow-lg">
      <div className="text-emerald-300 text-lg flex items-center gap-2">
        <i className="fa-solid fa-user" /> {username}
      </div>
      <button
        className="text-emerald-300 text-lg flex items-center gap-2"
        onClick={signOut}
      >
        <i className="fa-solid fa-arrow-right-from-bracket" />
        sign out
      </button>
      <button
        className="text-emerald-300 text-lg flex items-center gap-2"
        onClick={onCartOpenClick}
      >
        <i className="fa-solid fa-shopping-cart" />
        cart
      </button>
    </div>
  )
}

export default MobileMenuModal
