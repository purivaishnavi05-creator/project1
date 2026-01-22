import { useState } from 'react'
import './App.css'
import Login from './pages/Login.jsx'
import Registration from './pages/Registration.jsx'

function App() {
  const [currentPage, setCurrentPage] = useState("register");
  const [currentPage, setCurrentPage] = useState("register")
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div>
      {currentPage === "register" && (
        <Registration onRegister={() => setCurrentPage("login")} />
      )}

      {currentPage === "login" && (
        isLoggedIn ? (
          <h1>Welcome, Admin!</h1>
        ) : (
          <Login onLogin={() => setIsLoggedIn(true)} />
        )
      )}
    </div>
  )
}

export default App
