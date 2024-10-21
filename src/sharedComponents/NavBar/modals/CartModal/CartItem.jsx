import * as cartService from 'services/cart'

const CartItem = (props) => {
  const { item, fetchCart } = props
  return (
    <div className="flex py-6 gap-6 justify-between">
      <img className="rounded-md w-36" src={item.image_src} />
      <div className="flex-1 flex flex-col gap-2">
        <div className="font-playfair text-2xl text-emerald-700">
          {item.plant_name}
        </div>
        <div className="flex gap-2">
          <div className="text-slate-500 w-14">qty:</div>
          <div className="text-slate-700">{item.quantity}</div>
        </div>
        <div className="flex gap-2">
          <div className="text-slate-500 w-14">color:</div>
          <div className="text-slate-700">{item.pot_color}</div>
        </div>
      </div>
      <div className="flex flex-col justify-between text-slate-600">
        <div className="text-xl ">${item.price_per_unit * item.quantity}</div>
        <button
          className="flex items-center gap-2 hover:text-rose-400"
          onClick={async () => {
            await cartService.removeItemFromCart({ cartItemId: item.id })
            fetchCart()
          }}
        >
          <i className="fa-solid fa-trash-can" />
          <div>remove</div>
        </button>
      </div>
    </div>
  )
}

export default CartItem
