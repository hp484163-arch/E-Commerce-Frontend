import { useState } from "react"
export const OnSubmit = () => {
   const [value, setvalue] = useState("")
   const handleSubmit = (e) => {
    e.preventDefault()
      alert(`You typed: ${value}`)
      setvalue("")
    }
  return (
    <div>
       <form onSubmit={handleSubmit}>
          <label htmlFor="text-input">Enter Text:</label>
            <input id="text-input" type="text" value={value} onChange={(e) => setvalue(e.target.value)}/>
          <button type="submit">Submit</button>
       </form>
    </div>
  )
}