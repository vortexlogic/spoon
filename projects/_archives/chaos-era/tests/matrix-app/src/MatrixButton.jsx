import { useState } from 'react'
import './MatrixButton.css'

export default function MatrixButton() {
  const [activated, setActivated] = useState(false)
  
  return (
    <button 
      className={`matrix-button ${activated ? 'activated' : ''}`}
      onClick={() => setActivated(!activated)}
    >
      {activated ? 'SYSTEM HACKED' : 'ACTIVATE NEO MODE'}
    </button>
  )
}
