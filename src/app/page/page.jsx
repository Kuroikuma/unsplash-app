import React, { useEffect, useContext } from 'react'
import style from './page.module.css'
import Context from '../context/image.context'
import { getImage } from '../../services/images.services'
import { Galery } from '../components/galery/galery'
import { NavBar } from '../components/nav-bar/nav-bar'

export const Page = () => {
  const { images, setImages } = useContext(Context)
  useEffect(() => {
    getImage().then((response) => setImages(response))
  }, [])
  const data = [
    { label: 'Esto es un ejemplo', url: 'https://picsum.photos/id/1/400/700' },
    { label: 'Esto es un ejemplo', url: 'https://picsum.photos/id/2/500/700' },
    { label: 'Esto es un ejemplo', url: 'https://picsum.photos/id/3/400/400' },
    { label: 'Esto es un ejemplo', url: 'https://picsum.photos/id/7/700/400' },
    { label: 'Esto es un ejemplo', url: 'https://picsum.photos/id/5/400/700' },
    { label: 'Esto es un ejemplo', url: 'https://picsum.photos/id/6/400/300' },
    { label: 'Esto es un ejemplo', url: 'https://picsum.photos/id/9/400/400' },
    { label: 'Esto es un ejemplo', url: 'https://picsum.photos/id/15/700/400' },
    { label: 'Esto es un ejemplo', url: 'https://picsum.photos/id/25/400/700' },
    { label: 'Esto es un ejemplo', url: 'https://picsum.photos/id/41/400/300' },
    { label: 'Esto es un ejemplo', url: 'https://picsum.photos/id/78/400/400' },
    { label: 'Esto es un ejemplo', url: 'https://picsum.photos/id/77/700/400' },
    { label: 'Esto es un ejemplo', url: 'https://picsum.photos/id/51/400/700' },
    { label: 'Esto es un ejemplo', url: 'https://picsum.photos/id/61/400/300' },
    { label: 'Esto es un ejemplo', url: 'https://picsum.photos/id/91/400/400' },
    {
      label: 'Esto es un ejemplo',
      url: 'https://picsum.photos/id/151/700/400',
    },
    { label: 'Esto es un ejemplo', url: 'https://picsum.photos/id/11/400/700' },
    { label: 'Esto es un ejemplo', url: 'https://picsum.photos/id/21/500/400' },
    { label: 'Esto es un ejemplo', url: 'https://picsum.photos/id/31/400/400' },
    { label: 'Esto es un ejemplo', url: 'https://picsum.photos/id/71/700/400' },
    {
      label: 'Esto es un ejemplo',
      url: 'https://picsum.photos/id/551/400/700',
    },
    {
      label: 'Esto es un ejemplo',
      url: 'https://picsum.photos/id/661/700/300',
    },
    {
      label: 'Esto es un ejemplo',
      url: 'https://picsum.photos/id/171/700/400',
    },
    {
      label: 'Esto es un ejemplo',
      url: 'https://picsum.photos/id/114/400/700',
    },
    {
      label: 'Esto es un ejemplo',
      url: 'https://picsum.photos/id/216/500/300',
    },
    {
      label: 'Esto es un ejemplo',
      url: 'https://picsum.photos/id/317/400/400',
    },
    {
      label: 'Esto es un ejemplo',
      url: 'https://picsum.photos/id/715/700/400',
    },
    {
      label: 'Esto es un ejemplo',
      url: 'https://picsum.photos/id/558/400/700',
    },
    {
      label: 'Esto es un ejemplo',
      url: 'https://picsum.photos/id/667/400/300',
    },
    {
      label: 'Esto es un ejemplo',
      url: 'https://picsum.photos/id/553/400/700',
    },
    {
      label: 'Esto es un ejemplo',
      url: 'https://picsum.photos/id/668/500/500',
    },
  ]
  return (
    <>
      <div className={style.container}>
        <NavBar />
        <Galery data={images} />
      </div>
    </>
  )
}
