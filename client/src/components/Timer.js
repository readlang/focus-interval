import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";


function Timer() {

    const [attTimer, setAttTimer] = useState(5)

    useEffect(()=>{
        console.log("attTimer:", attTimer)  
        const intervalId = setInterval(() => {
            setAttTimer(attTimer => --attTimer)
        }, 1000);
        if (attTimer === 0) {clearInterval(intervalId); console.log("finished")}
        return function() { clearInterval(intervalId)}
    }, [attTimer])

    /* 
    useEffect dependancy array:
    no brackets: run every time
    []: run only one time
    [x]: run only when x changes
    */
    
    return(
        <>
            <h1>Timer</h1>
            {attTimer}
        </>
    )
}

export default Timer;