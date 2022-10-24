import css from '../Header/header.module.css'

const UserInfo = () => {
  return(
      <div className={css.userInfo}>
          <img className={css.circle} src={`https://ad.mains.life/img/default-user.png`} alt={'image'}/>
          <div>Hello</div>
          <div>User</div>
      </div>
  )
}
export {UserInfo}