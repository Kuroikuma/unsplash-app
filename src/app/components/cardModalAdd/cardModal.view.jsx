import error from '../../../assets/warning.png'
import success from '../../../assets/success.png'
import style from './cardModal.module.css'

export const CardModalView = (props) => {
  const {
    handleClick,
    handleSubmit,
    handleIsUpload,
    handleFile,
    handleLabel,
    handleUrl,
    handleIsUrl,
    isUrl,
    isUpload,
    notification,
    label,
    hiddenFileInput,
    closeModal,
  } = props
  return (
    <>
      <div className={style.container}>
        <h2>Add a new photo</h2>
        <div
          className={
            notification
              ? `${style.notification} ${style.show}`
              : style.notification
          }
        >
          <p>the provided url is not valid</p>
          <img src={error} alt="warning" />
        </div>
        <div className={style.inputsGroups}>
          <div className={style.input}>
            <p>Label</p>
            <input onChange={handleLabel} value={label} type="text" />
          </div>
          <div className={style.checkboxGroups}>
            <div className={style.checkbox}>
              <input onChange={handleIsUrl} checked={isUrl} type="checkbox" />
              <p>Url Photo</p>
            </div>
            <div className={style.checkbox}>
              <input
                onChange={handleIsUpload}
                checked={isUpload}
                type="checkbox"
              />
              <p>Uploaded Photo</p>
            </div>
          </div>
          {isUrl ? (
            <div className={style.input}>
              <p>Photo URL</p>
              <input onBlur={handleUrl} type="text" />
            </div>
          ) : isUpload ? (
            <>
              <button
                onClick={handleClick}
                type="button"
                className={style.button}
              >
                Choose file
              </button>
              <input
                ref={hiddenFileInput}
                onChange={handleFile}
                type="file"
                className={style.none}
              />
            </>
          ) : (
            <>
              <button
                onClick={handleClick}
                type="button"
                onChange={handleFile}
                className={style.button}
              >
                Choose file
              </button>
              <input
                ref={hiddenFileInput}
                onChange={handleFile}
                type="file"
                className={style.none}
              />
            </>
          )}
        </div>
        <div className={style.buttonGroups}>
          <button onClick={closeModal}>Cancel</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </>
  )
}
