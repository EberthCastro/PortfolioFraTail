import { BrowserRouter } from "react-router-dom";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import RouteAPi from "./routes/RouteAPi";

function App() {
  return (
      <BrowserRouter>
    {/* <div className="font-Poppins bg-ghostWhite">
      <Navbar />
      <Home />
      <Projects />      
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop /> */}
      <RouteAPi/>
    {/* </div> */}
      </BrowserRouter>
  )
}

export default App
