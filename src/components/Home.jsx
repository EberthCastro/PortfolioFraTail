import React from "react";
import hero from "../assets/hero.jpg";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

function Home() {
  return (
    <>
      <Navbar />
      <div className="section flex justify-center items-center" id="home">
        <div className="grid md:grid-cols-2 place-items-center gap-8">
          <div className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] rounded-full overflow-hidden shadow-heroSadow border-[20px] border-solid border-ghostWhite">
            <img
              src={hero}
              alt="hero-img"
              className="w-full h-full object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
          >
            <div className="text-grey sm:text-[1.25rem] mb-4">
              Junior Full Stack Web Developer
            </div>
            <h2 className="text-[2rem] sm:text-[3rem] font-bold mb-4">
              Eberth Castro
            </h2>
            <p className="opacity-80 text-[0.9rem]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus,
              velit nesciunt! Alias in tempore mollitia culpa aut, molestias
              quidem provident dignissimos itaque expedita fugit laborum saepe
              tempora cumque accusantium incidunt.
            </p>
            <div className="flex mt-4 gap-4">
              {/* <a
              href=""
              className="py-2 px-4 border-[2px] border-solid border-black text-[0.9rem] rounded-[2.2rem] shadow-md"
              >
              Download Cv
            </a> */}
              <a
                href="#contact"
                className="py-2 px-4 border-[2px] border-solid border-grey text-[0.9rem] rounded-[0.2rem] shadow-md hover:bg-black hover:text-ghostWhite"
              >
                Contact
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Home;
