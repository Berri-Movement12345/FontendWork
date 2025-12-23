import { useEffect, useState } from "react";

function Timer(){
    const [count, setCount]= useState(0);

    useEffect(()=>{
        const timer = setInterval(()=>{
            setCount((prev)=> prev + 1);
        }, 1000);

        return ()=>{
            clearInterval(timer);
        };
    },[]);

    return(
        <div>
            <p>Timer count: {count}</p>
        </div>
    );
}

export default Timer;