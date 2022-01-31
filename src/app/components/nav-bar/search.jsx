import style from './nav-bar.module.css'
import logo from './../../../assets/search.png'
import { useState } from 'react'

export const Search = () => {
  const [keyboard, setKeyboard] = useState('')
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
