import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('The spoon is not real')

  return (
    <div className="App">
      <div className="matrix-header">
        <h1>portfolio-website</h1>
        <p>Welcome to the real world, Neo</p>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Reality bends: {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and bend reality to your will
        </p>
      </div>
      <p className="matrix-quote">
        "{message}"
      </p>
    </div>
  )
}

export default App