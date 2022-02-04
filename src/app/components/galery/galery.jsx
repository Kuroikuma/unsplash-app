import React, { useEffect, useContext } from 'react'
import Context from '../../context/image.context'
import { getImage } from '../../../services/images.services'
import { socket } from '../socket/socket'
import { useMasonry } from '../../hooks/useMasonry'
import { GaleryColumn } from './galery-column'
import style from './galery.module.css'

export const Galery = () => {
  const { images, setImages, keyboard } = useContext(Context)
  useEffect(() => {
    getImage().then((response) => setImages(response))
    socket.on('server:loadImage', (imagesSocket) => {
      setImages(imagesSocket)
    })
    return () => {
      socket.off()
    }
  }, [])
  const [columns] = useMasonry(images, keyboard)
  return (
    <div className={style.container}>
      {columns &&
        columns.map((item, index) => <GaleryColumn key={index} item={item} />)}
    </div>
  )
}
