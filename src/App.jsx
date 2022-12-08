import React, { useEffect, useMemo, useState } from "react"

const App = () => {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)

  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    }
  }, [dark])
  const [data, setData] = useState(0)
  useEffect(() => {
    setData((data) => data + 1)
  }, [themeStyle])
  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number])
  function slowFunction(number) {
    for (let i = 0; i <= 1000000000; i++) {}
    return number * 2
  }
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <div style={themeStyle} onClick={() => setDark((prev) => !prev)}>
        change theme
      </div>
      <div>{doubleNumber}</div>
      <div>{data}</div>
    </div>
  )
}

export default App
