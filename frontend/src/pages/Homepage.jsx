import Action from "../components/Action";
import Features from "../components/Features";
import Courses from "../components/Courses";
import Facilities from "../components/Facilities";
import Footer from "../components/Footer";
import About from "../components/About";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import MainHeader from "../shared/navigation/MainHeader";
import { Contact } from "./Contact";

function Homepage() {
  return (
    <>
      <MainHeader />
      <Hero />
      <Courses />
      <Features />
      <Facilities />
      <About />
      <Testimonials />
      <Action />
      <Contact />
      <Footer />
    </>
  );
}

export default Homepage;
