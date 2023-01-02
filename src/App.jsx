import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Header/Navbar.jsx/Navbar.jsx'
import { Acoes } from './pages/Acoes.jsx'
import { Contato } from './pages/Contato.jsx'
import { Depoimentos } from './pages/Depoimentos.jsx'
import { Home } from './pages/Home.jsx'
import { Institucional } from './pages/Institucional.jsx'
import { Noticias } from './pages/Noticias.jsx'


function App() {

  return (
    <div className="App">
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/institucional" element={<Institucional />}/>
          <Route path="/acoes" element={<Acoes />}/>
          <Route path="/depoimentos" element={<Depoimentos />}/>
          <Route path="/noticias" element={<Noticias />}/>
          <Route path="/contato" element={<Contato />}/>
        </Routes>
      </main>
      <footer>

      </footer>
    </div>
  )
}

export default App
