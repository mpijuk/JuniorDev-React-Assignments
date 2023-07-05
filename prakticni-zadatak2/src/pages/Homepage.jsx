import Scoreboard from "../components/Scoreboard"
import Stopwatch from "../components/Stopwatch"
import styles from "../styles/Homepage.module.css"

const Homepage = () => {
    return(
        <div className={styles.homepageContainer}>
            <Scoreboard />
            <Stopwatch />       
        </div>
    )
}

export default Homepage