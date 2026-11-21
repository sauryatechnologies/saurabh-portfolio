
import { motion } from 'motion/react'
import {
  Code2,
  Smartphone,
  Users,
  Layers,
} from 'lucide-react'

const strengths = [
  {
    icon: Smartphone,
    title: 'Cross-platform Development',
    description:
      'Developing scalable iOS and Android applications using React Native with native platform integration.',
  },
  {
    icon: Code2,
    title: 'Native iOS Engineering',
    description:
      'Strong foundation in Swift, SwiftUI, UIKit, Objective-C and Apple development technologies.',
  },
  {
    icon: Layers,
    title: 'Application Architecture',
    description:
      'Designing maintainable applications using MVVM, Clean Architecture, reusable components and SOLID principles.',
  },
  {
    icon: Users,
    title: 'Technical Leadership',
    description:
      'Supporting developers through code reviews, technical guidance, collaboration and knowledge sharing.',
  },
]

function About() {
  return (
    <section id="about" className="section-padding">
      <div className="section-container">

        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
            Get to know me
          </p>

          <h2 className="font-display text-3xl font-bold sm:text-5xl">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-base leading-8 text-slate-400"
          >
            <p>
              I'm a Senior Mobile Application Developer with
              8+ years of experience building mobile applications
              across multiple business domains.
            </p>

            <p>
              My journey started with native iOS development,
              where I worked with Swift, UIKit and Objective-C.
              Later, I expanded my expertise into React Native,
              enabling me to build cross-platform applications
              for both iOS and Android.
            </p>

            <p>
              I enjoy working across the complete application
              lifecycle, including requirement analysis,
              architecture design, development, API integration,
              debugging, testing, optimization and deployment.
            </p>

            <p>
              Beyond development, I enjoy mentoring developers,
              reviewing code, improving engineering practices
              and collaborating with teams to deliver reliable
              products.
            </p>

            <div className="flex flex-wrap gap-3 pt-3">
              {['Problem Solving', 'Clean Code', 'Team Collaboration', 'Continuous Learning'].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-purple-400/20 bg-purple-500/5 px-4 py-2 text-sm text-purple-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {strengths.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-[#101727] p-6 transition hover:-translate-y-1 hover:border-purple-400/40"
                >
                  <div className="mb-5 inline-flex rounded-xl bg-purple-500/10 p-3 text-purple-400">
                    <Icon size={24} />
                  </div>

                  <h3 className="mb-3 font-display text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
