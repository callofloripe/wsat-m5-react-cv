import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
  ];

  const education = [
    {
      year: "2024",
      program: "BS Information Technology",
      school: "University of Science and Technology of Southern Philippines"
    },
    {
      year: "2022",
      program: "Senior High School",
      school: "Misamis Oriental Institute of Science and Technology"
    }
  ];

  return (
    <div className={darkMode ? "dark-mode" : ""}>

      <button
        className="dark-toggle"
        onClick={() => setDarkMode(!darkMode)}
        
        style={{
          display: "block",
          margin: "20px auto",
          padding: "10px 18px",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <Header />
      <About />
      <Skills skills={skills} />
      <Education education={education} />
      <Contact />

    </div>
  );
}

export default App;