import React from 'react'
export const CountData = () => {
    const [Count, setCount] = React.useState(0)
  return (
    <div>
        <h1>Result : {Count}</h1>
        <button onClick={() => setCount(Count - 1)} style={{width:"50px", height:"30px", background:"red", color:"white"}}> - </button>
        <button onClick={() => setCount(0)} style={{width:"75px", height:"30px", background:"green", color:"white"}}> Reset </button>
        <button onClick={() => setCount(Count + 1)} style={{width:"50px", height:"30px", background:"blue", color:"white"}}> + </button>
    </div>
  )
}
