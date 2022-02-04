import { CardModalView } from './cardModal.view'
import { useState, useRef, useContext, useEffect } from 'react'
import Context from '../../context/image.context'
import { socket } from '../socket/socket'
import { postImage } from '../../../services/images.services'
import { useFileStorage } from '../../hooks/useFileStorage'

export const CardModal = ({ closeModal }) => {
  const { setImages } = useContext(Context)
  const [isUrl, setIsUrl] = useState(false)
  const [isUpload, setIsUpload] = useState(false)
  const [url, setUrl] = useState('')
  const [file, fileHandler] = useFileStorage()
  const [notification, setNotification] = useState(false)
  const [label, setLabel] = useState('')
  const hiddenFileInput = useRef(null)

  useEffect(() => {
    return () => {
      socket.off()
    }
  }, [])

  const isValidUrl = (string) => {
    try {
      new URL(string)
    } catch (_) {
      return setNotification(true)
    }

    return setNotification(false)
  }

  const handleIsUrl = (event) => {
    setIsUrl(event.target.checked)
    setIsUpload(false)
  }
  const handleUrl = (event) => {
    setUrl(event.target.value)
    isValidUrl(event.target.value)
    setTimeout(() => {
      setNotification(false)
    }, 5000)
  }
  const handleLabel = (event) => {
    setLabel(event.target.value)
  }
  const handleFile = (event) => {
    fileHandler(event.target.files[0])
  }
  const handleIsUpload = (event) => {
    setIsUrl(false)
    setIsUpload(event.target.checked)
  }
  const handleSubmit = () => {
    console.log(file.toString())
    if (url) {
      const image = {
        label: label,
        url: url,
      }
      postImage(image)
      setImages((prevImage) => [...prevImage, image])
    }
    if (file) {
      const image = {
        label: label,
        url: file.toString(),
      }
      postImage(image)
      setImages((prevImage) => [...prevImage, image])
    }
    socket.emit('addImage', 'esta funcionando?')
  }

  function handleClick() {
    hiddenFileInput.current.click()
  }

  return (
    <CardModalView
      handleClick={handleClick}
      handleSubmit={handleSubmit}
      handleIsUpload={handleIsUpload}
      handleFile={handleFile}
      handleLabel={handleLabel}
      handleUrl={handleUrl}
      handleIsUrl={handleIsUrl}
      isUrl={isUrl}
      isUpload={isUpload}
      notification={notification}
      label={label}
      url={url}
      hiddenFileInput={hiddenFileInput}
      closeModal={closeModal}
    />
  )
}
