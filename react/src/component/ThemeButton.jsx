import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

function ThemeButton() {
    const {theme, setTheme}=useContext(ThemeContext)

  return (
   <button onClick={()=> setTheme(theme === 'light' ? 'dark':
     'light')} style={{background: theme === 'light' ? '#0666a1ff' : '#110460ff', 
        color: theme === 'light' ? "#000" : "#fff"}}>Current Theme:</button>
  )
}

export default ThemeButton;
