import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from './LoginForm'

const LoginCard = () => {
  return (
    <div className="app--card">
      <h1 className="mb-4 text-lg font-bold text-gray-800">
        ¿Ya tienes una cuenta? Inicia sesión
      </h1>
      <LoginForm />
      <div className="flex justify-end">
        <Link to="/resetpassword" className="text-sm font-medium text-teal-500">
          ¿Olvidaste tu contraseña?
        </Link>
      </div>
    </div>
  )
}

export default LoginCard
