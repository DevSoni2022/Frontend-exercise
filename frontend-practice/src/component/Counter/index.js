import { useState } from "react";
import "./counter.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

  const [incrementBy,setIncrementBy] = useState(0)
  
const isIncrement=()=>{
  debugger
  if(!incrementBy){
  setCount((count)=>count+1)
  }
  else{
    setCount((count)=>count+ Number(incrementBy))

  }
}

const DecrementBy=()=>{
  if(!incrementBy){
  setCount((count)=>count-1)
  }
  else{
    setCount(count-Number(incrementBy))
  }
}

const handleOnChange=(ele)=>{
  debugger
  let test = ele
setIncrementBy(test.target.value)
}
const reset=()=>{
  setIncrementBy(0)
  setCount(0)
}
  return (
    <div className="counter">
      <span className="Counter-heading">Counter</span>
      <div className="main-function">
        <div className="counter-count">{count}</div>
        <div className="btns">
            <button onClick={()=>isIncrement()} >Increment</button>
            <button onClick={()=>DecrementBy()}>Decrement</button>

        </div>
        <div className="second-container">
          <label>Increment By</label>
        <input type="number" placeholder="Increment By" onChange={(e)=>handleOnChange(e)} />
        </div>
        <div className="reset" onClick={()=>reset()}>
Reset
        </div>
      </div>
    </div>
  );
};

export default Counter;
