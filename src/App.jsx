import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'

{/* To locally host type following command in terminal: npm run dev */}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* Added background image */}
      <img src="src/img/background.jpg" alt="lotr-background-img" className='bg-image' />
      <main>
        <Dashboard/>
      </main>
    </div>
  )
}

export default App
