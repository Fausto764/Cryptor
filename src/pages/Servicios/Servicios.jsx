import { useState } from "react"
import { ServiciosData } from "../../data/serviciosData"
import "./servicios.css"
const Servicios = () => {
  const [isFlipped, setIsFlipped] = useState(false)

  const flipCard = () => {
    setIsFlipped(!isFlipped)
  }
  return (
    <section className='serviciosContenedor' id='servicios'>
      <h3 className='servicios__h3'>Servicios</h3>
      <div className='servicios__div'>
        {ServiciosData.map((elemento, index) => {
          return (
            <article key={index} className='card'>
              <div className='face front'>
                <img
                  src={elemento.imagen}
                  className='front__img '
                  alt={elemento.nombre}
                />

                <span className='front__span'>{elemento.nombre}</span>
              </div>
              <div className='face back'>
                <p className='back__p'>{elemento.descripcion}</p>
                <span className='back__span'>{elemento.nombre}</span>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export { Servicios }
