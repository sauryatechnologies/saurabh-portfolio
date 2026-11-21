
const contactLinks = [
  {
    label: "Email",
    value: "Let's discuss an opportunity",
    href: "mailto:saurabh.iosdevlpr@gmail.com",
    icon: "✉",
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: "https://www.linkedin.com/in/saurabh-chaudhari-56843b1a2",
    icon: "in",
  },
  {
    label: "GitHub",
    value: "Explore my code",
    href: "https://github.com/sauryatechnologies",
    icon: "⌘",
  },
];

function Contact() {
  return (
    <section id="contact" className="contact-section section-padding">
      <div className="contact-container">
        <div className="contact-card">
          <div className="contact-glow contact-glow-one" />
          <div className="contact-glow contact-glow-two" />

          <div className="contact-content">
            <span className="section-eyebrow">LET'S CONNECT</span>

            <h2>
              Have a mobile project
              <br />
              <span className="gradient-text">in mind?</span>
            </h2>

            <p className="contact-description">
              I'm open to discussing Senior React Native, Senior iOS,
              and Mobile Engineering opportunities where I can contribute
              to building reliable and scalable applications.
            </p>

            <a
              className="contact-primary-button"
              href="mailto:YOUR_EMAIL@example.com"
            >
              <span>Start a conversation</span>
              <span className="contact-button-arrow">↗</span>
            </a>

            <div className="contact-links">
              {contactLinks.map((link) => (
                <a
                  className="contact-link-card"
                  href={link.href}
                  key={link.label}
                  target={link.label === "Email" ? undefined : "_blank"}
                  rel={link.label === "Email" ? undefined : "noreferrer"}
                >
                  <span className="contact-link-icon">{link.icon}</span>

                  <span className="contact-link-text">
                    <strong>{link.label}</strong>
                    <small>{link.value}</small>
                  </span>

                  <span className="contact-link-arrow">↗</span>
                </a>
              ))}
            </div>

            <a
              className="resume-link"
              href="/Saurabh-Chaudhari-Resume.pdf"
              download
            >
              <span className="resume-link-icon">↓</span>
              Download Resume
            </a>
          </div>
        </div>

        <footer className="portfolio-footer">
          <a className="footer-brand" href="#home">
            SC<span>.</span>
          </a>

          <p>
            Designed & built by <strong>Saurabh Chaudhari</strong>
          </p>

          <a className="back-to-top" href="#home">
            Back to top ↑
          </a>
        </footer>
      </div>
    </section>
  );
}

export default Contact;
