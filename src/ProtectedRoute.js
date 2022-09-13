import React, { Children } from 'react'
import { Route, Router, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
// import { Navigate } from 'react-router-dom'
const ProtectedRoute = ({ auth, children }) => {
  const navigate = useNavigate()
  if (localStorage.getItem('isLogedIn')) {
    console.log('children rendered')
    return children
  } else {
    console.log('loged out')
    return <Navigate to={'/login'} replace />
  }
}

export default ProtectedRoute
