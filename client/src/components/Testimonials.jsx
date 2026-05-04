import React from "react";
import aliceImg from "../assets/alice.png";
import bobImg from "../assets/john.png";
import charlieImg from "../assets/charlie.png";
import daveImg from "../assets/dev.png";

function TestimonialsPage() {
  const testimonials = [
    {
      name: "Alice",
      role: "Frontend Developer",
      text: "CodeCollab made remote coding so easy and collaborative! I could instantly see my teammates’ changes and communicate seamlessly.",
      img: aliceImg,
      rating: 5,
    },
    {
      name: "Bob",
      role: "Full Stack Developer",
      text: "Real-time coding with my team has never been smoother. The interface is intuitive and fast. It saves us hours of back-and-forth. Perfect for project collaboration!",
      img: bobImg,
      rating: 4,
    },
    {
      name: "Charlie",
      role: "Student",
      text: "I learned more in a week using CodeCollab than months alone. It’s super engaging and motivating. The live collaboration helps me understand coding faster!",
      img: charlieImg,
      rating: 4,
    },
    {
      name: "Dave",
      role: "Backend Developer",
      text: "CodeCollab boosted our productivity drastically. Real-time collaboration is seamless and reliable. The team loves the platform. Very professional and easy to use.",
      img: daveImg,
      rating: 5,
    },
  ];

  const renderStars = (count) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} style={{ color: i < count ? "#facc15" : "#ddd", fontSize: "18px" }}>
        ★
      </span>
    ));
  };

  // Split testimonials into rows of 2
  const rows = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    rows.push(testimonials.slice(i, i + 2));
  }

  return (
    <section style={{ padding: "80px 20px", background: "#f7f9fb" }}>
      <h1 style={{ textAlign: "center", marginBottom: "80px", fontSize: "2.2rem" }}>
        What Our Users Say
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "120px" }}>
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "60px",
              flexWrap: "wrap", // important for responsive stacking
            }}
          >
            {row.map((t, index) => (
              <div
                key={index}
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "400px",
                  flex: "1 1 300px", // min 300px, grow if space available
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {/* Card wrapper */}
                <div style={{ width: "100%" }}>
                  {/* Circular Image */}
                  <img
                    src={t.img}
                    alt={t.name}
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "5px solid #4f46e5",
                      position: "absolute",
                      top: "-75px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "#fff",
                    }}
                  />

                  {/* Rectangular Card */}
                  <div
                    style={{
                      background: "gray",
                      padding: "120px 40px 40px 40px",
                      borderRadius: "20px",
                      boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.1)",
                      textAlign: "center",
                      minHeight: "250px",
                    }}
                  >
                    <div style={{ marginBottom: "15px" }}>{renderStars(t.rating)}</div>
                    <p
                      style={{
                        fontStyle: "italic",
                        color: "white",
                        marginBottom: "25px",
                        lineHeight: "1.6",
                      }}
                    >
                      "{t.text}"
                    </p>
                    <h3 style={{ margin: "0", fontSize: "1.2rem" }}>{t.name}</h3>
                    <p style={{ color: "white", fontSize: "0.95rem" }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsPage;