import React, { useState, useEffect } from "react";
import "./Timer.css"
const Timer = ({ initialSeconds = 60 }) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [timerEnded, setTimerEnded] = useState(false);

  useEffect(() => {
    if (seconds <= 0) {
      setTimerEnded(true);
      return;
    }

    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const handleReset = () => {
    setSeconds(initialSeconds);
    setTimerEnded(false);
  };

  return (
    <div className="timer-div">
      {timerEnded ? (
        <span className="resend" onClick={handleReset}>Qayta urinish</span>
      ) : (
        <span className="timer">
          {minutes.toString().padStart(2, "0")}:
          {remainingSeconds.toString().padStart(2, "0")}
        </span>
      )}
    </div>
  );
};

export default Timer;
