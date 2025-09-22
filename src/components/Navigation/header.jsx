import style from './header.module.css';
import Logo_image from '../../assets/logo.png';
export const Header = () => {
  return (
    <>
    <div className={style.header}>
        <div className={style.logo}>
            <img src={Logo_image} alt="logo"></img>
        </div>
        <div className={style.content}>
            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#"> ABOUT</a></li>
                <li><a href="#"> CONTACT</a></li>
            </ul>
        </div>
    </div>
    </>
  )
}
