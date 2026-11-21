
const skillCategories = [
  {
    id: "mobile",
    number: "01",
    title: "Mobile Development",
    description: "Building native and cross-platform mobile applications.",
    skills: [
      { name: "React Native", icon: "RN", color: "cyan", level: "Advanced" },
      { name: "Swift", icon: "Sw", color: "orange", level: "Advanced" },
      { name: "SwiftUI", icon: "UI", color: "orange", level: "Working Knowledge" },
      { name: "UIKit", icon: "UI", color: "orange", level: "Advanced" },
      { name: "Objective-C", icon: "Obj", color: "blue", level: "Experience" },
    ],
  },
  {
    id: "frontend",
    number: "02",
    title: "Frontend Development",
    description: "Creating responsive and maintainable user interfaces.",
    skills: [
      { name: "JavaScript", icon: "JS", color: "yellow", level: "Advanced" },
      { name: "TypeScript", icon: "TS", color: "blue", level: "Working Knowledge" },
      { name: "React.js", icon: "R", color: "cyan", level: "Experience" },
      { name: "HTML5", icon: "5", color: "orange", level: "Experience" },
      { name: "CSS3", icon: "3", color: "blue", level: "Experience" },
    ],
  },
  {
    id: "state",
    number: "03",
    title: "State Management",
    description: "Managing application data and predictable UI state.",
    skills: [
      { name: "Redux Toolkit", icon: "RT", color: "purple", level: "Advanced" },
      { name: "RTK Query", icon: "RQ", color: "purple", level: "Experience" },
      { name: "Redux Persist", icon: "RP", color: "purple", level: "Experience" },
      { name: "Context API", icon: "CX", color: "cyan", level: "Experience" },
    ],
  },
  {
    id: "backend",
    number: "04",
    title: "Backend & Database",
    description: "Integrating APIs, authentication and data persistence.",
    skills: [
      { name: "REST APIs", icon: "API", color: "green", level: "Advanced" },
      { name: "Firebase", icon: "FB", color: "yellow", level: "Experience" },
      { name: "SQLite", icon: "DB", color: "blue", level: "Experience" },
      { name: "Firestore", icon: "FS", color: "orange", level: "Experience" },
    ],
  },
  {
    id: "testing",
    number: "05",
    title: "Testing & Quality",
    description: "Improving reliability through automated testing.",
    skills: [
      { name: "Jest", icon: "J", color: "red", level: "Experience" },
      { name: "Detox", icon: "DX", color: "green", level: "Experience" },
      { name: "XCTest", icon: "XT", color: "blue", level: "Experience" },
    ],
  },
  {
    id: "devops",
    number: "06",
    title: "DevOps & Deployment",
    description: "Automating mobile application builds and releases.",
    skills: [
      { name: "Git", icon: "G", color: "orange", level: "Advanced" },
      { name: "GitHub Actions", icon: "GH", color: "blue", level: "Experience" },
      { name: "Fastlane", icon: "FL", color: "green", level: "Experience" },
      { name: "CI/CD", icon: "CD", color: "cyan", level: "Experience" },
    ],
  },
  {
    id: "architecture",
    number: "07",
    title: "Architecture & Principles",
    description: "Designing scalable and maintainable applications.",
    skills: [
      { name: "MVVM", icon: "MV", color: "cyan", level: "Advanced" },
      { name: "Clean Architecture", icon: "CA", color: "purple", level: "Experience" },
      { name: "SOLID Principles", icon: "SP", color: "blue", level: "Experience" },
      { name: "Design Patterns", icon: "DP", color: "orange", level: "Experience" },
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="skills-section relative px-6 py-28 sm:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            My Technical Expertise
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Skills & <span className="gradient-text">Technologies.</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-400 sm:text-lg">
            A versatile technology stack built through hands-on
            experience in native iOS and cross-platform mobile
            application development.
          </p>
        </div>

        {/* Technology Categories */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {skillCategories.map((category, index) => (
            <article
              key={category.id}
              className="skill-category-card group rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-7"
              style={{ animationDelay: `${index * 100}ms` }}
            >

              {/* Category Header */}
              <div className="mb-7 flex items-start justify-between">

                <div>
                  <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-cyan-400">
                    CATEGORY {category.number}
                  </p>

                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {category.description}
                  </p>
                </div>

                <span className="text-3xl font-bold text-white/[0.07]">
                  {category.number}
                </span>

              </div>

              {/* Technology Items */}
              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="skill-item flex min-w-0 flex-1 basis-[calc(50%-8px)] items-center gap-3 rounded-xl border border-white/[0.07] bg-[#111827]/80 p-3"
                  >

                    <div className={`skill-icon skill-${skill.color}`}>
                      {skill.icon}
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-gray-200">
                        {skill.name}
                      </p>

                      <p className="mt-1 text-[10px] text-gray-500">
                        {skill.level}
                      </p>
                    </div>

                  </div>
                ))}

              </div>

            </article>
          ))}

        </div>

        {/* Bottom Statement */}
        <div className="mt-12 rounded-3xl border border-cyan-400/10 bg-gradient-to-r from-cyan-400/[0.06] via-blue-500/[0.04] to-purple-500/[0.06] p-8 text-center sm:p-12">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            My Engineering Philosophy
          </p>

          <h3 className="mt-5 text-2xl font-bold leading-relaxed text-white sm:text-3xl">
            Clean Code. Scalable Architecture.
            <span className="gradient-text"> Exceptional Experiences.</span>
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400">
            I believe great software is not just about writing code.
            It is about creating reliable, maintainable and
            high-performing solutions that solve real problems.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Skills;
