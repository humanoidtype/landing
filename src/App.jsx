import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"

const App = () => {

 return (
  <div className="flex min-h-dvh flex-col">
  <Navbar />
   <main className="flex-1 p-6">
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
    </Routes>
   </main>
  <Footer />
  </div>
 )
}

export default App