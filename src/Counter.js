import React,{useState} from 'react'


function Counter() {
    const[count,setCount] = useState(0)
    const[showCount,setShowcount] = useState(0)
  return (
    <div>
       
      <button onClick={()=>setShowcount(!showCount)}>{showCount ? 'Hide show Count':'show Count'}</button>
      {showCount ?(
        <>
        <h1>Counter Show Open</h1>
      <h3>Counter IS - {count}</h3>
      <button onClick={()=> setCount(count+1)}>Increament</button><h1>Counter Show Open</h1>
      
      </>
      ):null}
      </div>
  
  );
}

export default Counter
