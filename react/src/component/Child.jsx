

import { memo } from "react";

const Child = memo (({value})=>{
    console.log("Child Rendered");
    return <p>Value: {value}</p>;
});

export default Child;