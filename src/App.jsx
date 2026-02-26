import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
function App() {
const [darkMode, setDarkmode] = useState(false);
return (
  <div className={darkMode ? "dark-mode" : ""}>
    <button className="dark-toggle"
    onClick={() => setDarkmode(!darkMode)}>
      {darkMode ? "light Mode" : "Dark Mode"}
    </button>

    <Header />
    <About />
    <Skills />
    <Education />
    <Contact />
  </div>
);
}

export default App;
