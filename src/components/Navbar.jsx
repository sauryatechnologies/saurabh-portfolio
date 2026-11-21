
// import { useState } from 'react'
// import {
//   Github,
//   Linkedin,
//   Menu,
//   X,
//   ArrowUpRight,
// } from 'lucide-react'

// const navItems = [
//   { label: 'Home', href: '#home' },
//   { label: 'About', href: '#about' },
//   { label: 'Skills', href: '#skills' },
//   { label: 'Experience', href: '#experience' },
//   { label: 'Projects', href: '#projects' },
//   { label: 'Contact', href: '#contact' },
//   { label: 'Architecture', href: '#architecture' },
// ]

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false)

//   const closeMenu = () => setMenuOpen(false)

//   return (
//     <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#080B14]/90 backdrop-blur-xl">
//       <nav className="section-container flex h-20 items-center justify-between">

//         {/* Logo */}
//         <a
//           href="#home"
//           onClick={closeMenu}
//           className="font-display text-xl font-bold tracking-tight"
//         >
//           SAURABH<span className="gradient-text">.</span>
//         </a>

//         {/* Desktop navigation */}
//         <div className="hidden items-center gap-7 lg:flex">
//           {navItems.map((item) => (
//             <a
//               key={item.label}
//               href={item.href}
//               className="text-sm font-medium text-slate-400 transition hover:text-white"
//             >
//               {item.label}
//             </a>
//           ))}
//         </div>

//         {/* Social links */}
//         <div className="hidden items-center gap-4 md:flex">
//           <a
//             href="https://github.com/sauryatechnologies"
//             target="_blank"
//             rel="noreferrer"
//             aria-label="GitHub profile"
//             className="text-slate-400 transition hover:text-white"
//           >
//             <Github size={19} />
//           </a>

//           <a
//             href="https://www.linkedin.com/in/saurabh-chaudhari-56843b1a2"
//             target="_blank"
//             rel="noreferrer"
//             aria-label="LinkedIn profile"
//             className="text-slate-400 transition hover:text-white"
//           >
//             <Linkedin size={19} />
//           </a>

//           <a
//             href="#contact"
//             className="flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-purple-200"
//           >
//             Let's Talk
//             <ArrowUpRight size={16} />
//           </a>
//         </div>

//         {/* Mobile menu button */}
//         <button
//           type="button"
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="rounded-lg border border-white/10 p-2 text-white lg:hidden"
//           aria-label={menuOpen ? 'Close menu' : 'Open menu'}
//           aria-expanded={menuOpen}
//         >
//           {menuOpen ? <X size={22} /> : <Menu size={22} />}
//         </button>

//       </nav>

//       {/* Mobile navigation */}
//       {menuOpen && (
//         <div className="border-t border-white/10 bg-[#0B1020] px-6 py-5 lg:hidden">
//           <div className="flex flex-col gap-5">
//             {navItems.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 onClick={closeMenu}
//                 className="text-sm font-medium text-slate-300 transition hover:text-purple-400"
//               >
//                 {item.label}
//               </a>
//             ))}

//             <div className="flex gap-5 border-t border-white/10 pt-5">
//               <a
//                 href="https://github.com/sauryatechnologies"
//                 target="_blank"
//                 rel="noreferrer"
//                 aria-label="GitHub"
//               >
//                 <Github size={20} />
//               </a>

//               <a
//                 href="https://www.linkedin.com/in/saurabh-chaudhari-56843b1a2"
//                 target="_blank"
//                 rel="noreferrer"
//                 aria-label="LinkedIn"
//               >
//                 <Linkedin size={20} />
//               </a>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   )
// }

// export default Navbar



function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-white/10 px-8 py-5">
      <h2 className="text-xl font-bold text-purple-400">
        SAURABH.
      </h2>

      <div className="flex gap-6 text-sm">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
      </div>
    </nav>
  )
}

export default Navbar
