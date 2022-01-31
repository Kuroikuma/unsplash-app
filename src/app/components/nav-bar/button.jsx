import { Modal } from '../modal/modal'
import { useModal } from '../../hooks/useModal'
import { CardModal } from '../cardModalAdd/cardModal'
import style from './nav-bar.module.css'

export const Button = () => {
  const [isOpen, openModal, closeModal] = useModal(false)
  return (
    <>
      <button onClick={openModal} className={style.container__right}>
        Add photo
      </button>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <CardModal closeModal={closeModal} />
      </Modal>
    </>
  )
}
