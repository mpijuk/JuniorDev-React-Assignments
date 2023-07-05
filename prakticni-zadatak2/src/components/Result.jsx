import styles from "../styles/Result.module.css"

const Result = ({left,right}) => {
    return(
        <div>
            <p className={styles.result}>{left}:{right}</p>
        </div>
    )
}

export default Result;