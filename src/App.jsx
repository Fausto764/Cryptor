//css
import "./App.css"

//React Router Dom
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

//componentes
import { Footer } from "./components/Footer/Footer.jsx"
import { Header } from "./components/Header/Header.jsx"
import Principal from "./Principal"
// import { FAQ } from "./pages/FAQ/FAQ"
function App() {
  return (
    <>
      <Header />
      <main>
        <Principal />
      </main>
      <Footer />
    </>

    // <Router>
    //   <Header />
    //   <Routes>
    //     <Route path='/' element={<Principal />}></Route>
    //     <Route path='/FAQ' element={<FAQ />}></Route>
    //   </Routes>
    //   <Footer />
    // </Router>
  )
}

export default App
