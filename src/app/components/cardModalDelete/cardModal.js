import { CardModalDeleteView } from './cardModal.view'
import { deleteImage } from '../../../services/images.services'
import { useState, useContext } from 'react'
import Context from '../../context/image.context'

export const CardModalDelete = ({ closeModal, id }) => {
  const { setImages, images } = useContext(Context)
  const [idW, setIdW] = useState('')
  const [notification, setNotification] = useState(false)
  const [isError, setIsError] = useState(false)
  const handleChange = (event) => {
    setIdW(event.target.value)
  }
  const handleDeleteImage = () => {
    if (id === idW) {
      deleteImage(id)
      setImages(images.filter((image) => image.id !== id))
      setIsError(false)
      setNotification(true)
      setTimeout(() => {
        setNotification(false)
      }, 5000)
    } else {
      setIsError(true)
      setNotification(true)
      setTimeout(() => {
        setNotification(false)
      }, 5000)
    }
  }

  return (
    <CardModalDeleteView
      isError={isError}
      handleDeleteImage={handleDeleteImage}
      handleChange={handleChange}
      idW={idW}
      closeModal={closeModal}
      id={id}
      notification={notification}
    />
  )
}
