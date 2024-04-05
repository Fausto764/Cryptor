import "./inicio.css"
// import { GiCctvCamera } from "react-icons/gi"
// import { GiSecurityGate } from "react-icons/gi"
// import { MdOutlineSystemSecurityUpdateWarning } from "react-icons/md"
// import { RiAlarmWarningFill } from "react-icons/ri"

import personasbg from "../../assets/personasbg.png"
const Inicio = () => {
  return (
    <section className='inicio'>
      <img src={personasbg} alt='personal de  cryptor' id='imagenFondo' />
      <div className='inicio__container'>
        <h1 className='inicio__title'>
          Alarmas Cryptor
          <br />
          <span>Expertos en Seguridad</span>
        </h1>
      </div>
    </section>
  )
}
export { Inicio }
