import React, { useState, createContext } from 'react'

export const Context = createContext()

export const ImageProvider = ({ children }) => {
  const [images, setImages] = useState([])
  const [keyboard, setKeyboard] = useState('')
  return (
    <Context.Provider value={{ images, setImages, keyboard, setKeyboard }}>
      {children}
    </Context.Provider>
  )
}

export default Context
