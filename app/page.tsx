"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Menu,
  Brain,
  Cloud,
  Code,
  ArrowRight,
  X,
  Phone,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Calendar,
  Award,
  Briefcase,
} from "lucide-react"
import { useEffect, useState } from "react"
import LeadForm from "@/components/lead-form"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [skillsVisible, setSkillsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSkillsVisible(true)
          }
        })
      },
      { threshold: 0.3 },
    )

    const skillsSection = document.getElementById("skills-timeline")
    if (skillsSection) {
      observer.observe(skillsSection)
    }

    return () => observer.disconnect()
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  const WhatsAppIcon = () => (
    <svg
      className="w-6 h-6 text-black group-hover:animate-pulse"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
    </svg>
  )

  const skills = [
    { name: "Machine Learning & AI", percentage: 95, delay: 0 },
    { name: "Python & Data Science", percentage: 90, delay: 200 },
    { name: "Full-Stack Development", percentage: 88, delay: 400 },
    { name: "Cloud Architecture (AWS/Azure)", percentage: 85, delay: 600 },
    { name: "DevOps & CI/CD", percentage: 82, delay: 800 },
    { name: "Database Design & Management", percentage: 87, delay: 1000 },
  ]

  const timeline = [
    {
      year: "2024",
      title: "Founder & CEO",
      company: "DRUPTO CONSULTANTS PRIVATE LIMITED",
      description:
        "Leading innovative IT consulting and AI solutions across India, specializing in enterprise digital transformation.",
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      year: "2020-2024",
      title: "Senior AI Engineer",
      company: "Enterprise Solutions",
      description:
        "Developed and deployed large-scale machine learning systems, leading cross-functional teams in AI implementation.",
      icon: <Brain className="w-5 h-5" />,
    },
    {
      year: "2018-2020",
      title: "Full-Stack Developer",
      company: "Tech Innovations",
      description:
        "Built scalable web applications and cloud infrastructure, specializing in modern JavaScript frameworks and cloud services.",
      icon: <Code className="w-5 h-5" />,
    },
    {
      year: "2014-2018",
      title: "Software Engineer",
      company: "Digital Solutions",
      description: "Started career in software development, focusing on backend systems and database optimization.",
      icon: <Award className="w-5 h-5" />,
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav
        className={`flex items-center justify-between px-6 py-4 border-b border-border/20 transition-all duration-1000 relative z-50 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
      >
        <div className="flex items-center space-x-8">
          <div className="text-xl font-bold text-white bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text hover:text-transparent transition-all duration-300 cursor-pointer">
            SAURABH CHANDRA
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("home")}
              className="cursor-pointer hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="cursor-pointer hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("business")}
              className="cursor-pointer hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Business
            </button>
            <button
              onClick={() => scrollToSection("skills-timeline")}
              className="cursor-pointer hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Skills & Timeline
            </button>
            <a
              href="https://druptoconsultants.com/contact"
              className="cursor-pointer hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-all duration-300 group">
            <a href="tel:+916388063038" className="flex items-center">
              CALL NOW
              <Phone className="w-4 h-4 ml-2 group-hover:animate-pulse" />
            </a>
          </Button>
          <button
            onClick={toggleMobileMenu}
            className="md:hidden hover:scale-110 transition-transform duration-300 cursor-pointer p-2 hover:bg-primary/10 rounded-lg"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 transition-transform duration-300" />
            ) : (
              <Menu className="w-6 h-6 transition-transform duration-300" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-all duration-300 ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={toggleMobileMenu}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-card border-l border-border/20 z-50 md:hidden transition-all duration-300 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-white bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text hover:text-transparent transition-all duration-300">
              SAURABH CHANDRA
            </div>
            <button onClick={toggleMobileMenu} className="p-2 hover:bg-primary/10 rounded-lg transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="block text-lg font-semibold hover:text-primary transition-colors w-full text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block text-lg font-semibold hover:text-primary transition-colors w-full text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("business")}
              className="block text-lg font-semibold hover:text-primary transition-colors w-full text-left"
            >
              Business
            </button>
            <button
              onClick={() => scrollToSection("skills-timeline")}
              className="block text-lg font-semibold hover:text-primary transition-colors w-full text-left"
            >
              Skills & Timeline
            </button>
            <a
              href="https://druptoconsultants.com/contact"
              className="block text-lg font-semibold hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="pt-6 border-t border-border/20">
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-all duration-300 group">
              <a href="tel:+916388063038" className="flex items-center justify-center w-full">
                CALL NOW
                <Phone className="w-4 h-4 ml-2 group-hover:animate-pulse" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="relative">
        <div className="absolute inset-0 w-full overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 w-full h-full opacity-30 animate-wave-flow"
            style={{
              backgroundImage: `url('/wave-background.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div
            className="absolute inset-0 w-full h-full opacity-20 animate-wave-flow-reverse"
            style={{
              backgroundImage: `url('/wave-background.png')`,
              backgroundSize: "120% 120%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>

        <div className="px-6 py-20 max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}
            >
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-balance">
                <span
                  className={`inline-block transition-all duration-700 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                >
                  Software & AI Engineer:
                </span>
                <br />
                <span
                  className={`inline-block transition-all duration-700 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                >
                  Building Intelligent
                </span>
                <br />
                <span
                  className={`inline-block text-white hover:bg-gradient-to-r hover:from-purple-400 hover:via-blue-400 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition-all duration-700 delay-900 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                >
                  Solutions
                </span>
              </h1>
              <p
                className={`text-lg text-muted-foreground leading-relaxed max-w-lg transition-all duration-700 delay-1100 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              >
                Delivering innovative solutions through strategic design and meticulous attention to detail. Passionate
                about building intelligent systems that solve real-world problems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-all duration-300 group">
                  <a href="https://druptoconsultants.com/contact" className="flex items-center">
                    START YOUR PROJECT
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("business")}
                  className="border-border/50 hover:border-primary/50 hover:bg-primary/10 hover:scale-105 transition-all duration-300 bg-transparent"
                >
                  VIEW SERVICES
                </Button>
              </div>
            </div>

            {/* Lead form — right hero column (new, no other elements touched) */}
            <div
              className={`transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <LeadForm
                idPrefix="hero-lead"
                source="homepage-hero"
                className="lg:max-w-lg lg:ml-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 group">
            <h2 className="text-4xl font-bold text-balance text-white hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400 hover:bg-clip-text hover:text-transparent transition-all duration-500">
              About Saurabh Chandra
            </h2>
            <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
              Hello! I'm a Software and AI Engineer passionate about building intelligent systems that solve real-world
              problems. As the founder and owner of DRUPTO CONSULTANTS PRIVATE LIMITED, I lead a team that specializes
              in developing scalable applications and implementing cutting-edge AI solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
              With expertise spanning machine learning, full-stack development, and cloud technologies, I bring ideas to
              life through elegant code and innovative AI implementations. Through my company, we transform businesses
              with innovative IT consulting and digital services across India.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="space-y-2">
                <h3 className="font-semibold text-primary">Core Skills</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Machine Learning</li>
                  <li>• Full-Stack Development</li>
                  <li>• Data Science</li>
                  <li>• Cloud Architecture</li>
                  <li>• AI/ML Deployment</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-primary mt-4">Experience</h3>
                <p className="text-sm text-muted-foreground">10+ Years in IT</p>
              </div>
            </div>
          </div>
          <div className="lg:order-first">
            <img
              src="/portfolio.jpg"
              alt="Saurabh Chandra - Software & AI Engineer"
              className="w-full h-auto rounded-lg hover:scale-105 hover:rotate-1 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20"
            />
          </div>
        </div>
      </section>

      {/* Skills Timeline & Progress Bars Section */}
      <section id="skills-timeline" className="px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">— EXPERTISE & EXPERIENCE</p>
          <h2 className="text-4xl font-bold mb-8 text-balance text-white hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400 hover:bg-clip-text hover:text-transparent transition-all duration-500">
            Skills & Professional Journey
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            A decade of experience in software engineering and AI, with a proven track record of delivering innovative
            solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skills Progress Bars */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Award className="w-6 h-6 mr-3 text-primary" />
              Technical Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-primary font-semibold">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-border/30 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-1000 ease-out ${
                        skillsVisible ? "animate-pulse" : ""
                      }`}
                      style={{
                        width: skillsVisible ? `${skill.percentage}%` : "0%",
                        transitionDelay: `${skill.delay}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Calendar className="w-6 h-6 mr-3 text-primary" />
              Professional Timeline
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 opacity-30" />

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div
                    key={item.year}
                    className={`relative flex items-start space-x-4 transition-all duration-700 ${
                      skillsVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    {/* Timeline dot */}
                    <div className="relative z-10 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center border-2 border-primary/50 group-hover:border-primary transition-all duration-300">
                      <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 group">
                      <Card className="bg-card/50 border-border/20 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                              {item.year}
                            </span>
                          </div>
                          <h4 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors duration-300">
                            {item.title}
                          </h4>
                          <p className="text-sm text-primary/80 mb-3 font-medium">{item.company}</p>
                          <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Stats Section */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2 group hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-primary group-hover:text-white transition-colors duration-300">
              10+
            </div>
            <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              Years Experience
            </div>
          </div>
          <div className="space-y-2 group hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-primary group-hover:text-white transition-colors duration-300">
              24/7
            </div>
            <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              Support Available
            </div>
          </div>
          <div className="space-y-2 group hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-primary group-hover:text-white transition-colors duration-300">
              100+
            </div>
            <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              Projects Delivered
            </div>
          </div>
          <div className="space-y-2 group hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-primary group-hover:text-white transition-colors duration-300">
              7
            </div>
            <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              Core Services
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="business" className="relative">
        <div className="absolute inset-0 w-full overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 w-full h-full opacity-5 animate-spin-slow"
            style={{
              backgroundImage: `url('/fan-background.png')`,
              backgroundSize: "80% 80%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              animationDuration: "30s",
            }}
          />
          <div
            className="absolute -top-20 -left-20 w-96 h-96 opacity-8 animate-spin-slow"
            style={{
              backgroundImage: `url('/fan-background.png')`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              animationDuration: "25s",
              animationDirection: "reverse",
            }}
          />
          <div
            className="absolute -top-32 -right-32 w-80 h-80 opacity-6 animate-spin-slow"
            style={{
              backgroundImage: `url('/fan-background.png')`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              animationDuration: "35s",
            }}
          />
          <div
            className="absolute -bottom-24 -left-24 w-72 h-72 opacity-7 animate-spin-slow"
            style={{
              backgroundImage: `url('/fan-background.png')`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              animationDuration: "20s",
              animationDirection: "reverse",
            }}
          />
          <div
            className="absolute -bottom-16 -right-16 w-64 h-64 opacity-5 animate-spin-slow"
            style={{
              backgroundImage: `url('/fan-background.png')`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              animationDuration: "40s",
            }}
          />
          <div
            className="absolute top-1/4 left-1/3 w-32 h-32 opacity-4 animate-spin-slow"
            style={{
              backgroundImage: `url('/fan-background.png')`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              animationDuration: "15s",
            }}
          />
          <div
            className="absolute top-3/4 right-1/3 w-28 h-28 opacity-3 animate-spin-slow"
            style={{
              backgroundImage: `url('/fan-background.png')`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              animationDuration: "18s",
              animationDirection: "reverse",
            }}
          />
        </div>

        <div className="px-6 py-20 max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4 animate-fade-in">
              — DRUPTO CONSULTANTS
            </p>
            <h2 className="text-4xl font-bold mb-8 text-balance text-white hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400 hover:bg-clip-text hover:text-transparent transition-all duration-500">
              Leading IT Solutions Provider
              <br />
              in India
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transforming businesses with innovative IT consulting and digital services. Your trusted partner for
              cutting-edge technology solutions across India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-card border-border/20 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 group">
              <CardContent className="p-8 space-y-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
                  <Brain className="w-6 h-6 text-primary group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  AI & Generative AI
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300 text-sm">
                  Cutting-edge artificial intelligence services to transform business operations with intelligent
                  automation and machine learning.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/20 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 group">
              <CardContent className="p-8 space-y-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
                  <Cloud className="w-6 h-6 text-primary group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  Cloud Computing
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300 text-sm">
                  Comprehensive cloud infrastructure and services to modernize IT environments with scalable, secure
                  solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/20 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 group">
              <CardContent className="p-8 space-y-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
                  <Code className="w-6 h-6 text-primary group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  IT Consultancy
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300 text-sm">
                  Expert consultancy offering professional advice on design, development, and implementation of computer
                  systems.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/20 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 group">
              <CardContent className="p-8 space-y-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
                  <ArrowRight className="w-6 h-6 text-primary group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  Portal Management
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300 text-sm">
                  Comprehensive management and operation of websites functioning as internet portals, including media
                  platforms.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/20 px-6 py-16 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="text-2xl font-bold text-white bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text hover:text-transparent transition-all duration-300 cursor-pointer">
                SAURABH CHANDRA
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Software & AI Engineer passionate about building intelligent systems that solve real-world problems.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/SaurabhChandra1024"
                  className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 hover:scale-110 transition-all duration-300 cursor-pointer"
                >
                  <Github className="w-5 h-5 text-primary" />
                </a>
                <a
                  href="https://linkedin.com/in/saurabh-c-287285167"
                  className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 hover:scale-110 transition-all duration-300 cursor-pointer"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                </a>
                <a
                  href="https://twitter.com/saurabh474"
                  className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 hover:scale-110 transition-all duration-300 cursor-pointer"
                >
                  <Twitter className="w-5 h-5 text-primary" />
                </a>
                <a
                  href="https://instagram.com/saurabhchandra.in"
                  className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 hover:scale-110 transition-all duration-300 cursor-pointer"
                >
                  <Instagram className="w-5 h-5 text-primary" />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Services</h3>
              <ul className="space-y-2">
                <li>
                  <span className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
                    AI & Machine Learning
                  </span>
                </li>
                <li>
                  <span className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
                    Cloud Computing
                  </span>
                </li>
                <li>
                  <span className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
                    IT Consultancy
                  </span>
                </li>
                <li>
                  <span className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
                    Portal Management
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://druptoconsultants.com/"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
                  >
                    DRUPTO CONSULTANTS
                  </a>
                </li>
                <li>
                  <a
                    href="https://druptoconsultants.com/about"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://druptoconsultants.com/services"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
                  >
                    Our Services
                  </a>
                </li>
                <li>
                  <a
                    href="https://druptoconsultants.com/contact"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
              <div className="space-y-3">
                <p className="text-muted-foreground">contact@saurabhchandra.in</p>
                <p className="text-muted-foreground">+91-63880-63038</p>
                <p className="text-muted-foreground">Lucknow, Uttar Pradesh, India</p>
              </div>
            </div>
          </div>

          <div className="border-t border-border/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">© 2024 Saurabh Chandra. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm cursor-pointer">
                Privacy Policy
              </span>
              <span className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm cursor-pointer">
                Terms of Service
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Contact Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
        <a
          href="https://wa.me/916388063038"
          className="w-14 h-14 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 group border border-gray-200"
        >
          <WhatsAppIcon />
        </a>
        <a
          href="tel:+916388063038"
          className="w-14 h-14 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 group border border-gray-200"
        >
          <Phone className="w-6 h-6 text-black group-hover:animate-pulse" />
        </a>
        <a
          href="mailto:contact@saurabhchandra.in"
          className="w-14 h-14 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 group border border-gray-200"
        >
          <Mail className="w-6 h-6 text-black group-hover:animate-pulse" />
        </a>
      </div>
    </div>
  )
}
