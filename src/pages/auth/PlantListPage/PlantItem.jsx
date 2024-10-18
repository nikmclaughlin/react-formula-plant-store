import clsx from 'clsx'
import { useState } from 'react'

const POT_COLORS = {
  stone: 'bg-stone-200',
  slate: 'bg-slate-300',
  sky: 'bg-sky-700',
  black: 'bg-gray-600',
  white: 'bg-gray-50',
  amber: 'bg-amber-600',
}

const PlantItem = (props) => {
  const { plant } = props
  const [imageIndex, setImageIndex] = useState(() =>
    Math.floor(Math.random() * plant.images.length)
  )

  return (
    <div className="flex flex-col gap-2">
      <img
        className="w-72 h-80 rounded-md"
        src={plant.images[imageIndex].src}
      />
      <div className="flex justify-between">
        <div className="text-xl font-playfair text-emerald-700">
          {plant.name}
        </div>
        <div className="text-lg text-emerald-600">${plant.price}</div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-sm text-slate-600">
          {plant.images[imageIndex].pot_color}
        </div>
        <div className="flex items-center gap-1">
          {plant.images.map((image, idx) => (
            <div
              className={clsx(
                'w-5 h-5 rounded-full border border-slate-300 outline-slate-400 outline-offset-1',
                POT_COLORS[image.pot_color],
                imageIndex === idx && 'outline'
              )}
              key={idx}
              onMouseEnter={() => setImageIndex(idx)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PlantItem
