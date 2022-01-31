import style from './galery.module.css'
import { Botton } from './botton-delete'
import { useState } from 'react'

export const GaleryItem = ({ element }) => {
  const [hover, setHover] = useState(false)
  const handleHover = () => {
    setHover(!hover)
  }
  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      className={style.img}
    >
      <img src={element.url} alt={element} />
      <div className={hover ? `${style.card} ${style.show}` : `${style.card}`}>
        <Botton id={element.id} />
        <div className={style.label}>
          <h2>{element.label}</h2>
        </div>
      </div>
    </div>
  )
}
