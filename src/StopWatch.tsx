import React, {useState, useEffect, useRef, use} from 'react';
import './StopWatch.css';

function StopWatch() {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef<number | null>(null);
    const startTimeRef = useRef(0);

    useEffect(() => {

        if(isRunning){
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 1000);
        }

        return(() => {
            if(intervalIdRef.current){
                clearInterval(intervalIdRef.current);
                intervalIdRef.current = null;
            }
        });

    }, [isRunning])

    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop(){
        setIsRunning(false);
    }

    function reset(){
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime(){
        const hours = String(Math.floor(elapsedTime / 3600000)).padStart(2, '0');
        const minutes = String(Math.floor((elapsedTime % 3600000) / 60000)).padStart(2, '0');
        const seconds = String(Math.floor((elapsedTime % 60000) / 1000)).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    }

    return(
        <div className="stopwatch">
            <div className="display">{formatTime()}</div>
            <div className="controls">

                <button onClick={start} className="start-button">Start</button>
                <button onClick={stop} className="stop-button">Stop</button>
                <button onClick={reset} className="reset-button">Reset</button>

            </div>
        </div>
    );

}

export default StopWatch;