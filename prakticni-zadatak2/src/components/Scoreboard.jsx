import { useState } from "react";
import rudar from "./../assets/rudar.png"
import dosk from "./../assets/dosk.png"
import Team from "./Team";
import Result from "./Result";
import Button from "./Button";
import styles from "../styles/Scoreboard.module.css"
import { format } from 'date-fns'

const Scoreboard = () => {
    const [scoreLeft, setScoreLeft] = useState(0);
    const [scoreRight, setScoreRight] = useState(0);

    const date = new Date();
    
    return (
        <div className={styles.scoreBoard}>
            <div className={styles.firstRow}>
                <p className={styles.date}>{format(date, 'dd/MM/yyyy')}</p>
            </div>
            <div className={styles.secondRow}>
                <Team name='RUDAR' logo_url={rudar}/>
                <Result left={scoreLeft} right={scoreRight}/>
                <Team name='DOŠK' logo_url={dosk}/>
            </div>
            <div className={styles.thirdRow}>
                <Button label='+' action={() => setScoreLeft(scoreLeft+1)}/>
                <Button label='-' action={() => setScoreLeft(scoreLeft-1)}/>
                <Button label='Reset' action={() => {setScoreLeft(0); setScoreRight(0);}}/>
                <Button label='+' action={() => setScoreRight(scoreRight+1)}/>
                <Button label='-' action={() => setScoreRight(scoreRight-1)}/>
            </div>
        </div>
    )
    
}

export default Scoreboard