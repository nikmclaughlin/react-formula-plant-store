const CartItem = (props) => {
  const { item } = props
  return (
    <div className="flex p-6 gap-6 justify-between">
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
      <div className="text-xl text-slate-600">
        ${item.price_per_unit * item.quantity}
      </div>
    </div>
  )
}

export default CartItem
