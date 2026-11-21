
const architectureLayers = [
  {
    name: "Presentation Layer",
    detail: "Screens · Components · ViewModels",
    number: "01",
  },
  {
    name: "Domain Layer",
    detail: "Use Cases · Business Logic · Entities",
    number: "02",
  },
  {
    name: "Data Layer",
    detail: "Repositories · API Services · Local Storage",
    number: "03",
  },
];

const expertiseAreas = [
  {
    number: "01",
    title: "Scalable Architecture",
    description:
      "Build maintainable mobile applications using feature-based structure, MVVM, and Clean Architecture principles.",
    tags: ["MVVM", "Clean Architecture", "SOLID"],
  },
  {
    number: "02",
    title: "React Native Engineering",
    description:
      "Develop cross-platform applications with reusable components and an understanding of the React Native rendering architecture.",
    tags: ["React Native", "Fabric", "TurboModules"],
  },
  {
    number: "03",
    title: "State & API Management",
    description:
      "Manage application state and data flow while keeping API communication organized and reusable.",
    tags: ["Redux Toolkit", "RTK Query", "REST APIs"],
  },
  {
    number: "04",
    title: "Quality & Delivery",
    description:
      "Improve reliability through testing, debugging, performance profiling, and automated release workflows.",
    tags: ["Jest", "Detox", "Fastlane", "CI/CD"],
  },
];

function Expertise() {
  return (
    <section id="expertise" className="expertise-section section-padding">
      <div className="expertise-container">
        <div className="section-heading expertise-heading">
          <span className="section-eyebrow">ENGINEERING APPROACH</span>

          <h2>
            Beyond screens.
            <br />
            <span className="gradient-text">Building scalable systems.</span>
          </h2>

          <p>
            My approach combines clean code, thoughtful architecture,
            performance, and a strong focus on long-term maintainability.
          </p>
        </div>

        <div className="architecture-showcase">
          <div className="architecture-intro">
            <div>
              <span className="architecture-label">ARCHITECTURE</span>
              <h3>Separation of concerns</h3>
            </div>

            <p>
              A layered approach that keeps UI, business logic, and data
              responsibilities clearly separated.
            </p>
          </div>

          <div className="architecture-diagram">
            {architectureLayers.map((layer, index) => (
              <div className="architecture-layer-wrapper" key={layer.number}>
                <div className={`architecture-layer layer-${index + 1}`}>
                  <span className="architecture-layer-number">
                    {layer.number}
                  </span>

                  <div className="architecture-layer-info">
                    <h4>{layer.name}</h4>
                    <p>{layer.detail}</p>
                  </div>

                  <span className="architecture-layer-status">
                    Layer
                  </span>
                </div>

                {index < architectureLayers.length - 1 && (
                  <div className="architecture-connector">
                    <span />
                    <span className="connector-arrow">↓</span>
                    <span />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="architecture-note">
            <span className="architecture-note-icon">✦</span>
            <p>
              Designed for <strong>testability</strong>,{" "}
              <strong>reusability</strong>, and{" "}
              <strong>easier maintenance</strong>.
            </p>
          </div>
        </div>

        <div className="expertise-grid">
          {expertiseAreas.map((area) => (
            <article className="expertise-card" key={area.number}>
              <div className="expertise-card-top">
                <span className="expertise-number">{area.number}</span>
                <span className="expertise-card-symbol">↗</span>
              </div>

              <h3>{area.title}</h3>
              <p>{area.description}</p>

              <div className="expertise-tags">
                {area.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="engineering-principles">
          <span>MY ENGINEERING PRINCIPLES</span>
          <div>
            <strong>Readable Code</strong>
            <i />
            <strong>Reusable Components</strong>
            <i />
            <strong>Reliable Releases</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expertise;
