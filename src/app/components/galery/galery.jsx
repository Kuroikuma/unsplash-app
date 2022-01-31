import { useMasonry } from '../../hooks/useMasonry'
import { GaleryColumn } from './galery-column'
import style from './galery.module.css'

export const Galery = ({ data }) => {
  const [columns] = useMasonry(data)
  return (
    <div className={style.container}>
      {columns &&
        columns.map((item, index) => <GaleryColumn key={index} item={item} />)}
    </div>
  )
}
