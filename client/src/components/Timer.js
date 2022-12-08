import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";


function Timer() {
    const [timerOn, setTimerOn] = useState(false)
    const [attTimer, setAttTimer] = useState(65)

    useEffect(()=>{
        let intervalId
        if (timerOn) {
            intervalId = setInterval(() => {
                setAttTimer(attTimer => --attTimer)
            }, 1000);
            console.log("attTimer:", attTimer )
            if (attTimer <= 0) {clearInterval(intervalId); console.log("finished")}
            return function() { clearInterval(intervalId)} // req'd to prevent runaway counter
        } else {
            clearInterval(intervalId)
        }
    }, [timerOn, attTimer])

    function converter(total) { // input total time in seconds
        let hours = 0, mins = 0, secs = 0;

        if (total < 60) {
            secs = total;
        } else if (total < 3600) {
            mins = (total - (total % 60))/60
            secs = total - (mins * 60)
        } else {
            hours = (total - (total % 3600))/3600
            mins = (total-(hours*3600) - ((total-(hours*3600)) % 60))/60
            secs = total - (hours * 3600) - (mins * 60)
        }

        return(
            {
            disp: `${hours}:${mins.toLocaleString('en-US', {minimumIntegerDigits: 2})}:${secs.toLocaleString('en-US', {minimumIntegerDigits: 2})}`,
            h: hours,
            m: mins,
            s: secs,
            }
        )
    }



    /* 
    useEffect - use to cause an "effect" after the DOM is rendered
    dependancy array:
    no brackets: run every render
    []: run only on initial render
    [x]: run only when x changes
    */
    
    return(
        <>
            <h1>Timer</h1>
            <button onClick={()=>setTimerOn(!timerOn)} >{timerOn ? "true" : "false"}</button>
            <button onClick={()=> setAttTimer(5)} >reset</button>
            {converter(attTimer).disp}
        </>
    )
}

export default Timer;