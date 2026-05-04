import React from "react";
import realtime from "../assets/realtime.png";
import team from "../assets/team.png";
import execute from "../assets/execute.png";
import secure from "../assets/secure.png";
import syntax from "../assets/syntax.png";
import cloud from "../assets/cloud.png";

function WhyChoose() {

  return (

    <section style={{

      padding: "80px 40px",
      textAlign: "center",
      background: "#f8fafc"

    }}>

      {/* Title */}

      <h1 style={{

        fontSize: "36px",
        fontWeight: "bold",
        marginBottom: "10px"

      }}>
        Why Choose Code-Collab?
      </h1>

      {/* Subtitle */}

      <p style={{

        fontSize: "18px",
        color: "#555",
        marginBottom: "50px"

      }}>
        Everything you need to collaborate
        and code efficiently with your team.
      </p>

      {/* Cards */}

      <div style={{

        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "25px",
        maxWidth: "1100px",
        margin: "0 auto"

      }}>

        {[
  {
    img: realtime,
    title: "Real-Time Collaboration",
    desc: "Work together on code instantly."
  },

  {
    img: team,
    title: "Multi-User Rooms",
    desc: "Invite teammates using room IDs."
  },

  {
    img: execute,
    title: "Fast Code Execution",
    desc: "Run code quickly and efficiently."
  },

  {
    img: secure,
    title: "Secure Login",
    desc: "Authentication keeps data safe."
  },

  {
    img: syntax,
    title: "Syntax Highlighting",
    desc: "Write clean readable code."
  },

  {
    img: cloud,
    title: "Cloud Storage",
    desc: "Save and access code anytime."
  }

].map((item, index) => (

          <div
            key={index}

             onMouseEnter={(e) =>
    e.currentTarget.style.transform =
      "translateY(-8px)"
  }

  onMouseLeave={(e) =>
    e.currentTarget.style.transform =
      "translateY(0)"
  }

            style={{

              background: "white",
              padding: "35px",
              paddingTop: "15px",
              minHeight: "240px",

              borderRadius: "12px",

              boxShadow:
                "0 4px 15px rgba(0,0,0,0.1)",

              transition: "transform 0.3s ease"

            }}

          >

            <img
  src={item.img}
  alt={item.title}
  style={{
  width: "100%",
  height: "180px",
  objectFit: "contain",
  display: "block",
  margin: "0 auto 10px"
}}
/>
            <h3 style={{
              marginBottom: "10px"
            }}>
              {item.title}
            </h3>

            <p style={{
              color: "#666"
            }}>
              {item.desc}
            </p>

          </div>

        ))}

      </div>

    </section>

  );

}

export default WhyChoose;