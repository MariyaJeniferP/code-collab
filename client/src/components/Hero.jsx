import React from "react";
import "../styles/Hero.css";
import hero from "../assets/Hero.png.png";

function Hero({ startCoding }) {
  return (
    <section className="hero">

      {/* Left */}
      <div className="hero-left">

        <h1>
          Collaborate on Code
          <br />
          <span>In Real Time</span>
        </h1>

        <p>
          Create coding rooms, invite teammates,
          and work together instantly.
        </p>

        <div className="hero-buttons">

          <button
            className="start-btn"
            onClick={startCoding}
          >
            Start Coding →
          </button>

        </div>

        <div className="hero-stats">

          <div>
            <h2>5K+</h2>
            <p>Developers</p>
          </div>

          <div>
            <h2>1000+</h2>
            <p>Rooms</p>
          </div>

          <div>
            <h2>99%</h2>
            <p>Uptime</p>
          </div>

        </div>

      </div>

      {/* Right */}
      <div className="hero-right">

        <img
          src={hero}
          alt="Code Collaboration"
        />

      </div>

    </section>
  );
}

export default Hero;