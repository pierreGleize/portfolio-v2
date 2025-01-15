import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import "remixicon/fonts/remixicon.css";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
