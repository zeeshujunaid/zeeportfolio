import About from "./Pages/About/About";
import Skills from "./Pages/Skills/Skills";
import Project from "./Pages/Project/Project";
import ContactUs from "./Pages/Contact/ContactUs";
import { Route, Routes } from "react-router"
import Home from "./Pages/Home/Home";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="*" element={"error"}/>
      </Routes>
    </>
  )
}

export default App
