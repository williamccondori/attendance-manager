import React from 'react'

const LoginForm = () => {
  return (
    <div className="p-10 bg-gray-300">
      <div className="bg-white">
        <form>
          <h1 className="mt-12 text-xl font-bold leading-tight md:text-2xl">
            Log in to your acoount
          </h1>
          <div className="mb-4">
            <label to="email" className="block mb-2 text-sm text-indigo-500">
              Email address
            </label>
            <input
              type="text"
              placeholder="Enter you email"
              className="input"
            />
            <button
              type="submit"
              className="block w-full px-3 py-2 text-sm font-semibold text-center text-white bg-blue-700 hover:bg-blue-600"
            >
              Continuar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
