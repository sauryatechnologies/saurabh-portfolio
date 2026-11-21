import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Expertise from "./sections/Expertise";
import Contact from "./sections/Contact";
import ScrollReveal from "./components/ScrollReveal";
import ActiveNavigation from "./components/ActiveNavigation";
import MobileNavigation from "./components/MobileNavigation";
import ProflePic from "./assets/Saurabh1Pic2026.jpeg";

function App() {
  const technologies = [
    { name: "React Native", icon: "⚛️", className: "tech-react" },
    { name: "Swift", icon: "🐦", className: "tech-swift" },
    { name: "iOS", icon: "", className: "tech-ios" },
    { name: "JavaScript", icon: "JS", className: "tech-js" },
    { name: "Redux", icon: "◈", className: "tech-redux" },
    { name: "TypeScript", icon: "TS", className: "tech-ts" },
  ];

  return (
    <main className="portfolio-bg min-h-screen overflow-hidden text-white">
      <ScrollReveal />
      <ActiveNavigation />

      {/* Background decoration */}
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />

      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/[0.07] bg-[#080b14]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#home" className="flex items-center">
            <img
              src={ProflePic}
              alt=""
              className="h-16 w-16 rounded-full border-2 border-cyan-400 object-cover transition-all duration-300 hover:scale-110"
            />
          </a>

          <div className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
            <a href="#home" className="nav-link">
              Home
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#skills" className="nav-link">
              Skills
            </a>
            <a href="#experience" className="nav-link">
              Experience
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a href="#expertise" className="nav-link">
              Expertise
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>

          {/* Mobile Navigation */}
          <MobileNavigation />

          <a
            href="#contact"
            className="hidden md:inline-flex rounded-full border border-cyan-400/40 px-5 py-2.5 text-sm font-medium text-cyan-300 transition-all duration-300 hover:bg-cyan-400 hover:text-black"
          >
            Let's Talk ↗
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex min-h-screen items-center px-6 pb-16 pt-32"
      >
        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT CONTENT */}
          <div className="hero-content">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>

              <span className="text-xs font-medium tracking-wide text-emerald-300 sm:text-sm">
                Available for New Opportunities
              </span>
            </div>

            <p className="mb-4 text-lg text-gray-400">Hello, I'm</p>

            <h1 className="text-5xl font-bold leading-[1.12] tracking-tight sm:text-7xl xl:text-[82px]">
              Saurabh
              <br />
              <span className="gradient-text">Chaudhari.</span>
            </h1>

            <div className="mt-8">
              <p className="text-lg font-semibold text-white sm:text-2xl">
                Senior Mobile Application Developer
              </p>

              <p className="mt-2 text-sm font-medium tracking-wide text-cyan-400 sm:text-base">
                React Native Developer | Native iOS Developer
              </p>
            </div>

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
              I build scalable, high-performance mobile applications with
              beautiful user experiences. Combining the power of React Native
              and native iOS development to transform ideas into impactful
              digital products.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#projects" className="primary-button">
                Explore My Work
                <span>↗</span>
              </a>

              <a href="#contact" className="secondary-button">
                Let's Connect
              </a>
            </div>

            {/* Stats */}
            <div className="mt-14 grid max-w-xl grid-cols-3 border-t border-white/10 pt-8">
              <div>
                <h3 className="text-3xl font-bold text-white sm:text-4xl">
                  8<span className="text-cyan-400">+</span>
                </h3>
                <p className="mt-2 text-xs text-gray-500 sm:text-sm">
                  Years Experience
                </p>
              </div>

              <div className="border-l border-white/10 pl-5 sm:pl-8">
                <h3 className="text-3xl font-bold text-white sm:text-4xl">
                  20<span className="text-cyan-400">+</span>
                </h3>
                <p className="mt-2 text-xs text-gray-500 sm:text-sm">
                  Apps Delivered
                </p>
              </div>

              <div className="border-l border-white/10 pl-5 sm:pl-8">
                <h3 className="text-3xl font-bold text-white sm:text-4xl">2</h3>
                <p className="mt-2 text-xs text-gray-500 sm:text-sm">
                  Mobile Platforms
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="hero-visual relative mx-auto flex w-full max-w-[540px] items-center justify-center">
            {/* Decorative rings */}
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />

            {/* Main glow */}
            <div className="profile-glow" />

            {/* Main profile card */}
            <div className="profile-card relative z-10 w-[85%] max-w-[390px] rounded-3xl border border-white/10 bg-[#111827]/80 p-6 shadow-2xl backdrop-blur-2xl sm:p-8">
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>

                <span className="text-xs tracking-widest text-gray-500">
                  DEVELOPER PROFILE
                </span>
              </div>

              {/* Avatar */}
              <div className="mx-auto mt-10 flex h-36 w-36 items-center justify-center rounded-full border border-cyan-400/40 bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-purple-500/30 shadow-[0_0_60px_rgba(34,211,238,0.18)]">
                <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-[#0b1220]">
                  <span className="gradient-text text-5xl font-bold">SC</span>
                </div>
              </div>

              <div className="mt-7 text-center">
                <h2 className="text-2xl font-bold">Mobile Engineer</h2>

                <p className="mt-2 text-sm text-gray-400">
                  Building experiences beyond screens.
                </p>
              </div>

              {/* Tech stack */}
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="mb-4 text-center text-xs font-semibold tracking-[0.2em] text-gray-500">
                  TECHNOLOGY STACK
                </p>

                <div className="flex flex-wrap justify-center gap-2">
                  {technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-gray-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10"
                    >
                      <span className="mr-1.5 text-cyan-300">{tech.icon}</span>
                      {tech.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="text-xs text-gray-500">Based in India</span>

                <span className="text-xs font-medium text-cyan-400">
                  ● Open to Work
                </span>
              </div>
            </div>

            {/* Floating technology cards */}
            <div className="floating-card floating-one">
              <span className="text-2xl">⚛️</span>
              <div>
                <p className="text-xs font-semibold text-white">React Native</p>
                <p className="text-[10px] text-gray-400">Cross Platform</p>
              </div>
            </div>

            <div className="floating-card floating-two">
              <span className="text-2xl">🐦</span>
              <div>
                <p className="text-xs font-semibold text-white">Swift</p>
                <p className="text-[10px] text-gray-400">Native iOS</p>
              </div>
            </div>

            <div className="floating-card floating-three">
              <span className="text-2xl">⚡</span>
              <div>
                <p className="text-xs font-semibold text-white">Performance</p>
                <p className="text-[10px] text-gray-400">Optimization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="relative px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-7xl">
          {/* Section Heading */}
          <div className="mb-16">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Get to know me
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
              About <span className="gradient-text">Me.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-gray-400">
              A passionate mobile developer focused on building meaningful
              digital experiences through technology, innovation and clean
              engineering.
            </p>
          </div>

          {/* Main About Layout */}
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            {/* Left: Introduction */}
            <div className="about-panel rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-10">
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-2xl">
                  👨‍💻
                </div>

                <div>
                  <h3 className="font-semibold text-white">Who I Am</h3>
                  <p className="text-xs text-gray-500">
                    Engineer. Problem Solver. Team Player.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold leading-snug sm:text-3xl">
                Turning ideas into
                <span className="gradient-text">
                  {" "}
                  powerful mobile experiences.
                </span>
              </h3>

              <p className="mt-7 leading-8 text-gray-400">
                I'm a Senior Mobile Application Developer with 8+ years of
                experience in software development, specializing in Native iOS
                and React Native.
              </p>

              <p className="mt-5 leading-8 text-gray-400">
                My journey started with native iOS development using Swift and
                UIKit. Over time, I expanded my expertise into React Native,
                building cross-platform applications for both iOS and Android.
              </p>

              <p className="mt-5 leading-8 text-gray-400">
                I enjoy working on challenging engineering problems, designing
                scalable application architectures, improving performance and
                creating reusable components that make applications easier to
                maintain.
              </p>

              <p className="mt-5 leading-8 text-gray-400">
                Beyond coding, I have experience guiding developers, reviewing
                code, collaborating with teams and helping deliver quality
                applications from development to release.
              </p>

              {/* Expertise tags */}
              <div className="mt-9 flex flex-wrap gap-3">
                {[
                  "Mobile Architecture",
                  "Performance Optimization",
                  "Clean Code",
                  "Team Leadership",
                  "CI/CD Automation",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/[0.05] px-4 py-2 text-xs font-medium text-cyan-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Professional Highlights */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {/* Experience Card */}
              <div className="highlight-card rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/[0.10] to-blue-500/[0.03] p-7">
                <p className="text-sm text-gray-400">Professional Experience</p>

                <div className="mt-4 flex items-end gap-3">
                  <h3 className="text-6xl font-bold text-white">
                    8<span className="gradient-text">+</span>
                  </h3>
                  <p className="pb-2 text-sm text-gray-400">
                    Years in
                    <br />
                    Software Development
                  </p>
                </div>

                <div className="mt-7 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                </div>

                <p className="mt-4 text-xs text-gray-500">
                  Native iOS + Cross-platform Mobile Development
                </p>
              </div>

              {/* Platform Expertise */}
              <div className="highlight-card rounded-3xl border border-white/10 bg-white/[0.025] p-7">
                <p className="text-sm text-gray-400">Development Expertise</p>

                <div className="mt-6 space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-lg">
                        ⚛
                      </span>
                      <div>
                        <p className="font-semibold text-white">React Native</p>
                        <p className="text-xs text-gray-500">iOS & Android</p>
                      </div>
                    </div>
                    <span className="text-xs text-cyan-400">4+ Years</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-400/10 text-lg">
                        🐦
                      </span>
                      <div>
                        <p className="font-semibold text-white">Native iOS</p>
                        <p className="text-xs text-gray-500">Swift & UIKit</p>
                      </div>
                    </div>
                    <span className="text-xs text-orange-400">4 Years</span>
                  </div>
                </div>
              </div>

              {/* Leadership */}
              <div className="highlight-card rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:col-span-2 lg:col-span-1">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-400/10 text-xl">
                    🚀
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">
                      Engineering & Team Leadership
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-400">
                      Experience in mentoring developers, coordinating
                      development activities, conducting code reviews and
                      promoting maintainable coding practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Career Highlights */}
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            <div className="about-stat">
              <h3>
                20<span>+</span>
              </h3>
              <p>Applications Delivered</p>
            </div>

            <div className="about-stat">
              <h3>
                iOS <span>&</span> Android
              </h3>
              <p>Mobile Platform Experience</p>
            </div>

            <div className="about-stat">
              <h3>End-to-End</h3>
              <p>Development to Deployment</p>
            </div>
          </div>
        </div>
      </section>
      <Skills />
      <Experience />
      <Projects />
      <Expertise />
      <Contact />
    </main>
  );
}

export default App;
