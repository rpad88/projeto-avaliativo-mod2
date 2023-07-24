import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginPage from '../pages/Login/LoginPage'

export default function PublicRoutes() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<LoginPage />} />
        </Routes>
      </Router>
  )
}
