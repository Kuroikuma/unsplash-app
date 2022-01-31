import React from 'react'
import ReactDOM from 'react-dom'
import { Page } from './app/page/page'
import { ImageProvider } from './app/context/image.context'

ReactDOM.render(
  <React.StrictMode>
    <ImageProvider>
      <Page />
    </ImageProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
