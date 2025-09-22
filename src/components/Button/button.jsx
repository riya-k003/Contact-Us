import styles from './button.module.css';
export const Button = (props) => {

    const{isOutline , icons , text , ...rest} = props;
  return (
    <div className={styles.btncontainer}>
        <button  { ...rest} className={props.isOutline ? styles.secondarybtn : styles.primarybtn}>
            {props.icons}
            {props.text}
            </button>
    </div>
  )
}
