export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Demo only)");
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
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            github.com
          </a>
        </p>
      </section>

      {/* Contact Form */}
      <section className="card">
        <h2>Contact Me</h2>

        <form id="contactForm" onSubmit={handleSubmit}>
          <input type="text" id="name" placeholder="Name" required />
          <br /><br />

          <input type="email" id="email" placeholder="Email" required />
          <br /><br />

          <textarea placeholder="Message" required />
          <br /><br />

          <button type="submit">Send</button>
        </form>
      </section>
    </>
  );
}