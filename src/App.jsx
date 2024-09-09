import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <img src="https://artistmonkeys.com/wp-content/uploads/2021/10/Rivendell-beautiful-landscape-1-scaled.jpg" alt="lotr-background-img" className='bg-image' />
      <main>
        <Dashboard/>
      </main>
    </div>
  )
}

export default App
