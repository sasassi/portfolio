"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Download,
  Moon,
  Sun,
} from "lucide-react";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const skills = [
    {
      category: "Languages",
      items: ["Python", "C", "Java", "PHP", "JavaScript"],
    },
    {
      category: "Web Development",
      items: ["React", "Laravel", "Java EE", "HTML/CSS"],
    },
    {
      category: "Mobile & Game Dev",
      items: ["Unity", "Unreal Engine", "VR Development"],
    },
    {
      category: "Tools & Platforms",
      items: [
        "Google Cloud",
        "Git/GitHub",
        "MySQL",
        "Figma",
        "Tailwind CSS",
        "Pandas",
        "Matplotlib",
      ],
    },
    {
      category: "AI & ML",
      items: ["Deep Learning", "Transformer NLP", "Predictive Maintenance"],
    },
  ];

  const projects = [
    {
      title: "AI Learning Platform",
      type: "AI/Web",
      description:
        "Intelligent platform for students with special needs, leveraging AI for personalized learning.",
      tags: ["Python", "AI", "React", "Education"],
      link: "#",
      category: "Web",
    },
    {
      title: "Business Management System",
      type: "Web",
      description:
        "Full-stack business management web application with analytics dashboards.",
      tags: ["PHP", "MySQL", "Bootstrap"],
      link: "#",
      category: "Web",
    },
    {
      title: "Responsive Web Interfaces",
      type: "Web",
      description: "High-performance web applications with optimized APIs.",
      tags: ["React", "Laravel", "JavaScript"],
      link: "#",
      category: "Web",
    },
    {
      title: "Game Development Projects",
      type: "Game Dev",
      description:
        "Interactive game experiences using Unity and Unreal Engine.",
      tags: ["Unity", "Unreal Engine", "C++"],
      link: "#",
      category: "Game",
    },
    {
      title: "VR Development",
      type: "VR",
      description: "Immersive virtual reality experiences and applications.",
      tags: ["VR", "Unity", "C#"],
      link: "#",
      category: "Other",
    },
    {
      title: "Python Automation Scripts",
      type: "Backend",
      description:
        "Automated solutions for routine maintenance and IT operations.",
      tags: ["Python", "Automation", "Scripting"],
      link: "#",
      category: "Backend",
    },
  ];

  const experience = [
    {
      role: "Software Development Intern",
      company: "SMART BUSINESS SOLUTION",
      duration: "Jan 2023 - Feb 2023",
      description:
        "Contributed to business management web application development with dynamic dashboards and client analytics.",
      tags: ["PHP", "MySQL", "Bootstrap"],
    },
    {
      role: "IT Technician",
      company: "BSB TOYOTA",
      duration: "Jun 2021 - Aug 2021",
      description:
        "IT operations support, system troubleshooting, and automation script development for inventory management.",
      tags: ["Python", "IT Support", "Automation"],
    },
    {
      role: "Software Developer Intern",
      company: "Atelier 216",
      duration: "Jun 2016 - Aug 2016",
      description:
        "Developed responsive web interfaces and optimized backend performance by 25% through API improvements.",
      tags: ["React", "Laravel", "APIs"],
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/30 backdrop-blur-sm bg-background/80">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl">Saifeddine Sassi</div>
          <div className="flex gap-6 md:gap-8 items-center">
            <a href="#about" className="text-sm hover:text-primary transition">
              About
            </a>
            <a
              href="#projects"
              className="text-sm hover:text-primary transition"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm hover:text-primary transition"
            >
              Contact
            </a>
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-9 h-9"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </Button>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-32 border-b-2 border-primary/50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              AI & Software
              <span className="block text-primary">Developer</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Passionate about building intelligent solutions for education and
              inclusive technology. Experienced in web, mobile, VR development,
              and AI integration.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="#contact">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Get In Touch
                </Button>
              </a>
              <a href="/Saifeddine_Sassi_CV.pdf" download>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </a>
            </div>
            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/sasassi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/saifeddine-sassi-4519b8308/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:Saifeddinesassi4.0@gmail.com"
                className="text-muted-foreground hover:text-primary transition"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[
              { number: "7+", label: "Years Exp." },
              { number: "10+", label: "Certifications" },
              { number: "5+", label: "Tech Stacks" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-card border border-border/30 rounded-lg p-6 text-center hover:border-primary/50 transition"
              >
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="border-b-2 border-primary/50 bg-card/30 py-20 md:py-32"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">About Me</h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Web & Mobile Dev
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Building responsive web platforms and cross-platform
                applications using React, Laravel, and modern frameworks for
                real-world solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">
                AI & Machine Learning
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Creating intelligent solutions with deep learning and AI
                integration. NVIDIA-certified in Deep Learning and
                Transformer-based NLP applications.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Game & VR Dev
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Developing immersive experiences using Unity and Unreal Engine,
                combining cutting-edge technology with creative design.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-background border border-border/30 rounded-lg p-8">
            <p className="text-lg leading-relaxed mb-6">
              I'm an AI and software developer passionate about building
              intelligent solutions that make education more inclusive and
              accessible for all learners. With experience in web, mobile, and
              VR development — and a strong foundation in Python, Java, and C —
              I've created numerous projects, including an AI learning platform
              for students with special needs.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Beyond coding, I'm deeply involved in leadership and community
              work as a founder of LIONS Club Atlantis, where I've led
              initiatives promoting youth empowerment and innovation. I believe
              technology has the power to transform lives and create meaningful
              impact in our communities.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-8">Skills & Technologies</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <h4 className="font-semibold mb-3 text-primary">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="border-primary/50"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-32 border-b-2 border-primary/50">
        <h2 className="text-4xl font-bold mb-12">Professional Journey</h2>

        <div className="space-y-6">
          {experience.map((exp, i) => (
            <div
              key={i}
              className="border-l-2 border-primary/50 pl-6 hover:border-primary transition"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-primary">{exp.company}</p>
                  {exp.description && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {exp.description}
                    </p>
                  )}
                </div>
                <span className="text-sm text-muted-foreground">
                  {exp.duration}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {exp.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-card border border-border/30 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6">Education</h3>
          <div className="space-y-4">
            <div className="border-l-2 border-primary/50 pl-6">
              <h4 className="text-lg font-semibold">
                License Degree in Computer Technology
              </h4>
              <p className="text-primary">
                Higher Institute of Technological Studies of Siliana (ISET
                SILIANA)
              </p>
              <p className="text-sm text-muted-foreground">
                2023 - 2026 (in progress) | Major 2 consecutive years
              </p>
            </div>
            <div className="border-l-2 border-primary/50 pl-6">
              <h4 className="text-lg font-semibold">
                High School Degree in Computer Science
              </h4>
              <p className="text-primary">Ali Douaji High School Marsa Saada</p>
              <p className="text-sm text-muted-foreground">
                2023 | Good mention at Tunisian bachelor degree
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-6 mt-8">Certifications</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "NVIDIA Deep Learning Fundamentals",
              "NVIDIA AI for Predictive Maintenance",
              "NVIDIA Transformer-based NLP",
              "Google Cloud Computing",
              "IELTS (British Council Tunisia)",
              "Communication Skills",
              "Leadership",
              "Entrepreneurship",
              "First Aid Level 3",
            ].map((cert) => (
              <Badge key={cert} variant="outline" className="border-primary/50">
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="border-t border-border/30 bg-card/30 py-20 md:py-32"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">Featured Work</h2>

          {/* Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {["All", "Web", "Backend", "Game", "Other"].map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "border-border/50"
                }
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {filteredProjects.map((project, i) => (
              <div
                key={i}
                className="bg-background border border-border/30 rounded-lg overflow-hidden hover:border-primary/50 transition group"
              >
                <div className="h-40 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <span className="text-sm text-primary font-semibold">
                    {project.type}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-xs border-border/50"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-primary hover:gap-2 transition gap-1"
                  >
                    View Project
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-20 md:py-32">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">
            Let's Build Something Amazing
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always open to exciting projects, collaborations, and
            opportunities to create impactful solutions. Get in touch!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="mailto:Saifeddinesassi4.0@gmail.com">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </Button>
            </a>
            <a
              href="https://github.com/sasassi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="text-lg px-8 py-6 bg-transparent"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/saifeddine-sassi-4519b8308/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="text-lg px-8 py-6 bg-transparent"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
            </a>
            <a href="/Saifeddine_Sassi_CV.pdf" download>
              <Button
                variant="outline"
                className="text-lg px-8 py-6 bg-transparent"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 bg-card/30 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-muted-foreground">
              © 2025 Saifeddine Sassi. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition text-sm"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition text-sm"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition text-sm"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
