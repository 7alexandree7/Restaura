
import Dishes from "./Components/Dishes/Dishes"
import HeroSection from "./Components/HeroSection/HeroSection"
import NavBar from "./Components/NavBar/NavBar"
import About from "./Components/About/About"
import Mission from "./Components/Mission/Mission"
import Expertise from "./Components/Expertise/Expertise"

function App() {

  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <HeroSection />
      <NavBar />
      <Dishes />
      <About />
      <Mission />
      <Expertise />
    </main>
  )
}

export default App
