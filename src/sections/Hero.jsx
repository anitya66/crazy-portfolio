import profile from "../data/profile";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section id="home" className="hero">
      {/* Background decorative elements */}
      <div className="hero-grid" />
      <div className="hero-noise" />

      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />

      <div className="hero-particle particle-one" />
      <div className="hero-particle particle-two" />
      <div className="hero-particle particle-three" />
      <div className="hero-particle particle-four" />

      <div className="hero-container">
        {/* ================= LEFT ================= */}
        <div className="hero-left">
          <div className="hero-status">
            <span className="status-dot" />
            <span>AVAILABLE FOR OPPORTUNITIES</span>
          </div>

          <p className="small-text">
            <span className="small-line" />
            {profile.role}
          </p>

          <h1 className="hero-title">
            {profile.tagline.split(".").map((line, index) => (
              <span key={index} className="hero-title-line">
                {line}
                {index === 0 && <span className="title-dot">.</span>}
              </span>
            ))}
          </h1>

          <div className="hero-role-wrapper">
            <span className="role-prefix">&gt;</span>

            <TypeAnimation
              sequence={[
                "Java Full Stack Developer",
                2000,
                "React Frontend Developer",
                2000,
                "Spring Boot Backend Developer",
                2000,
                "DSA Enthusiast",
                2000,
              ]}
              wrapper="h2"
              speed={40}
              repeat={Infinity}
              className="hero-role"
            />
          </div>

          <p className="hero-desc">{profile.description}</p>

          <div className="hero-buttons">
            <a href="#projects" className="hero-btn hero-btn-primary">
              <span>EXPLORE PROJECTS</span>
              <span className="btn-arrow">↗</span>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn hero-btn-secondary"
            >
              <span>GITHUB</span>
              <span className="btn-arrow">↗</span>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn hero-btn-secondary"
            >
              <span>LINKEDIN</span>
              <span className="btn-arrow">↗</span>
            </a>

            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn hero-btn-secondary"
            >
              <span>RESUME</span>
              <span className="btn-arrow">↓</span>
            </a>
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="hero-right">
          <div className="hero-visual">
            {/* Outer orbit */}
            <div className="orbit orbit-one">
              <span className="orbit-dot orbit-dot-one" />
            </div>

            <div className="orbit orbit-two">
              <span className="orbit-dot orbit-dot-two" />
            </div>

            <div className="orbit orbit-three">
              <span className="orbit-dot orbit-dot-three" />
            </div>

            {/* Main glow */}
            <div className="visual-glow" />

            {/* Image frame */}
            <div className="hero-image-frame">
              <div className="image-corner corner-top-left" />
              <div className="image-corner corner-top-right" />
              <div className="image-corner corner-bottom-left" />
              <div className="image-corner corner-bottom-right" />

              <img
                src="/profile.jpg"
                alt="Anitya Anand"
                className="hero-image"
              />
            </div>

            {/* Floating labels */}
            <div className="floating-card floating-card-top">
              <span className="floating-icon">✦</span>
              <div>
                <small>STACK</small>
                <strong>JAVA + REACT</strong>
              </div>
            </div>

            <div className="floating-card floating-card-bottom">
              <span className="floating-icon">⌁</span>
              <div>
                <small>STATUS</small>
                <strong>BUILDING...</strong>
              </div>
              <span className="live-dot" />
            </div>

            <div className="visual-cross cross-one">+</div>
            <div className="visual-cross cross-two">+</div>
            <div className="visual-cross cross-three">+</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
