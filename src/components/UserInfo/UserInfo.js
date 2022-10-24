import css from './circle.css'

const UserInfo = () => {
  return(
      <div className={css.info}>
          {/*<img className={css.circle} src={`https://ad.mains.life/img/default-user.png`} alt={'image'}/>*/}
          <div>Hello</div>
          <div>Name</div>
      </div>
  )
}
export {UserInfo}