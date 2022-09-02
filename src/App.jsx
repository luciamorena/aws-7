import React, { useState } from 'react'

function App() {
  const [cor, setCor] = useState(null)

  const colorir = () => {
    const cor = '#' + Math.floor(Math.random()*12345678).toString(16)
    setCor(cor)
  }

  return (
    <div className='container' style={{ background: cor }}>
      <h1 onClick={colorir}>SISTEMA</h1>
    </div>
  )
}

export default App