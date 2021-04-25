import React from 'react'
import LoginCard from '../components/login/LoginCard'

const Login = () => {
  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      <div className="w-full mt-10 sm:max-w-sm">
        <LoginCard />
      </div>
    </div>
  )
}

export default Login
