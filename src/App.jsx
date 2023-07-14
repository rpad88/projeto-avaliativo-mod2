import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import LoginPage from './pages/Login/LoginPage'
import CadPacientePage from './pages/CadPaciente/CadPaciente.page'

function App() {
  
  return (
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage/>} />
          <Route path='/cadPaciente' element={<CadPacientePage/>} />
        </Routes>
      </Router>
  )
}

export default App
