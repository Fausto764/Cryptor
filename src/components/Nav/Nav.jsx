// import { useState } from "react"
//css
import "./nav.css"
//React Router Dom
// import { Link } from "react-router-dom"

const Nav = ({ isMenuOpen, setIsMenuOpen }) => {
  // const [currentSection, setCurrentSection] = useState("inicio")
  function handleMenu() {
    setIsMenuOpen(false)
  }
  return (
    <nav className={isMenuOpen ? "nav" : "hide"}>
      <ul className='nav__ul'>
        <li className='nav__ul__li'>
          <a href='/' className='nav__ul__li__a' onClick={handleMenu}>
            <span>Inicio</span>
          </a>
        </li>
        <li className='nav__ul__li'>
          <a
            href='#informacion'
            className='nav__ul__li__a'
            onClick={handleMenu}
          >
            <span>Informacion</span>
          </a>
        </li>
        <li className='nav__ul__li'>
          <a href='#contacto' className='nav__ul__li__a' onClick={handleMenu}>
            <span>Contacto</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}
export { Nav }
