import SessionContext from 'contexts/SessionContext'
import { useContext, useEffect, useState } from 'react'
import { RemoveScroll } from 'react-remove-scroll'
import * as cartServices from 'services/cart'
import LoadingSpinner from 'sharedComponents/LoadingSpinner'
import CartItem from './CartItem'

const CartModal = (props) => {
  const { setIsCartMenuOpen } = props
  const { username } = useContext(SessionContext)
  const [isLoading, setIsLoading] = useState(true)
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    ;(async () => {
      setIsLoading(true)
      const response = await cartServices.getSessionCart()
      setCartItems(await response.json())
      setIsLoading(false)
    })()
  }, [])
  return (
    <RemoveScroll>
      <div className="fixed top-0 right-0 w-full h-full bg-black/30 backdrop-blur-sm flex justify-end font-lato">
        <div className="bg-emerald-50 h-screen w-full max-w-lg">
          <div className="bg-emerald-700 font-playfair text-white text-3xl text-center py-6 shadow-md flex items-center justify-center">
            <div>{username}&apos;s Cart</div>
            <button
              className="absolute top-0 right-0 p-6 text-emerald-200"
              onClick={() => setIsCartMenuOpen(false)}
            >
              <i className="fa-regular fa-circle-xmark"></i>
            </button>
          </div>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <div className="flex flex-col gap-4">
              {cartItems.map((cartItem) => {
                return <CartItem key={cartItem.id} item={cartItem} />
              })}
            </div>
          )}
        </div>
      </div>
    </RemoveScroll>
  )
}

export default CartModal
