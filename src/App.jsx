import { useState } from 'react'
import confetti from 'react-confetti'
import PlanetScene from './PlanetScene'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PlanetScene />
      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <button
          onClick={() => {
            confetti({
              particleCount: 150,
              spread: 80,
              origin: { y: 0.6 }
            })
          }}
        >
          Lanzar confeti
        </button>
      </div>
    </>
  )
}

export default App