import "./App.css";
import { Home } from "./components/Home";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Skill } from "./components/Skill";
import { Education } from "./components/Education";
import { Project } from "./components/Project";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ScrollTopButton } from "./components/ScrollTopButton";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skill />
      <Education />
      <Project />
      <Experience />
      <Contact />
      <Footer />
      <ScrollTopButton />
    </>
  );
}

export default App;
