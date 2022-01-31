import { useState, useEffect } from 'react'

export const useMasonry = (data, keyboard) => {
  console.log(data)
  const [column1, setColumn1] = useState([])
  const [column2, setColumn2] = useState([])
  const [column3, setColumn3] = useState([])
  const [isCompleted, setIsCompleted] = useState(false)
  const [columns, setColumns] = useState([])
  const [totalColumns, setTotalColumns] = useState(3)

  const cambiarTamañao = () => {
    if (window.innerWidth > 700) {
      setTotalColumns(3)
      console.log('log3')
    }
    if (window.innerWidth <= 700) {
      setTotalColumns(2)
    }
    if (window.innerWidth <= 375) {
      setTotalColumns(2)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', cambiarTamañao)
  }, [])

  useEffect(() => {
    setColumn1([])
    setColumn2([])
    setColumn3([])
    setColumns([])
    for (let i = 0; i < Math.ceil(data.length / totalColumns); i++) {
      for (let j = 0; j < totalColumns; j++) {
        if (data[i * totalColumns + j]) {
          if (j === 0) {
            console.log(i * totalColumns + j + ' ' + data[i * totalColumns + j])
            setColumn1((prevColumn) => [
              ...prevColumn,
              data[i * totalColumns + j],
            ])
          }
          if (totalColumns === 3 || totalColumns === 2) {
            if (j === 1) {
              setColumn2((prevColumn) => [
                ...prevColumn,
                data[i * totalColumns + j],
              ])
            }
          }
          if (totalColumns === 3) {
            if (j === 2) {
              setColumn3((prevColumn) => [
                ...prevColumn,
                data[i * totalColumns + j],
              ])
            }
          }
        }
      }
    }
    setIsCompleted(!isCompleted)
    console.log('entra3')
  }, [data, totalColumns])
  useEffect(() => {
    if (totalColumns === 3) {
      if (keyboard || (column1.length && column2.length && column3.length)) {
        setColumns((prevColumn) => [...prevColumn, column1, column2, column3])
      }
    }
    if (totalColumns === 2) {
      console.log('entra2')
      if (keyboard || (column1.length && column2.length)) {
        setColumns((prevColumn) => [...prevColumn, column1, column2])
      }
    }
    if (totalColumns === 1) {
      console.log('entra2')
      if (keyboard || column1.length) {
        setColumns((prevColumn) => [...prevColumn, column1])
      }
    }
  }, [isCompleted])
  return [columns]
}
