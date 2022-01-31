import style from './galery.module.css'
import { GaleryItem } from './galery-item'

export const GaleryColumn = ({ item }) => {
  return (
    <div className={style.item}>
      {item &&
        item.map((element, index) => (
          <GaleryItem key={index} element={element} />
        ))}
    </div>
  )
}
