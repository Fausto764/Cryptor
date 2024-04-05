import { Contacto } from "./pages/Contacto/Contacto"
import { Informacion } from "./pages/Informacion/Informacion"
import { Inicio } from "./pages/Inicio/Inicio"
import { Servicios } from "./pages/Servicios/Servicios"

const Principal = () => {
  return (
    <main>
      <Inicio />
      <Informacion />
      <Servicios />
      <Contacto />
    </main>
  )
}
export default Principal
