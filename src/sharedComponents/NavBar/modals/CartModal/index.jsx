import SessionContext from 'contexts/SessionContext'
import { useCallback, useContext, useEffect, useState } from 'react'
import { RemoveScroll } from 'react-remove-scroll'
import * as cartServices from 'services/cart'
import LoadingSpinner from 'sharedComponents/LoadingSpinner'
import CartItem from './CartItem'

const CartModal = (props) => {
  const { setIsCartMenuOpen } = props
  const { username } = useContext(SessionContext)
  const [isLoading, setIsLoading] = useState(true)
  const [cartItems, setCartItems] = useState([])

  const fetchCart = useCallback(async () => {
    setIsLoading(true)
    const response = await cartServices.getSessionCart()
    setCartItems(await response.json())
    setIsLoading(false)
  }, [])

  useEffect(() => {
    fetchCart()
  }, [fetchCart])

  let totalQuantity = 0
  let subtotal = 0
  cartItems.map((item) => {
    totalQuantity += item.quantity
    subtotal += item.price_per_unit * item.quantity
  })

  return (
    <RemoveScroll>
      <div className="fixed top-0 right-0 w-full h-full bg-black/30 backdrop-blur-sm flex justify-end font-lato">
        <div className="bg-emerald-50 h-screen w-full max-w-lg flex flex-col">
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
            <>
              <div className="flex-1 flex flex-col gap-4 px-4 overflow-y-auto divide-y divide-slate-300">
                {cartItems.map((cartItem) => {
                  return (
                    <CartItem
                      key={cartItem.id}
                      item={cartItem}
                      fetchCart={fetchCart}
                    />
                  )
                })}
              </div>
              <div className="flex flex-col gap-4 p-4 pb-10 border-t border-slate-300">
                <div className="w-full flex justify-between text-slate-500">
                  <div>{`${totalQuantity} items`}</div>
                  <div>
                    subtotal:{' '}
                    <span className="text-lg text-slate-700">{`$${subtotal}`}</span>
                  </div>
                </div>
                <button
                  className="bg-emerald-700 text-emerald-100 rounded-full flex gap-4 items-center justify-center p-2 text-xl hover:bg-emerald-800"
                  onClick={() => {
                    window.confirm(
                      "This is a demo app. Like what you've seen? Get in touch with the developer!"
                    ) && window.open('http://www.nikmclaughlin.com', '_blank')
                  }}
                >
                  <i className="fa-solid fa-cash-register" />
                  <div>Checkout</div>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </RemoveScroll>
  )
}

export default CartModal
