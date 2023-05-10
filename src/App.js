import { useState, useEffect } from "react";
import { ThemeProvider } from "./themeProvider";
import LoadingScreen from "./components/loadingScreen/LoadingScreen";
import Navbar from "./components/navBar/NavBar";
import Home from "./views/Home";
import About from "./views/About";
import Services from "./views/Services";
import Projects from "./views/Projects";
import Contact from "./views/Contact";

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    <ThemeProvider>
      <>
      
      {!loading ? (
        <div>
          <Navbar />
          <Home />
          <About />
          <Services />
          <Projects />
          <Contact />

        </div>
      ) : (
        <LoadingScreen />
      )}
      
      </>

    </ThemeProvider>
  );
}

export default App;
