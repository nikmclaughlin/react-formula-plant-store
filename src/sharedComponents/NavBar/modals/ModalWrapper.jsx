import { motion } from 'framer-motion'
import { useRef } from 'react'
import { RemoveScroll } from 'react-remove-scroll'

const ModalWrapper = (props) => {
  const { children, isOpen, onCloseClick } = props
  const bgDivRef = useRef()

  return (
    <>
      {isOpen && (
        <RemoveScroll>
          <div
            ref={bgDivRef}
            className="fixed top-0 right-0 w-full h-full bg-black/30 backdrop-blur-sm flex justify-end items-start font-lato z-20"
            onClick={(e) => {
              e.target === bgDivRef.current && onCloseClick()
            }}
          >
            <motion.button
              className="absolute top-0 right-0 p-6 z-20"
              onClick={onCloseClick}
              initial={{ opacity: 0, rotate: 45 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
            >
              <i className="fa-regular fa-circle-xmark text-emerald-200 text-2xl"></i>
            </motion.button>
            {children}
          </div>
        </RemoveScroll>
      )}
    </>
  )
}

export default ModalWrapper
