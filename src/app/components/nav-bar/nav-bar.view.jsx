import style from './nav-bar.module.css'
import { Search } from './search'
import { Button } from './button'
import { Logo } from './logo'
export const NavBarView = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.container__left}>
          <Logo />
          <Search />
        </div>
        <Button />
      </div>
    </>
  )
}
