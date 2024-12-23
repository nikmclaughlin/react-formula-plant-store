import clsx from 'clsx'
import { useState } from 'react'
import * as cartService from 'services/cart'
import { POT_COLORS } from 'sharedComponents/util'

const PlantPurchaseOptions = (props) => {
  const { plant, imageIndex, setImageIndex } = props
  const [quantity, setQuantity] = useState(1)
  const [isAddingToCart, setIsAddingToCart] = useState(false)

  return (
    <>
      <div className="flex flex-col py-6">
        <div className="flex items-center gap-2 text-emerald-700">
          <i className="fa-solid fa-brush text-2xl" />
          <div className="text-lg">Pot Color</div>
        </div>
        <div className="flex gap-4">
          {plant.images.map((image, idx) => {
            return (
              <div
                className="flex flex-col items-center py-4"
                key={image.pot_color}
                onMouseEnter={() => setImageIndex(idx)}
              >
                <div
                  className={clsx(
                    'w-8 h-8 rounded-full border border-slate-300 outline-slate-400 outline-offset-1',
                    POT_COLORS[image.pot_color],
                    imageIndex === idx && 'outline'
                  )}
                ></div>
                <div
                  className={clsx(
                    imageIndex === idx ? 'text-slate-700' : 'text-slate-500'
                  )}
                >
                  {image.pot_color}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex gap-4 ">
        <div className="flex gap-4 items-center text-xl text-emerald-700 border border-slate-300 rounded-full px-6 py-4">
          <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
            <i className="fa-solid fa-minus text-slate-500" />
          </button>
          {quantity}
          <button onClick={() => setQuantity(quantity + 1)}>
            <i className="fa-solid fa-plus text-slate-500" />
          </button>
        </div>
        <button
          className="bg-emerald-700 px-4 py-1 flex-1 rounded-full text-xl text-emerald-50 flex gap-4 items-center justify-center hover:bg-emerald-800"
          onClick={async () => {
            setIsAddingToCart(true)
            await cartService.addPlantToCart({
              plantId: plant.id,
              quantity,
              potColor: plant.images[imageIndex].pot_color,
            })
            setIsAddingToCart(false)
          }}
        >
          {isAddingToCart ? (
            <i className="fa-solid fa-spinner text-2xl animate-spin text-emerald-300" />
          ) : (
            <i className="fa-solid fa-cart-plus" />
          )}
          <div>Add to Cart</div>
        </button>
      </div>
    </>
  )
}

export default PlantPurchaseOptions
