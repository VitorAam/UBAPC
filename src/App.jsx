import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home.jsx'


function App() {

  return (
    <div className="App">
      <header>

      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </main>
      <footer>

      </footer>
    </div>
  )
}

export default App
