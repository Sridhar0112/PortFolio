import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  ArrowRight,
  Code2,
  Layers,
  Database,
  GitBranch,
  Award,
  Briefcase,
  GraduationCap,
  Sparkles,
} from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = [
        "hero",
        "about",
        "experience",
        "skills",
        "projects",
        "certifications",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 min-h-screen relative overflow-hidden">
      {/* Subtle grain texture overlay */}
      <div
        className="fixed inset-0 opacity-[0.015] pointer-events-none z-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E\")",
        }}
      />

      {/* Floating gradient orbs */}
      <div
        className="fixed top-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"
        style={{
          transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`,
        }}
      />
      <div
        className="fixed bottom-20 right-10 w-96 h-96 bg-violet-400/10 rounded-full blur-3xl pointer-events-none"
        style={{
          transform: `translate(${-scrollY * 0.08}px, ${-scrollY * 0.06}px)`,
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-gray-900 tracking-tight">
              SRIDHAR S
            </div>
            <div className="hidden md:flex gap-8 text-sm font-medium">
              {["About", "Experience", "Skills", "Projects", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`transition-all duration-300 hover:text-blue-600 ${
                      activeSection === item.toLowerCase()
                        ? "text-blue-600 font-semibold"
                        : "text-gray-600"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center px-6 pt-20 relative"
      >
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 animate-fade-in">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 text-blue-600 text-sm font-medium backdrop-blur-sm">
              <Sparkles size={16} />
              <span>Web Application Developer at TCS</span>
            </div>
          </div>

          <h1
            className="text-7xl md:text-8xl font-bold text-gray-900 mb-6 tracking-tight leading-none animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            Building Digital
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Experiences
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Backend developer specializing in Java, Spring Boot, and scalable
            API architecture. Passionate about crafting elegant solutions to
            complex problems.
          </p>

          <div
            className="flex flex-wrap gap-4 justify-center items-center animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <button
              onClick={() => scrollToSection("contact")}
              className="group px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-2"
            >
              Let's Connect
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full font-medium hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              View Work
            </button>
          </div>

          <div className="mt-20 flex flex-wrap gap-6 justify-center text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Madhurai, Tamil Nadu</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>sridharsri7537@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+91 8838083207</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-gray-900 tracking-tight">
                Driven by Impact
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full" />
              <p className="text-lg text-gray-700 leading-relaxed">
                With professional experience in backend development at TCS, I
                seek to contribute to impactful software solutions using Java,
                Spring Boot, and MySQL. I aim to take on greater
                responsibilities in software architecture, API design, and cloud
                native development while continuously enhancing my technical and
                problem-solving skills.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <GraduationCap className="text-blue-600 mb-3" size={32} />
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  9.05
                </div>
                <div className="text-sm text-gray-600">CGPA</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <Briefcase className="text-blue-600 mb-3" size={32} />
                <div className="text-3xl font-bold text-gray-900 mb-1">TCS</div>
                <div className="text-sm text-gray-600">Current Role</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <Code2 className="text-blue-600 mb-3" size={32} />
                <div className="text-3xl font-bold text-gray-900 mb-1">5+</div>
                <div className="text-sm text-gray-600">Certifications</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <Layers className="text-blue-600 mb-3" size={32} />
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  Full
                </div>
                <div className="text-sm text-gray-600">Stack Ready</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section
        id="experience"
        className="py-32 px-6 bg-white/40 backdrop-blur-sm relative"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Experience Journey
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full mx-auto" />
          </div>

          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-violet-600" />

            <div className="space-y-16">
              <div className="relative md:grid md:grid-cols-2 md:gap-12">
                <div className="md:text-right md:pr-12">
                  <div className="inline-block p-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div className="flex md:flex-row-reverse items-start gap-4">
                      <div className="p-3 rounded-xl bg-blue-600/10">
                        <Briefcase className="text-blue-600" size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-blue-600 mb-1">
                          Jan 2025 - Present
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          Web Application Developer
                        </h3>
                        <div className="text-gray-600 font-medium mb-3">
                          Tata Consultancy Services (TCS)
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          Working at Tata Consultancy Services TCS as a Web
                          Application Developer with a focus on Java, Spring
                          Boot, and REST API development. Gaining hands-on
                          experience in building backend services and learning
                          real-time application development using Git, Maven,
                          and MySQL.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block" />
              </div>

              <div className="relative md:grid md:grid-cols-2 md:gap-12">
                <div className="hidden md:block" />
                <div className="md:pl-12">
                  <div className="inline-block p-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-violet-600/10">
                        <GraduationCap className="text-violet-600" size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-violet-600 mb-1">
                          2022 - 2024
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          Tutor
                        </h3>
                        <div className="text-gray-600 font-medium mb-3">
                          Vidiyal Tution Centre
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          I began my tutoring in 2022 while in college and
                          continued part-time until June 2024. I specialized in
                          helping students achieve their academic goals and
                          provided guidance for their future studies.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Technical Arsenal
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <Code2 className="text-blue-600 mb-4" size={36} />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Programming
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 rounded-full bg-white text-gray-700 text-sm font-medium shadow-sm">
                  Java
                </span>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-violet-50 to-white border border-violet-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <Layers className="text-violet-600 mb-4" size={36} />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Frameworks
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 rounded-full bg-white text-gray-700 text-sm font-medium shadow-sm">
                  Spring Boot
                </span>
                <span className="px-4 py-2 rounded-full bg-white text-gray-700 text-sm font-medium shadow-sm">
                  React Js
                </span>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <Database className="text-blue-600 mb-4" size={36} />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Database</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 rounded-full bg-white text-gray-700 text-sm font-medium shadow-sm">
                  MySQL
                </span>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-violet-50 to-white border border-violet-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <GitBranch className="text-violet-600 mb-4" size={36} />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 rounded-full bg-white text-gray-700 text-sm font-medium shadow-sm">
                  Git
                </span>
                <span className="px-4 py-2 rounded-full bg-white text-gray-700 text-sm font-medium shadow-sm">
                  GitHub
                </span>
                <span className="px-4 py-2 rounded-full bg-white text-gray-700 text-sm font-medium shadow-sm">
                  IntelliJ
                </span>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 md:col-span-2">
              <Code2 className="text-blue-600 mb-4" size={36} />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Web Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 rounded-full bg-white text-gray-700 text-sm font-medium shadow-sm">
                  HTML
                </span>
                <span className="px-4 py-2 rounded-full bg-white text-gray-700 text-sm font-medium shadow-sm">
                  CSS
                </span>
                <span className="px-4 py-2 rounded-full bg-white text-gray-700 text-sm font-medium shadow-sm">
                  Spring suite
                </span>
                <span className="px-4 py-2 rounded-full bg-white text-gray-700 text-sm font-medium shadow-sm">
                  eclipse
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="py-32 px-6 bg-white/40 backdrop-blur-sm relative"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Featured Work
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full mx-auto" />
          </div>

          <div className="group relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-violet-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium">
                  HTML
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium">
                  CSS
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium">
                  Javascript
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium">
                  Springboot
                </span>
              </div>

              <h3 className="text-3xl font-bold mb-4">Online Grocery Store</h3>

              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Developed a web-based application for an online grocery store
                that allows users to browse products, add items to a shopping
                cart, and place home delivery orders. The system supports both
                walk-in and online customers, enabling a smooth shopping
                experience. It simplifies grocery shopping by reducing the need
                to visit crowded markets, offering convenience through doorstep
                delivery and secure online transactions.
              </p>

              <div className="flex gap-4">
                <button className="px-6 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 flex items-center gap-2">
                  View Details
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Certifications
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Java 8+ Essential Training: Syntax and Structure",
                platform: "LinkedIn",
              },
              {
                title:
                  "Learn Git by Doing: A step-by step guide to version control",
                platform: "Udemy",
              },
              { title: "Programming in Java", platform: "NPTEL" },
              {
                title: "Problem Solving Basics Certification",
                platform: "HackerRank",
              },
              { title: "My SQL Basics", platform: "Great Learning" },
            ].map((cert, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-white border border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-600/10 group-hover:bg-blue-600 transition-colors duration-300">
                    <Award
                      className="text-blue-600 group-hover:text-white transition-colors duration-300"
                      size={24}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-gray-600">{cert.platform}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-32 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-violet-600/10" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Let's Build Something
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Extraordinary
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Open to opportunities in backend development, API architecture, and
            full-stack roles. Let's discuss how I can contribute to your team.
          </p>

          <div className="flex flex-wrap gap-6 justify-center mb-12">
            <a
              href="mailto:sridharsri7537@gmail.com"
              className="group px-8 py-4 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-2"
            >
              <Mail size={20} />
              Email Me
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="tel:+918838083207"
              className="px-8 py-4 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center gap-2"
            >
              <Phone size={20} />
              Call
            </a>
          </div>

          <div className="flex flex-wrap gap-8 justify-center text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>Madhurai, Tamil Nadu, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin size={18} />
              <span>LinkedIn Profile</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-center text-gray-500 text-sm">
        <p>© 2025 Sridhar S. Crafted with precision and passion.</p>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
