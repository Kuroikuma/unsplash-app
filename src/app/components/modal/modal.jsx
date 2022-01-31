import { React } from 'react'
import './modal.css'

export const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation()
  return (
    <>
      <div className={`modal ${isOpen && 'is-open'}`} onClick={closeModal}>
        <div className="modal__container" onClick={handleModalContainerClick}>
          {children}
        </div>
      </div>
    </>
  )
}
