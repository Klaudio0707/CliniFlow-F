import { Link, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Menu from './pages/Menu'
import Register from './pages/Register'


function App() {


  return (
    <>
   <nav>
    <Link to="/"  >Home</Link>
    <Link to="/login">Login</Link>
    <Link to="/register">Registre-se</Link>
   </nav>
    
    <Routes>
    <Route path="/" element={<Menu/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    </Routes>
   
     
    </>
  )
}

export default App
