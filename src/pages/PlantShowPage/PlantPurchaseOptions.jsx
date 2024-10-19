import clsx from 'clsx'
import { POT_COLORS } from 'sharedComponents/util'

const PlantPurchaseOptions = (props) => {
  const { plant, imageIndex, setImageIndex } = props

  return (
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
  )
}

export default PlantPurchaseOptions
