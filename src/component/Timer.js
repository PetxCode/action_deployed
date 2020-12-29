import React, { useState, useEffect } from "react";

function Timer() {
  const [name, setName] = useState("");
  const [timer, setTimer] = useState("");
  const [isCounting, setIsCounting] = useState(false);
  const [shouldAlert, setShouldAlert] = useState(false);

  useEffect(() => {
    const timerInt = parseInt(timer);
    if (isCounting && timerInt > 0) {
      setTimeout(() => {
        setTimer(timerInt - 1);
      }, 1000);
    } else {
      if (shouldAlert) {
        alert("Your time is Up...!");
        setShouldAlert(false);
      }
      setIsCounting(false);
    }
  }, [isCounting, timer]);
  return (
    <div>
      <center>
        <h3>The Timer</h3>
      </center>
      <section>
        <div style={{ display: "flex" }}>
          {name}
          <input
            disabled={isCounting}
            style={{ margin: "0 20px" }}
            placeholder="Enter a time"
            type="Number"
            value={timer}
            onChange={(e) => {
              setTimer(e.target.value);
            }}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsCounting(true);
              setShouldAlert(true);
            }}
          >
            Start
          </button>
        </div>
      </section>
    </div>
  );
}

export default Timer;
