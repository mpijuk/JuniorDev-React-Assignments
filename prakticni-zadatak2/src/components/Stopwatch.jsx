import React, { useState, useEffect } from "react";
import Button from "./Button";
import styles from "../styles/Stopwatch.module.css"

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);


  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);

  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setTime(0);
  };

  return (
    <div className={styles.stopwatchContainer}>
      <p className={styles.time}>
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </p>
      <div className={styles.stopwatchButtons}>
        <Button label={isRunning ? "Stop" : "Start"} action={startAndStop} />
        <Button label="Reset" action={reset} />
      </div>
    </div>
  );
};

export default Stopwatch