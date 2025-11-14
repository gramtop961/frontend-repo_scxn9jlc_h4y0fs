import { useState } from 'react'
import Spline from '@splinetool/react-spline'
import { Github, Linkedin, Mail, ArrowRight, ExternalLink, Code2, Sparkles } from 'lucide-react'

function Nav() {
  const items = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ]
  const handleScroll = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur border-b border-white/20">
      <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 shadow" />
          <span className="font-semibold">My Portfolio</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {items.map((item) => (
            <button key={item.id} onClick={() => handleScroll(item.id)} className="text-sm text-slate-700 hover:text-slate-900 transition-colors">
              {item.label}
            </button>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-slate-100" aria-label="GitHub">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-slate-100" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:hello@example.com" className="p-2 rounded-md hover:bg-slate-100" aria-label="Email">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative h-[92vh] w-full" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-white/60 shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-xs font-medium text-slate-700">Tech • Interactive • Modern</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
            Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Your Name</span>
          </h1>
          <p className="mt-4 text-slate-700 text-lg leading-relaxed">
            Frontend developer crafting playful, performant experiences with React and a focus on delightful interactions.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition">
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-200 bg-white/80 hover:bg-white transition">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionTitle({ k, s, t }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-2 mb-6">
        <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-500 to-purple-600" />
        <span className="uppercase tracking-wider text-xs text-slate-500">{k}</span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">{s}</h2>
      {t && <p className="mt-3 text-slate-600 max-w-2xl">{t}</p>}
    </div>
  )
}

function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <SectionTitle k="About" s="A bit about me" t="I love building thoughtful interfaces with clean code and smooth motion." />
      <div className="max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
        <div className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm">
          <h3 className="font-semibold text-slate-900">Background</h3>
          <p className="mt-3 text-slate-600 leading-relaxed">
            I’m a React-focused developer with experience across design systems, dashboards, and interactive product sites. My work blends accessibility, performance, and a touch of play.
          </p>
        </div>
        <div className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm">
          <h3 className="font-semibold text-slate-900">What I’m exploring</h3>
          <p className="mt-3 text-slate-600 leading-relaxed">
            I’m currently exploring 3D on the web with Spline and Three.js, and motion-first UX with Framer Motion.
          </p>
        </div>
      </div>
    </section>
  )
}

const demoProjects = [
  {
    title: 'Interactive Dashboard',
    desc: 'A real-time analytics dashboard with custom charts and micro-interactions.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    link: '#',
  },
  {
    title: '3D Product Teaser',
    desc: 'A playful landing experience powered by Spline and smooth scroll scenes.',
    tags: ['Spline', 'Vite', 'Accessibility'],
    link: '#',
  },
  {
    title: 'Design System Kit',
    desc: 'Composable UI primitives and tokens built for speed and scale.',
    tags: ['Radix', 'CVA', 'TypeScript'],
    link: '#',
  },
]

function Projects() {
  return (
    <section id="projects" className="py-20">
      <SectionTitle k="Projects" s="Selected work" t="A few highlights that showcase my approach to building for the web." />
      <div className="max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {demoProjects.map((p, i) => (
          <div key={i} className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition pointer-events-none" />
            <div className="p-6 relative z-10">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t, idx) => (
                  <span key={idx} className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700">{t}</span>
                ))}
              </div>
              <a href={p.link} className="mt-4 inline-flex items-center gap-1 text-sm text-blue-700 hover:text-blue-900">
                View project <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const skills = [
  'React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Node', 'FastAPI', 'MongoDB', 'Radix UI', 'Accessibility', 'Animations'
]

function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <SectionTitle k="Skills" s="Tools I work with" t="A stack focused on performance, polish, and developer experience." />
      <div className="max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3">
          {skills.map((s) => (
            <span key={s} className="px-3 py-2 rounded-lg bg-white border border-slate-200 shadow-sm text-sm text-slate-800">{s}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [sent, setSent] = useState(false)
  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }
  return (
    <section id="contact" className="py-20">
      <SectionTitle k="Contact" s="Let’s build something" t="I’m available for freelance and full-time opportunities. Say hello!" />
      <div className="max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Name</label>
              <input required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input type="email" required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="jane@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Message</label>
              <textarea rows="4" required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell me about your project..." />
            </div>
            <button type="submit" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition">
              Send message <ArrowRight className="w-4 h-4" />
            </button>
            {sent && <p className="text-sm text-green-700">Thanks! I’ll get back to you soon.</p>}
          </form>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-slate-200 p-6">
          <h3 className="font-semibold text-slate-900">Connect</h3>
          <p className="mt-3 text-slate-600">Prefer socials? Reach me here:</p>
          <div className="mt-4 flex items-center gap-3">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-slate-200 shadow-sm">
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-slate-200 shadow-sm">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-slate-200 shadow-sm">
              <Mail className="w-4 h-4" /> Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex items-center gap-3 text-sm text-slate-600">
          <span>Built with React + Tailwind</span>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Nav />
      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
