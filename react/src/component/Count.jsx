

import { useEffect, useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

   useEffect(()=>{
    document.title =`Clicked ${count} times`
   }, [count]);
 
    return (
        <div className="too">
            <h1>Count:{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
            <button onClick={()=>setCount(0)}>Reset</button>
            
        </div>
    );
}
export default Count;