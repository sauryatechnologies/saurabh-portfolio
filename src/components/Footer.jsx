
import { Github, Linkedin, ArrowUp } from 'lucide-react'

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080B14]">
      <div className="section-container flex flex-col items-center justify-between gap-5 py-8 sm:flex-row">

        <div>
          <p className="font-display font-bold">
            SAURABH<span className="gradient-text">.</span>
          </p>

          <p className="mt-2 text-xs text-slate-500">
            React Native & Native iOS Developer
          </p>
        </div>

        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Saurabh M. Chaudhari. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/sauryatechnologies"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-slate-400 hover:text-white"
          >
            <Github size={19} />
          </a>

          <a
            href="https://www.linkedin.com/in/saurabh-chaudhari-56843b1a2"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-slate-400 hover:text-white"
          >
            <Linkedin size={19} />
          </a>

          <a
            href="#home"
            aria-label="Back to top"
            className="rounded-lg border border-white/10 p-2 text-slate-400 hover:text-white"
          >
            <ArrowUp size={17} />
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer
