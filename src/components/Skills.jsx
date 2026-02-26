import { useState } from "react";

export default function Skills() {
  const [visible, setVisible] = useState(true);

  return (
    <section className="card" id="skillsSection">
      <h2>Skills</h2>

      <button onClick={() => setVisible(!visible)}>
        Show/Hide Skills
      </button>

      {visible && (
        <ul>
          <li>
            Web Development
            <ul>
              <li>
                Frontend
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
              </li>
              <li>Backend (Currently Learning)</li>
            </ul>
          </li>
        </ul>
      )}
    </section>
  );
}
