import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, MapPin, ArrowRight, Code2, Layers, Database, GitBranch, Award, Briefcase, GraduationCap, Download, Terminal, Server } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'certifications', 'contact'];
      const current = sections.find(s => {
        const el = document.getElementById(s);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouse = (e) => setMousePos({ x: e.clientX, y: e.clientY });

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouse);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      {/* Cursor */}
      <div className="hidden lg:block fixed w-6 h-6 border-2 border-blue-500/50 rounded-full pointer-events-none z-50 transition-transform duration-200"
        style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px`, transform: 'translate(-50%, -50%)' }} />

      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, rgba(59,130,246,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(59,130,246,0.05) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          transform: `translateY(${scrollY * 0.3}px)`
        }} />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" style={{ transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.15}px)` }} />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" style={{ transform: `translate(${-scrollY * 0.12}px, ${scrollY * 0.1}px)` }} />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl" style={{ transform: `translate(${scrollY * 0.08}px, ${-scrollY * 0.1}px)` }} />
      </div>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
        style={{
          background: scrollY > 50 ? 'rgba(0,0,0,0.8)' : 'transparent',
          backdropFilter: scrollY > 50 ? 'blur(20px)' : 'none',
          borderBottom: scrollY > 50 ? '1px solid rgba(255,255,255,0.1)' : 'none'
        }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">SRIDHAR.DEV</div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map(item => (
              <button key={item} onClick={() => scrollTo(item.toLowerCase())}
                className={`transition-all duration-300 hover:text-blue-400 relative group ${activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-400'}`}>
                {item}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-violet-400 transition-all duration-300 ${activeSection === item.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-violet-600/20 rounded-3xl blur-2xl" />
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 md:p-16">
              <div className="mb-6 inline-block">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-violet-600/20 border border-blue-500/30 text-blue-300 text-sm font-medium">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>Available for opportunities</span>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-none">
                <span className="block text-gray-400 text-2xl md:text-3xl font-normal mb-4">Backend Engineer</span>
                <span className="bg-gradient-to-r from-white via-blue-100 to-violet-100 bg-clip-text text-transparent">Sridhar S</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl leading-relaxed">
                Building scalable backend systems with <span className="text-blue-400 font-semibold">Java</span>, <span className="text-violet-400 font-semibold">Spring Boot</span>, and <span className="text-cyan-400 font-semibold">REST APIs</span>.<br />
                Crafting enterprise solutions at Tata Consultancy Services.
              </p>

              <div className="flex flex-wrap gap-4">
                <button onClick={() => scrollTo('projects')}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                  View Projects
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
                  <Download size={18} />Resume
                </button>
              </div>
            </div>
          </div>

          <div className="absolute top-20 right-10 animate-float">
            <div className="p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
              <Code2 className="text-blue-400" size={24} />
            </div>
          </div>
          <div className="absolute bottom-20 left-10 animate-float" style={{ animationDelay: '1s' }}>
            <div className="p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
              <Server className="text-violet-400" size={24} />
            </div>
          </div>
          <div className="absolute top-1/2 right-20 animate-float" style={{ animationDelay: '2s' }}>
            <div className="p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
              <Database className="text-cyan-400" size={24} />
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-sm uppercase tracking-widest text-blue-400 mb-4 font-semibold">Background</h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-6">
              Driven by <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Impact</span>
            </h3>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-violet-400 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                With professional experience in backend development at TCS, I seek to contribute to impactful software solutions using Java, Spring Boot, and MySQL.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I aim to take on greater responsibilities in software architecture, API design, and cloud native development while continuously enhancing my technical and problem-solving skills.
              </p>

              <div className="pt-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center">
                    <Terminal size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Backend Specialist</div>
                    <div className="text-sm text-gray-400">Java, Spring Boot, REST APIs</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group">
                <GraduationCap className="text-blue-400 mb-3 group-hover:scale-110 transition-transform" size={32} />
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-1">9.05</div>
                <div className="text-sm text-gray-400">CGPA</div>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-violet-500/50 transition-all duration-300 hover:scale-105 group">
                <Briefcase className="text-violet-400 mb-3 group-hover:scale-110 transition-transform" size={32} />
                <div className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-1">TCS</div>
                <div className="text-sm text-gray-400">Current</div>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 group">
                <Code2 className="text-cyan-400 mb-3 group-hover:scale-110 transition-transform" size={32} />
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">5+</div>
                <div className="text-sm text-gray-400">Certs</div>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group">
                <Server className="text-blue-400 mb-3 group-hover:scale-110 transition-transform" size={32} />
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-1">API</div>
                <div className="text-sm text-gray-400">Expert</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-sm uppercase tracking-widest text-blue-400 mb-4 font-semibold">Expertise</h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-6">
              Technical <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Arsenal</span>
            </h3>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-violet-400 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Server, color: 'blue', title: 'Backend', skills: ['Java', 'Spring Boot', 'REST APIs'] },
              { icon: Layers, color: 'violet', title: 'Frontend', skills: ['React Js', 'HTML', 'CSS'] },
              { icon: Database, color: 'cyan', title: 'Database', skills: ['MySQL'] },
              { icon: GitBranch, color: 'blue', title: 'Tools', skills: ['Git', 'Maven', 'IntelliJ'] }
            ].map((cat, i) => (
              <div key={i} className={`group p-8 rounded-3xl bg-gradient-to-br from-${cat.color}-600/10 to-transparent border border-${cat.color}-500/20 hover:border-${cat.color}-500/50 transition-all duration-500 hover:scale-105 relative overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br from-${cat.color}-600/0 to-${cat.color}-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-${cat.color}-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <cat.icon className={`text-${cat.color}-400`} size={28} />
                  </div>
                  <h4 className="text-xl font-bold mb-4">{cat.title}</h4>
                  <div className="space-y-2">
                    {cat.skills.map((skill, j) => (
                      <div key={j} className="px-3 py-1.5 rounded-lg bg-white/5 text-sm text-gray-300 inline-block mr-2 mb-2">{skill}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-sm uppercase tracking-widest text-blue-400 mb-4 font-semibold">Career</h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-6">
              Professional <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Journey</span>
            </h3>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-violet-400 rounded-full" />
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-violet-600 to-cyan-600" />
            
            <div className="space-y-12">
              <div className="relative pl-20 group">
                <div className="absolute left-5 top-8 w-7 h-7 rounded-full bg-blue-600 border-4 border-black group-hover:scale-125 transition-transform" />
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                    <div>
                      <div className="text-sm text-blue-400 font-semibold mb-2">Jan 2025 - Present</div>
                      <h4 className="text-2xl font-bold mb-1">Web Application Developer</h4>
                      <div className="text-lg text-gray-300 font-medium">Tata Consultancy Services (TCS)</div>
                    </div>
                    <div className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-semibold">Current</div>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Working at Tata Consultancy Services TCS as a Web Application Developer with a focus on Java, Spring Boot, and REST API development. Gaining hands-on experience in building backend services and learning real-time application development using Git, Maven, and MySQL.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Java', 'Spring Boot', 'REST APIs', 'MySQL'].map((t, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-blue-600/20 text-blue-300 text-sm">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative pl-20 group">
                <div className="absolute left-5 top-8 w-7 h-7 rounded-full bg-violet-600 border-4 border-black group-hover:scale-125 transition-transform" />
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-violet-500/50 transition-all duration-300">
                  <div className="text-sm text-violet-400 font-semibold mb-2">2022 - 2024</div>
                  <h4 className="text-2xl font-bold mb-1">Tutor</h4>
                  <div className="text-lg text-gray-300 font-medium mb-4">Vidiyal Tution Centre</div>
                  <p className="text-gray-400 leading-relaxed">
                    I began my tutoring in 2022 while in college and continued part-time until June 2024. I specialized in helping students achieve their academic goals and provided guidance for their future studies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-sm uppercase tracking-widest text-blue-400 mb-4 font-semibold">Portfolio</h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-6">
              Featured <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Work</span>
            </h3>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-violet-400 rounded-full" />
          </div>

          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-blue-500/50 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-violet-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 p-8 md:p-12">
              <div className="flex flex-wrap gap-2 mb-6">
                {['HTML', 'CSS', 'Javascript', 'Springboot'].map((t, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 text-sm font-medium">{t}</span>
                ))}
              </div>
              
              <h4 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Online Grocery Store
              </h4>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Developed a web-based application for an online grocery store that allows users to browse products, add items to a shopping cart, and place home delivery orders. The system supports both walk-in and online customers, enabling a smooth shopping experience. It simplifies grocery shopping by reducing the need to visit crowded markets, offering convenience through doorstep delivery and secure online transactions.
              </p>

              <button className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2">
                View Project <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-sm uppercase tracking-widest text-blue-400 mb-4 font-semibold">Achievements</h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Certifications</span>
            </h3>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-violet-400 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Java 8+ Essential Training: Syntax and Structure', platform: 'LinkedIn' },
              { title: 'Learn Git by Doing: A step-by step guide to version control', platform: 'Udemy' },
              { title: 'Programming in Java', platform: 'NPTEL' },
              { title: 'Problem Solving Basics Certification', platform: 'HackerRank' },
              { title: 'My SQL Basics', platform: 'Great Learning' }
            ].map((cert, i) => (
              <div key={i} className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-600/10 group-hover:bg-blue-600/20 transition-colors duration-300">
                    <Award className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 group-hover:text-blue-400 transition-colors">{cert.title}</h4>
                    <p className="text-sm text-gray-400">{cert.platform}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm uppercase tracking-widest text-blue-400 mb-4 font-semibold">Get in Touch</h2>
          <h3 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Build Something <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Scalable</span>
          </h3>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Open to backend development opportunities, API architecture roles, and full-stack positions. Let's discuss how I can contribute to your team.
          </p>

          <div className="flex flex-wrap gap-6 justify-center mb-12">
            <a href="mailto:sridharsri7537@gmail.com" 
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2">
              <Mail size={20} />
              Email Me
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="tel:+918838083207"
              className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
              <Phone size={20} />Call
            </a>
          </div>

          <div className="flex flex-wrap gap-8 justify-center text-gray-400">
            <div className="flex items-center gap-2"><MapPin size={18} /><span>Madhurai, Tamil Nadu, India</span></div>
            <div className="flex items-center gap-2"><Linkedin size={18} /><span>LinkedIn Profile</span></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>© 2026 Sridhar S. Engineered with precision.</p>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
