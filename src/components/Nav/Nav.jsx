import { useState } from "react"
//css
import "./nav.css"
//React Router Dom
// import { Link } from "react-router-dom"

const Nav = ({ isMenuOpen }) => {
  const [currentSection, setCurrentSection] = useState("inicio")
  return (
    <nav className={isMenuOpen ? "nav" : "hide"}>
      <ul className='nav__ul'>
        <li className='nav__ul__li'>
          <a href='/' className='nav__ul__li__a'>
            <span>Inicio</span>
          </a>
        </li>
        <li className='nav__ul__li'>
          <a href='#informacion' className='nav__ul__li__a'>
            <span>Informacion</span>
          </a>
        </li>
        <li className='nav__ul__li'>
          <a href='#contacto' className='nav__ul__li__a'>
            <span>Contacto</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}
export { Nav }
