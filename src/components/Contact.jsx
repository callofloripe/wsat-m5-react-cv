import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost/cv-api/process.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: name })
    })
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          alert(data.message);
        } else {
          alert("Unexpected error occurred.");
        }
      })
      .catch(() => {
        alert("Error connecting to server.");
      });
  };

  return (
    <>
      {/* Contact Links */}
      <section className="card">
        <h2>Contact Links</h2>
        <p>
          Email:{" "}
          <a href="mailto:callofloripe@gmail.com">callofloripe@gmail.com</a>
          <br />
          GitHub:{" "}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com
          </a>
        </p>
      </section>

      {/* Contact Form */}
      <section className="card">
        <h2>Contact Me</h2>

        <form id="contactForm" onSubmit={handleSubmit}>
          {/* Name input */}
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br /><br />

          {/* Email input */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br /><br />

          {/* Message textarea */}
          <textarea placeholder="Message" required />
          <br /><br />

          <button type="submit">Send</button>
        </form>
      </section>
    </>
  );
}