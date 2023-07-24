import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from '../pages/Home/Home.page'
import CadPacientePage from '../pages/CadPaciente/CadPaciente.page'
import LoginPage from '../pages/Login/LoginPage'

export default function PrivateRoutes() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/cadPaciente' element={<CadPacientePage/>} />
          <Route path='/home' element={<HomePage/>} />
        </Routes>
      </Router>
  )
}
