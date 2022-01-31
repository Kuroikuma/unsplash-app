import style from './galery.module.css'
import { Modal } from '../modal/modal'
import { useModal } from '../../hooks/useModal'
import { CardModalDelete } from '../cardModalDelete/cardModal'

export const Botton = ({ id }) => {
  const [isOpen, openModal, closeModal] = useModal(false)
  return (
    <>
      <div className={style.delete}>
        <button onClick={openModal}>delete</button>
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <CardModalDelete closeModal={closeModal} id={id} />
      </Modal>
    </>
  )
}
