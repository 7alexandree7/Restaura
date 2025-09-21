
import Dishes from "./Components/Dishes/Dishes"
import HeroSection from "./Components/HeroSection/HeroSection"
import NavBar from "./Components/NavBar/NavBar"
import About from "./Components/About/About"
import Mission from "./Components/Mission/Mission"
import Expertise from "./Components/Expertise/Expertise"
import Reviews from "./Components/Reviews/Reviews"
import Contact from "./Components/Contact/Contact"

function App() {

  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <HeroSection />
      <NavBar />
      <Dishes />
      <About />
      <Mission />
      <Expertise />
      <Reviews />
      <Contact />
    </main>
  )
}

export default App
