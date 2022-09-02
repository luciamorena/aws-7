import React, { useState } from 'react'

function App() {
  const [cor1, setCor1] = useState(null)
  const [cor2, setCor2] = useState(null)

  const colorir = () => {
    // const cor1 = Math.floor(Math.random()*12345678).toString(16)
    const cor2 = Math.floor(Math.random()*12345678).toString(16)
    // const cor1 = 'f00'
    const cor1 = '00f'
    setCor1('#' + cor1)
    setCor2('#' + cor2)
    console.log(cor1,cor2)
  }

  return (
    <div className='container' style={{ background: `linear-gradient(45deg,${cor1},${cor2})` }}>
      <h1 onClick={colorir}>SISTEMA</h1>
    </div>
  )
}

export default App