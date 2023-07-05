import Quiz from "../components/Quiz";
import { useState } from "react";
import styles from "../styles/Homepage.module.css";

const Homepage = () => {
    const[isStarted, setIsStarted] = useState(false);
    
    return (
        <div>
            {isStarted ? 
                <Quiz setAgain={setIsStarted}/>
                : <button className={styles.click} onClick={() => setIsStarted(true)}>Start Quiz</button> 
            }
        </div>
    );
}

export default Homepage;