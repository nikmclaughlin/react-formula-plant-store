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
            className="fixed top-0 right-0 w-full h-full bg-black/30 backdrop-blur-sm flex justify-end items-start font-lato"
            onClick={(e) => {
              e.target === bgDivRef.current && onCloseClick()
            }}
          >
            <button
              className="absolute top-0 right-0 p-6"
              onClick={onCloseClick}
            >
              <i className="fa-regular fa-circle-xmark text-emerald-200 text-2xl"></i>
            </button>
            {children}
          </div>
        </RemoveScroll>
      )}
    </>
  )
}

export default ModalWrapper
