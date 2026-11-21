
// import { motion } from 'motion/react'

// import {
//   ArrowDown,
//   ArrowUpRight,
//   Download,
//   Github,
//   Linkedin,
//   Code2,
//   Smartphone,
//   Layers3,
//   Rocket,
// } from 'lucide-react'

// const highlights = [
//   {
//     icon: Code2,
//     title: '8+ Years',
//     subtitle: 'Development Experience',
//   },
//   {
//     icon: Smartphone,
//     title: 'iOS + Android',
//     subtitle: 'Mobile Development',
//   },
//   {
//     icon: Layers3,
//     title: '20+ Apps',
//     subtitle: 'Project Experience',
//   },
//   {
//     icon: Rocket,
//     title: 'End-to-End',
//     subtitle: 'Product Development',
//   },
// ]

// function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative flex min-h-screen items-center overflow-hidden pt-28"
//     >
//       {/* Background effects */}
//       <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-600/20 blur-[130px]" />

//       <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-blue-500/20 blur-[130px]" />

//       <div className="section-container relative z-10 grid items-center gap-16 py-16 lg:grid-cols-[1.2fr_0.8fr]">

//         {/* Introduction */}
//         <motion.div
//           initial={{ opacity: 0, y: 35 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//         >
//           <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-green-400/20 bg-green-400/5 px-4 py-2">
//             <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

//             <span className="text-xs font-medium tracking-wide text-green-400">
//               OPEN TO SENIOR MOBILE OPPORTUNITIES
//             </span>
//           </div>

//           <p className="mb-4 font-medium text-slate-400">
//             Hello, I'm
//           </p>

//           <h1 className="font-display text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
//             Saurabh M.
//             <span className="gradient-text block">
//               Chaudhari
//             </span>
//           </h1>

//           <h2 className="mt-7 text-xl font-semibold text-white sm:text-2xl">
//             Senior Mobile Application Developer
//           </h2>

//           <p className="mt-3 text-lg font-medium text-purple-400">
//             React Native <span className="text-slate-500">|</span> Native iOS
//           </p>

//           <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400">
//             I build scalable, high-performance mobile applications
//             for iOS and Android. With 8+ years of experience in
//             mobile development, I specialize in React Native,
//             Swift, SwiftUI, mobile architecture, performance
//             optimization and engineering best practices.
//           </p>

//           {/* CTA buttons */}
//           <div className="mt-9 flex flex-wrap gap-4">

//             <a
//               href="#projects"
//               className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-purple-900/30 transition hover:-translate-y-1 hover:shadow-purple-700/30"
//             >
//               Explore My Work
//               <ArrowUpRight
//                 size={18}
//                 className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
//               />
//             </a>

//             <a
//               href={`${import.meta.env.BASE_URL}resume.pdf`}
//               download
//               className="flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 font-semibold text-white transition hover:border-purple-400 hover:bg-white/5"
//             >
//               Download Resume
//               <Download size={18} />
//             </a>

//           </div>

//           {/* Social links */}
//           <div className="mt-9 flex items-center gap-5">
//             <span className="text-sm text-slate-500">
//               Connect with me
//             </span>

//             <a
//               href="https://github.com/sauryatechnologies"
//               target="_blank"
//               rel="noreferrer"
//               aria-label="GitHub"
//               className="text-slate-400 transition hover:text-white"
//             >
//               <Github size={21} />
//             </a>

//             <a
//               href="https://www.linkedin.com/in/saurabh-chaudhari-56843b1a2"
//               target="_blank"
//               rel="noreferrer"
//               aria-label="LinkedIn"
//               className="text-slate-400 transition hover:text-white"
//             >
//               <Linkedin size={21} />
//             </a>
//           </div>
//         </motion.div>

//         {/* Developer profile card */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           className="relative mx-auto w-full max-w-md"
//         >
//           <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600/30 to-blue-500/20 blur-2xl" />

//           <div className="relative rounded-3xl border border-white/10 bg-[#111827]/90 p-7 shadow-2xl backdrop-blur-xl sm:p-9">

//             <div className="flex items-center justify-between border-b border-white/10 pb-6">
//               <div>
//                 <p className="text-xs tracking-[0.2em] text-slate-500">
//                   DEVELOPER PROFILE
//                 </p>
//                 <h3 className="mt-2 font-display text-xl font-bold">
//                   Mobile Engineer
//                 </h3>
//               </div>

//               <div className="rounded-xl bg-purple-500/10 p-3 text-purple-400">
//                 <Code2 size={25} />
//               </div>
//             </div>

//             <div className="mt-7 space-y-6">
//               {[
//                 {
//                   title: 'React Native',
//                   subtitle: 'Cross-platform iOS & Android',
//                   percent: '95%',
//                   width: '95%',
//                 },
//                 {
//                   title: 'Native iOS',
//                   subtitle: 'Swift, SwiftUI & UIKit',
//                   percent: '90%',
//                   width: '90%',
//                 },
//                 {
//                   title: 'Architecture',
//                   subtitle: 'MVVM & Clean Architecture',
//                   percent: '88%',
//                   width: '88%',
//                 },
//                 {
//                   title: 'Engineering',
//                   subtitle: 'Testing, CI/CD & Performance',
//                   percent: '85%',
//                   width: '85%',
//                 },
//               ].map((skill) => (
//                 <div key={skill.title}>
//                   <div className="mb-2 flex items-center justify-between">
//                     <span className="font-semibold text-white">
//                       {skill.title}
//                     </span>

//                     <span className="text-xs text-purple-400">
//                       {skill.percent}
//                     </span>
//                   </div>

//                   <p className="mb-3 text-xs text-slate-500">
//                     {skill.subtitle}
//                   </p>

//                   <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
//                     <div
//                       className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-400"
//                       style={{ width: skill.width }}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-8 rounded-2xl border border-purple-400/20 bg-purple-500/5 p-5">
//               <p className="text-xs tracking-widest text-purple-400">
//                 ENGINEERING PHILOSOPHY
//               </p>

//               <p className="mt-2 font-display text-xl font-bold">
//                 Build. Optimize. Scale.
//               </p>

//               <p className="mt-2 text-sm leading-6 text-slate-400">
//                 Creating reliable mobile experiences through
//                 clean code and thoughtful architecture.
//               </p>
//             </div>

//           </div>
//         </motion.div>
//       </div>

//       {/* Bottom indicator */}
//       <a
//         href="#about"
//         className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce text-slate-500 md:block"
//         aria-label="Scroll to about section"
//       >
//         <ArrowDown size={22} />
//       </a>
//     </section>
//   )
// }

// export default Hero


import { Github } from 'lucide-react'

function Hero() {
  return (
    <div className="min-h-screen bg-slate-950 p-10 text-white">
      <h1 className="text-4xl font-bold">
        Saurabh M. Chaudhari
      </h1>

      <div className="mt-8 flex items-center gap-4">
        <Github size={40} />
        <span>GitHub Profile</span>
      </div>
    </div>
  )
}

export default Hero


