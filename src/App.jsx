import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <header>
        this is the header
      </header> */}
      <main>
        <img src="https://artistmonkeys.com/wp-content/uploads/2021/11/Minas-Tirith-Gondor-beautiful-landscape-2-scaled.jpg" alt="lotr-background-img" className='bg-image' />
      <Dashboard/>
      </main>
      {/*<footer>This is the footer</footer> */}
    </div>
  )
}

export default App
