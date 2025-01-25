import { Outlet } from "react-router-dom"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import HomeLayout from "./Layouts/Homelayout"

function App() {

  return (
    <>
      <Navbar/>
      <HomeLayout/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
