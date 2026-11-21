
const experiences = [
  {
    id: 1,
    company: "Ecsion Research Labs Pvt. Ltd.",
    role: "Senior React Native Developer",
    period: "Jul 2021 – Jun 2025",
    location: "MIHAN, Nagpur, India",
    type: "Latest Experience",
    description:
      "Worked on cross-platform mobile applications for iOS and Android, contributing to application architecture, feature development, UI performance and delivery.",
    contributions: [
      "Developed and maintained React Native mobile applications.",
      "Worked on scalable and reusable UI components.",
      "Contributed to mobile application architecture and API integrations.",
      "Supported developer mentoring, code reviews and team coordination.",
      "Worked on end-to-end application development and releases.",
    ],
    projects: [
      "eCoachBasketball+",
      "PerfectlyWed",
      "Friendship Game",
    ],
    technologies: [
      "React Native",
      "JavaScript",
      "Redux",
      "REST APIs",
      "Firebase",
      "iOS",
      "Android",
    ],
  },
  {
    id: 2,
    company: "Plexasys Solutions",
    role: "iOS Application Developer",
    period: "Apr 2019 – Feb 2021",
    location: "India",
    type: "Previous Experience",
    description:
      "Contributed to native iOS application development, implementing application features and creating user-friendly mobile experiences.",
    contributions: [
      "Developed application screens using Swift.",
      "Implemented UI components and application functionality.",
      "Integrated REST APIs into iOS applications.",
      "Collaborated with team members during development and testing.",
    ],
    projects: [
      "YourFleek",
    ],
    technologies: [
      "Swift",
      "UIKit",
      "REST APIs",
      "Xcode",
      "iOS",
    ],
  },
  {
    id: 3,
    company: "Salasare Commerce Total Solutions",
    role: "iOS Application Developer",
    period: "Aug 2018 – Mar 2019",
    location: "India",
    type: "Career Beginning",
    description:
      "Started my professional mobile application development journey, working on native iOS application development.",
    contributions: [
      "Developed iOS application interfaces.",
      "Worked with Swift and UIKit.",
      "Implemented application features and UI functionality.",
      "Gained experience in collaborative software development.",
    ],
    technologies: [
      "Swift",
      "UIKit",
      "Xcode",
      "iOS",
    ],
  },
  {
    id: 4,
    company: "Phian Infotech Pvt. Ltd.",
    role: "iOS Application Developer",
    period: "Jan 2017 – Aug 2018",
    location: "IT Park, Nagpur, India",
    type: "Previous Experience",
    description:
      "Worked on native iOS application development, focusing on building user-facing features and implementing mobile application functionality.",
    contributions: [
      "Developed native iOS application features.",
      "Worked with Swift and UIKit.",
      "Integrated application functionality with backend services.",
      "Focused on maintainable code and application quality.",
    ],
    technologies: [
      "Swift",
      "UIKit",
      "REST APIs",
      "iOS",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="experience-section relative px-6 py-28 sm:py-36"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            My Career Journey
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Professional <span className="gradient-text">Experience.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400">
            My professional journey across mobile application
            development, from native iOS engineering to
            cross-platform development and team collaboration.
          </p>
        </div>

        {/* Timeline */}
        <div className="experience-timeline relative">

          {experiences.map((experience, index) => (
            <article
              key={experience.id}
              className="experience-item relative pb-14 last:pb-0"
              style={{ animationDelay: `${index * 150}ms` }}
            >

              {/* Timeline Node */}
              <div className="timeline-node">
                <span />
              </div>

              {/* Experience Card */}
              <div className="experience-card rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-9">

                {/* Header */}
                <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-start">

                  <div>
                    <div className="mb-4 flex flex-wrap items-center gap-3">

                      <span className="rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-300">
                        {experience.type}
                      </span>

                      <span className="text-xs text-gray-500">
                        {experience.location}
                      </span>

                    </div>

                    <h3 className="text-xl font-bold text-white sm:text-2xl">
                      {experience.company}
                    </h3>

                    <p className="mt-2 text-sm font-medium text-cyan-400 sm:text-base">
                      {experience.role}
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
                    <span className="text-lg">📅</span>
                    <span className="text-xs font-medium text-gray-300 sm:text-sm">
                      {experience.period}
                    </span>
                  </div>

                </div>

                {/* Description */}
                <p className="mt-7 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base">
                  {experience.description}
                </p>

                {/* Contributions */}
                <div className="mt-8">

                  <h4 className="mb-5 flex items-center gap-2 text-sm font-semibold text-white">
                    <span className="text-cyan-400">✦</span>
                    Key Responsibilities & Contributions
                  </h4>

                  <ul className="grid gap-4 sm:grid-cols-2">
                    {experience.contributions.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm leading-6 text-gray-400"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                        {item}
                      </li>
                    ))}
                  </ul>

                </div>

                {/* Projects */}
                {experience.projects && (
                  <div className="mt-8 border-t border-white/[0.07] pt-7">

                    <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">
                      Featured Projects
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {experience.projects.map((project) => (
                        <span
                          key={project}
                          className="rounded-lg border border-purple-400/20 bg-purple-400/[0.06] px-3 py-2 text-xs font-medium text-purple-300"
                        >
                          {project}
                        </span>
                      ))}
                    </div>

                  </div>
                )}

                {/* Technologies */}
                <div className="mt-8 border-t border-white/[0.07] pt-7">

                  <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">
                    Technologies Used
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="experience-tech"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

              </div>

            </article>
          ))}

        </div>

        {/* Career Summary */}
        <div className="mt-16 rounded-3xl border border-cyan-400/15 bg-gradient-to-r from-cyan-400/[0.07] via-blue-500/[0.04] to-purple-500/[0.07] p-8 text-center sm:p-12">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            The Journey Continues
          </p>

          <h3 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
            Growing Through Code.
            <span className="gradient-text"> Leading Through Experience.</span>
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400">
            Continuously learning, improving engineering practices
            and building mobile experiences that create real value.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Experience;
