import style from './nav-bar.module.css'

export const Logo = () => {
  return (
    <div className={style.container__left__profile}>
      <div className={style.container__left__profile__logo}>
        <div className={style.container__left__profile__logo__item}></div>
        <div className={style.container__left__profile__logo__item}></div>
      </div>
      <div className={style.container__left__profile__title}>
        <h2>Kuroikuma</h2>
        <p>devchallenges.io</p>
      </div>
    </div>
  )
}
