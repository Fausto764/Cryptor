//css
import "./App.css"
import { Contacto } from "./pages/Contacto/Contacto"
import { Informacion } from "./pages/Informacion/Informacion"
import { Inicio } from "./pages/Inicio/Inicio"
import { Servicios } from "./pages/Servicios/Servicios"
//componentes
import { Header } from "./components/Headerx/Header.jsx"
import { Footer } from "./components/Footer/Footer.jsx"

function App() {
  return (
    <>
      <Header />
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
