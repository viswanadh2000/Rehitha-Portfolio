import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Skills from './components/Skills.jsx'
import Certifications from './components/Certifications.jsx'
import Badges from './components/Badges.jsx'
import Schedule from './components/Schedule.jsx'
import ChatAssistant from './components/ChatAssistant.jsx'
import DeveloperConsole from './components/DeveloperConsole.jsx'
// import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
  <section id="experience"><Experience /></section>
  <section id="education"><Education /></section>
        <section id="skills"><Skills /></section>
        <section id="certifications"><Certifications /></section>
        <section id="badges"><Badges /></section>
        <section id="schedule"><Schedule /></section>
  {/* Projects section removed per request */}
        <section id="contact"><Contact /></section>
      <ChatAssistant />
      <DeveloperConsole />
      </main>
      <Footer />
    </div>
  )
}
