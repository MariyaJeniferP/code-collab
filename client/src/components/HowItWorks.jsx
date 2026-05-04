import React from "react";
import PageWrapper from "../components/PageWrapper"; // import wrapper
import create from "../assets/create.png";
import share from "../assets/share.png.png";
import code from "../assets/code.png";

function HowItWorks() {
  const steps = [
    { img: create, title: "Create a Room", desc: "Start a new coding room instantly." },
    { img: share, title: "Share Room ID", desc: "Invite teammates using a unique ID." },
    { img: code, title: "Start Coding", desc: "Collaborate and write code together." },
  ];

  return (
    <section style={{ padding: "80px 0", textAlign: "center", background: "white" }}>
      <PageWrapper>
        <h1 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "10px" }}>
          How Code-Collab Works
        </h1>
        <p style={{ fontSize: "18px", color: "#555", marginBottom: "60px" }}>
          Get started in just three simple steps.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", // responsive
          gap: "40px",
        }}>
          {steps.map((step, index) => (
            <div
              key={index}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-8px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              style={{
                padding: "30px",
                borderRadius: "14px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease",
              }}
            >
              <div style={{ fontSize: "28px", fontWeight: "bold", color: "#4f46e5", marginBottom: "15px" }}>
                {index + 1}
              </div>
              <img
                src={step.img}
                alt={step.title}
                style={{ width: "140px", height: "140px", objectFit: "contain", display: "block", margin: "0 auto 15px" }}
              />
              <h3 style={{ marginBottom: "10px" }}>{step.title}</h3>
              <p style={{ color: "#666" }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </PageWrapper>
    </section>
  );
}

export default HowItWorks;