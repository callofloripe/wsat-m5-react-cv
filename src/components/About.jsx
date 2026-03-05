export default function About() {
  return (
    <section className="card">
      <h2>About Me</h2>
      <p>
        I am a first-year college student interested in web development,
        technology, and learning new programming skills.
      </p>
        <div style={{ textAlign: "center"}}>
      <img
         src={`${import.meta.env.BASE_URL}images/profile.jpg`}
        alt="Flor Callo profile photo"
        width="200"
        style={{ borderRadius: "10px"}}
      />
      </div>
    </section>
  );
}

<div className="profile-container">
    <img src="/wsat-m5-react-cv/images/profile.jpg" alt="Profile" />
</div>

