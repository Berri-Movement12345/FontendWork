
import { useState,  } from "react";
import { ClipLoader } from "react-spinners";





function useFetch(){
    let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  return (
    <div className="sweet-loading">
      <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input
        value={color}
        onChange={(input) => setColor(input.target.value)}
        placeholder="Color of the loader"
      />

      <ClipLoader
        
      />
    </div>
  );

}
export default useFetch;