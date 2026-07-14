import { useState, useEffect } from "react";

import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Services from "../components/home/Services";
import Contact from "../components/home/Contact";
import Footer from "../components/home/Footer";
import ContactPopup from "../components/common/ContactPopup";

function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
  const timer = setTimeout(() => {
    setIsPopupOpen(true);
  }, 30000);

  return () => clearTimeout(timer);
}, []);

  const openPopup = () => {
    setIsPopupOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    document.body.style.overflow = "auto";

    // Prevent popup from showing again automatically
    // localStorage.setItem("popupClosed", "true");
  };

  return (
    <>
      <Navbar onContactClick={openPopup} />

      <Hero />

      <About />

      <Services />

      <Contact />

      <Footer />

      <ContactPopup
        isOpen={isPopupOpen}
        onClose={closePopup}
      />
    </>
  );
}

export default Home;