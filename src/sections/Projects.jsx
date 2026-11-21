
const projects = [
  {
    number: "01",
    name: "eCoachBasketball+",
    category: "Sports & Video Streaming",
    icon: "🏀",
    accent: "project-purple",
    description:
      "A basketball training platform where users explore coach profiles and access professional training videos through subscriptions.",
    highlights: [
      "Coach profiles and training content",
      "Subscription-based video access",
      "Mobile experience for iOS and Android",
    ],
    technologies: ["React Native", "JavaScript", "REST APIs", "Subscriptions"],
  },
  {
    number: "02",
    name: "PerfectlyWed",
    category: "Wedding & Events",
    icon: "💍",
    accent: "project-pink",
    description:
      "A wedding management experience connecting hosts and guests through invitations, event details, and RSVP features.",
    highlights: [
      "Host and guest applications",
      "Digital invitations and RSVP",
      "Wedding events and live updates",
    ],
    technologies: ["React Native", "JavaScript", "API Integration", "Firebase"],
  },
  {
    number: "03",
    name: "YourFleek",
    category: "Service Marketplace",
    icon: "✨",
    accent: "project-blue",
    description:
      "A marketplace experience where beauty professionals showcase services and customers discover and book appointments.",
    highlights: [
      "Professional service listings",
      "Customer appointment booking",
      "Marketplace-style user experience",
    ],
    technologies: ["React Native", "JavaScript", "REST APIs", "Mobile UI"],
  },
  {
    number: "04",
    name: "Friendship Game",
    category: "Social & Gaming",
    icon: "🎮",
    accent: "project-orange",
    description:
      "A mobile application project focused on delivering an engaging user experience through interactive app features.",
    highlights: [
      "Cross-platform mobile development",
      "Interactive user interface",
      "Feature implementation and integration",
    ],
    technologies: ["React Native", "JavaScript", "iOS", "Android"],
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section section-padding">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-eyebrow">FEATURED WORK</span>

          <h2>
            Projects that <span className="gradient-text">make an impact.</span>
          </h2>

          <p>
            A selection of mobile applications I've worked on across sports,
            events, and service-based platforms.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className="project-card"
              key={project.number}
            >
              <div className={`project-visual ${project.accent}`}>
                <div className="project-visual-top">
                  <span className="project-number">
                    PROJECT / {project.number}
                  </span>
                  <span className="project-icon">{project.icon}</span>
                </div>

                <div className="project-visual-bottom">
                  <span className="project-category">
                    {project.category}
                  </span>
                  <h3>{project.name}</h3>
                </div>

                <div className="project-visual-glow" />
              </div>

              <div className="project-content">
                <p className="project-description">
                  {project.description}
                </p>

                <ul className="project-highlights">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>
                      <span className="highlight-dot">↗</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-footer">
          <span className="projects-footer-line" />
          <p>
            Building products with <span>purpose, performance,</span> and
            attention to detail.
          </p>
          <span className="projects-footer-line" />
        </div>
      </div>
    </section>
  );
}

export default Projects;
