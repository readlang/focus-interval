import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
import converter from "./converter";
import ModalAttInt from "./ModalAttInt";


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

            <ModalAttInt/>
        </>
    )
}

export default Timer;