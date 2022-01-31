import style from './nav-bar.module.css'
import logo from './../../../assets/search.png'
import Context from '../../context/image.context'
import { getImageLabel } from '../../../services/images.services'
import { useEffect, useContext } from 'react'

export const Search = () => {
  const { setImages, keyboard, setKeyboard } = useContext(Context)

  useEffect(() => {
    if (keyboard) {
      getImageLabel(keyboard).then((response) =>
        response ? setImages(response) : null
      )
    }
  }, [keyboard])

  const handleKeyboard = (event) => {
    setKeyboard(event.target.value)
  }
  return (
    <div className={style.container__left__search}>
      <input
        placeholder="Search by name"
        value={keyboard}
        onChange={handleKeyboard}
        type="text"
      />
      <img src={logo} alt="logo" />
    </div>
  )
}
