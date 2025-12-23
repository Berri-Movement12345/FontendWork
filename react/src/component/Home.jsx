import useFetch from "../Hooks/useFetch";
import { useCallback, useMemo, useState } from "react";
import ExpensiveCal from "./ExpensiveCal";
import Button from "./Button.jsx";
import Child from "./child.jsx";
import DataFetching from "./DatafFetching.jsx";
import Slider from "./slider.jsx";


function Home(){
    const [count, setCount]=useState(0);
    const result =useMemo(()=> ExpensiveCal(count), [count]);

    const [buttonCount, setButtonCount]=useState(0);
    const increment=useCallback(()=> setButtonCount((c)=> c + 1), []);
    const decrement=useCallback(()=> setButtonCount((c)=> c - 1), []);
    const reset=useCallback(()=> setButtonCount(() => 0), []);

    return(
        <>
            <div>
                <Slider/>
                
                <h1>Home</h1>
                <p>Result: {result}</p>
               
               <button onClick={() => setCount(count + 1)}>Increase</button>
               <button onClick={() => setCount(count - 1)}>Decrease</button>
               <button onClick={() => setCount(0)}>reset</button>
            </div> 
          
            <p>Count:{buttonCount}</p>
            <Button onClick={increment} label='Increment'/>
            <Button onClick={decrement} label='Decrement'/>
            <Button onClick={reset} label='Reset'/>

            <Child value="Static Data" />
            <button onClick={() => setCount(count + 1 )}>Increase {count}</button>
            <button onClick={() => setCount(count - 1 )}>Decrease {count}</button>
            <button onClick={() => setCount(0)}>Reset {count}</button>

            <DataFetching/>
            
        </> 
    );
}

export default Home;