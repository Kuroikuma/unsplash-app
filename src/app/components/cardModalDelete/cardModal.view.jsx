import error from '../../../assets/warning.png'
import success from '../../../assets/success.png'
import style from './cardModal.module.css'

export const CardModalDeleteView = (props) => {
  const {
    closeModal,
    id,
    handleDeleteImage,
    handleChange,
    idW,
    notification,
    isError,
  } = props
  return (
    <>
      <div className={style.container}>
        <h2>Are you sure?</h2>
        <div
          className={
            notification
              ? `${style.notification} ${style.show}`
              : style.notification
          }
        >
          <p>
            {isError ? 'the id entered is wrong' : 'the image has been deleted'}
          </p>
          <img src={isError ? error : success} alt="warning" />
        </div>
        <div className={style.inputsGroups}>
          <p>
            Please type <span>{id}</span> to confirm.
          </p>
          <input value={idW} onChange={handleChange} type="password" />
        </div>
        <div className={style.buttonGroups}>
          <button onClick={closeModal}>Cancel</button>
          <button onClick={handleDeleteImage}>Delete</button>
        </div>
      </div>
    </>
  )
}
