//css
import "./App.css"
import { Contacto } from "./pages/Contacto/Contacto"
import { Informacion } from "./pages/Informacion/Informacion"
import { Inicio } from "./pages/Inicio/Inicio"
import { Servicios } from "./pages/Servicios/Servicios"
//componentes

import { Footer } from "./components/Footer/Footer.jsx"

function App() {
  return (
    <>
      <main>
        <Inicio />
        <Informacion />
        <Servicios />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}

export default App
