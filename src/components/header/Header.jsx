import "./header.css"
import logoCryptor from "../../assets/logoCryptor.png"

const Header = () => {
  return (
    <header className='header'>
      <a href='#top' className='header__a'>
        <h1 className='header__a__h1'>Cryptor</h1>
        <img src={logoCryptor} alt='cryptor' className='header__a__img' />
      </a>
      <nav>
        <ul>
          <li>
            <a href='#top'>Inicio</a>
          </li>
          <li>
            <a href='#top'>Informacion</a>
          </li>
          <li>
            <a href='#top'>Contacto</a>
          </li>
          <li>
            <a href='#top'>Preguntas Frecuentes</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export { Header }
