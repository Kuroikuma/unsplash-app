import React, { useState, createContext } from 'react'

export const Context = createContext()

export const ImageProvider = ({ children }) => {
  const [images, setImages] = useState([])
  return (
    <Context.Provider value={{ images, setImages }}>
      {children}
    </Context.Provider>
  )
}

export default Context
