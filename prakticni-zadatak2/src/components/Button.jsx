import styles from "../styles/Button.module.css"

const Button = ({label, action}) => {
    function handleClick() {
        action();
    }

    return(
        <div className={styles.setButton}>
            <button onClick={handleClick} className={styles.click}>{label}</button>
        </div>
    )
}

export default Button;