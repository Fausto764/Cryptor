import logoCryptor from "../../assets/logoCryptor.png"
import { FaWhatsapp } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaPhoneAlt } from "react-icons/fa"

import "./footer.css"
const Footer = () => {
  return (
    <footer className='footer'>
      <section className='footer__section'>
        <img src={logoCryptor} />
        <div className='datos-contenedor'>
          <h4>Contactenos</h4>
          <div className='footer-datos'>
            <span className='footer-email'>Email: telefonofg@gmail.com</span>{" "}
            <br />
            <span className='footer-telefono'>Telefono: 13332424</span>
          </div>
        </div>
        <div className='footer-links'>
          <a href='https://wa.me/5492236827806' target='_blank'>
            <FaWhatsapp />
          </a>
          <a href='https://www.instagram.com/alarmascryptor/' target='_blank'>
            <FaInstagram />
          </a>
          <a href='tel:+5492236827806' target='_blank'>
            <FaPhoneAlt />
          </a>
        </div>
      </section>
      <span className='footer__span'>
        © Copyright Cryptor. Todos Los Derechos Reservados
      </span>
    </footer>
  )
}
export { Footer }
