import { useState, useEffect } from 'react'

const useDarkMode = () => {
  const [theme, setTheme] = useState('light')
  const className = theme === 'light' ? 'dark' : 'light'

  useEffect(
    () => {
      const root = window.document.documentElement
      root.classList.remove(className)
      root.classList.add(theme)
    },
    [theme],
    className
  )

  return [className, setTheme]
}

export default useDarkMode
