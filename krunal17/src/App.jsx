import "./App.css";

import emailjs from "@emailjs/browser";
import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profile from "./assets/P1.jpg";
import { FaGraduationCap } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  FaCode, FaServer, FaDatabase, FaTools, FaLaptopCode,
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaPhp,
  FaNodeJs, FaPython, FaJava, FaGitAlt, FaFigma
} from "react-icons/fa";
import {
  SiExpress, SiDjango, SiMysql, SiMongodb,
  SiVercel, SiCanva,
  SiCplusplus, SiC, SiDotnet
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { HiArrowUpRight } from "react-icons/hi2";

function App() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  const words = [
    "Full Stack Development.",
    "Mobile App Development.",
    "UI/UX Design.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const scrollBar = document.querySelector(".scroll-bar");

    const handleScroll = () => {
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (window.scrollY / height) * 100;
      if (scrollBar) {
        scrollBar.style.transform = `scaleX(${scrolled / 100})`;
      }

      setNavScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch(() => {
        alert("Failed to send message.");
      });
  };

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="main">
      {/* SCROLL PROGRESS */}
      <div className="scroll-bar"></div>

      {/* NAVBAR */}
      <nav
        className={`navbar ${navScrolled ? "scrolled" : ""}`}
      >
        <div className="logo">Krunal.dev</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="social-icons">
          <a
            href="https://github.com/Krunal1712"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/krunal-prajapati-049781300"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/krunal._.1712"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a href="mailto:krunal17122005@gmail.com" aria-label="Email">
            <MdEmail />
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-center">
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <img src={profile} alt="Krunal Prajapati" />
            <h3 className="hero-name">Krunal Prajapati</h3>
          </motion.div>

          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="subtitle-tag">
              <span className="dot"></span>
              Available for opportunities
            </div>

            <h1>
              I build{" "}
              <span className="animated-word-container">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[wordIndex]}
                    className="animated-word"
                    initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -15, filter: "blur(8px)" }}
                    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                  >
                    {words[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            <p>
              Full Stack Developer focused on clean architecture, performance
              optimization and crafting real-world digital solutions that make an
              impact.
            </p>

            <div className="buttons">
              <a href="#projects">
                <button className="primary">View Work</button>
              </a>
              <button className="secondary">Download Resume</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS */}
      <motion.section
        id="projects"
        className="projects"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={fadeUp}>
          <div className="section-label">Portfolio</div>
          <h2>Featured Work</h2>
          <p className="section-desc" style={{ textAlign: "center", margin: "0 auto 50px" }}>
            A selection of projects that showcase my skills in building
            real-world applications with modern technologies.
          </p>
        </motion.div>

        <div className="project-grid">
          <motion.div
            className="project-card"
            variants={cardVariant}
            whileHover={{ y: -8 }}
          >
            <div className="project-number">01</div>
            <h3>Smart Traffic System</h3>
            <p>
              IoT-based traffic optimization system using Python, OpenCV and
              real-time image processing for intelligent traffic management.
            </p>
            <div className="project-tech">
              <span>Python</span>
              <span>OpenCV</span>
              <span>IoT</span>
            </div>
          </motion.div>

          <motion.div
            className="project-card"
            variants={cardVariant}
            whileHover={{ y: -8 }}
          >
            <div className="project-number">02</div>
            <h3>Online Library Platform</h3>
            <p>
              Full-stack web application with authentication, Node.js backend,
              and scalable architecture for managing digital books.
            </p>
            <div className="project-tech">
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
            </div>
          </motion.div>

          <motion.div
            className="project-card"
            variants={cardVariant}
            whileHover={{ y: -8 }}
          >
            <div className="project-number">03</div>
            <h3>Appointment Booking System</h3>
            <p>
              Full stack web application that allows users to book appointments
              online with real-time availability and secure authentication.
            </p>
            <div className="project-tech">
              <span>React</span>
              <span>Node.js</span>
              <span>MySQL</span>
            </div>
            <div className="project-buttons">
              <a
                href="https://krunal1712.github.io/krunalproject/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <HiArrowUpRight />
              </a>
              <a
                href="https://krunal1712.github.io/krunalproject/"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo <HiArrowUpRight />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ABOUT */}
      <motion.section
        id="about"
        className="about-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="about-grid container">
          <motion.div className="about-text" variants={fadeUp}>
            <div className="section-label">About</div>
            <h2>Turning ideas into digital reality</h2>
            <p>
              I recently completed a full stack Development course and I am
              currently in my third year of BSC CA & IT at{" "}
              <span>Sardar Patel University</span>.
            </p>
            <p>
              I'm a passionate <span>Full Stack Developer</span> focused on
              building scalable web applications and real-world software
              solutions using modern technologies.
            </p>
            <p>
              I specialize in React, Node.js, and databases to create
              high-performance applications with clean architecture. My goal is
              to build products that solve real problems and deliver exceptional
              user experiences.
            </p>
          </motion.div>

          <motion.div className="hero-image" variants={scaleUp}>
            <img src={profile} alt="Krunal Prajapati" />
          </motion.div>
        </div>
      </motion.section>

      {/* EDUCATION */}
      <motion.section
        id="education"
        className="education container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp}>
          <div className="edu-icon">
            <FaGraduationCap />
          </div>
          <div className="section-label" style={{ justifyContent: "center" }}>
            Education
          </div>
          <h2>Academic Journey</h2>
        </motion.div>

        <div className="education-grid">
          <motion.div className="education-card" variants={cardVariant}>
            <h3>Bachelor of Science (CA & IT)</h3>
            <p className="edu-college">Sardar Patel University</p>
            <p className="edu-year">2023 — Present</p>
            <p>
              Studying Computer Applications and Information Technology,
              focusing on programming, databases, and software development.
            </p>
          </motion.div>

          <motion.div className="education-card" variants={cardVariant}>
            <h3>Full Stack Development</h3>
            <p className="edu-college">Self Learning & Internship</p>
            <p className="edu-year">Internship</p>
            <p>
              Mastering modern web development technologies including React,
              Node.js, Express, and MongoDB through hands-on projects.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* SKILLS */}
      <motion.section
        id="skills"
        className="tech-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp}>
          <div
            className="section-label"
            style={{ justifyContent: "center" }}
          >
            Skills
          </div>
          <h2 className="tech-title">Tech Infrastructure</h2>
          <p className="tech-subtitle">
            A specialized stack focused on performance, scalability, and solving
            real-world challenges with modern tools.
          </p>
        </motion.div>

        <div className="tech-grid">
          <motion.div className="tech-card" variants={cardVariant}>
            <div className="tech-header">
              <div className="tech-icon">
                <FaCode />
              </div>
              <h3>Frontend</h3>
            </div>
            <div className="tech-tags">
              <span><FaReact /> React</span>
              <span><FaHtml5 /> HTML5</span>
              <span><FaCss3Alt /> CSS3</span>
              <span><FaJs /> JavaScript</span>
              <span><FaPhp /> PHP</span>
              <span><SiDotnet /> ASP</span>
            </div>
          </motion.div>

          <motion.div className="tech-card" variants={cardVariant}>
            <div className="tech-header">
              <div className="tech-icon">
                <FaServer />
              </div>
              <h3>Backend</h3>
            </div>
            <div className="tech-tags">
              <span><FaNodeJs /> Node.js</span>
              <span><SiExpress /> Express</span>
              <span><FaServer /> REST API</span>
              <span><FaPython /> Python</span>
              <span><SiDjango /> Django</span>
            </div>
          </motion.div>

          <motion.div className="tech-card" variants={cardVariant}>
            <div className="tech-header">
              <div className="tech-icon">
                <FaDatabase />
              </div>
              <h3>Database</h3>
            </div>
            <div className="tech-tags">
              <span><SiMysql /> MySQL</span>
              <span><SiMongodb /> MongoDB</span>
            </div>
          </motion.div>

          <motion.div className="tech-card" variants={cardVariant}>
            <div className="tech-header">
              <div className="tech-icon">
                <FaTools />
              </div>
              <h3>Tools</h3>
            </div>
            <div className="tech-tags">
              <span><FaGitAlt /> Git</span>
              <span><FaGithub /> GitHub</span>
              <span><SiVercel /> Vercel</span>
              <span><VscVscode /> VS Code</span>
              <span><FaFigma /> Figma</span>
              <span><SiCanva /> Canva</span>
            </div>
          </motion.div>

          <motion.div className="tech-card" variants={cardVariant}>
            <div className="tech-header">
              <div className="tech-icon">
                <FaLaptopCode />
              </div>
              <h3>Languages</h3>
            </div>
            <div className="tech-tags">
              <span><FaJava /> Java</span>
              <span><SiCplusplus /> C++</span>
              <span><SiC /> C</span>
              <span><FaPython /> Python</span>
              <span><FaCode /> VB</span>
              <span><FaJs /> JavaScript</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section
        id="contact"
        className="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp}>
          <div
            className="section-label"
            style={{ justifyContent: "center" }}
          >
            Contact
          </div>
          <h2>Let's Work Together</h2>
          <p className="contact-subtitle">
            Have a project in mind? Let's connect and build something amazing.
          </p>
        </motion.div>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
          variants={fadeUp}
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit" className="primary">
            Send Message
          </button>
        </motion.form>
      </motion.section>

      {/* FOOTER */}
      <footer className="footer">
        <p>
          Designed & built by Krunal Prajapati © {new Date().getFullYear()}
        </p>
        <div className="footer-social">
          <a
            href="https://github.com/Krunal1712"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/krunal-prajapati-049781300"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;