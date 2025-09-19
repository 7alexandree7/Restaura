
import Dishes from "./Components/Dishes/Dishes"
import HeroSection from "./Components/HeroSection/HeroSection"
import NavBar from "./Components/NavBar/NavBar"

function App() {

  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <HeroSection />
      <NavBar />
      <Dishes />
    </main>
  )
}

export default App
