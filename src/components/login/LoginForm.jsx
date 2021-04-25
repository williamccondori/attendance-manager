import React from 'react'
import { useForm } from 'react-hook-form'

const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()
  const onSubmit = (data) => alert(JSON.stringify(data))

  return (
    <>
      <form className="mb-4" onSubmit={handleSubmit(onSubmit)}>
        <div className={`app--form-group ${errors.email && 'app--form-error'}`}>
          <label htmlFor="email" className="app--form-label">
            Correo electrónico <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="email"
            placeholder="Tu correo electrónico"
            className="app--form-input"
            {...register('email', { required: true })}
          />
        </div>
        <div
          className={`app--form-group ${errors.password && 'app--form-error'}`}
        >
          <label htmlFor="password" className="app--form-label">
            Contraseña <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            id="password"
            className="app--form-input"
            placeholder="Tu contraseña"
            {...register('password', { required: true })}
          />
        </div>
        <button type="submit" className="app--button">
          Continuar
        </button>
      </form>
    </>
  )
}

export default LoginForm
