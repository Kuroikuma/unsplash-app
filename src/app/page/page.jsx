import style from './page.module.css'
import { Galery } from '../components/galery/galery'
import { NavBar } from '../components/nav-bar/nav-bar'

export const Page = () => {
  return (
    <>
      <div className={style.container}>
        <NavBar />
        <Galery />
      </div>
    </>
  )
}
