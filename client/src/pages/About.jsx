import React from "react";
import aboutImg from "../assets/about-team.png.jpg";

function About() {

  return (

    <section style={{

      background:
       "linear-gradient(135deg,#86efac,#fde68a)",

      minHeight: "100vh",

      paddingBottom: "40px",

      color: "black"

    }}>

      {/* Heading */}

      <div style={{

        textAlign: "center",

        padding: "60px 20px"

      }}>

        <h1 style={{
          fontSize: "42px",
          marginBottom: "10px"
        }}>
          About CodeCollab ⚡
        </h1>

        <p style={{
          fontSize: "18px",
          maxWidth: "700px",
          margin: "0 auto",
          color: "gray"
        }}>
          Collaborate, code, and build together
          in real-time with powerful tools.
        </p>

      </div>

      {/* Main Section */}

      <div style={{

        display: "grid",

        gridTemplateColumns:
          "repeat(auto-fit, minmax(300px, 1fr))",

        gap: "40px",

        padding: "40px"

      }}>

        {/* Image */}

        <img
          src={aboutImg}
          alt="Team"
          style={{
            width: "100%",
            borderRadius: "12px"
          }}
        />

        {/* Content */}

        <div style={{

          background: "rgba(255,255,255,0.1)",

          padding: "30px",

          borderRadius: "12px",

          backdropFilter: "blur(10px)"

        }}>

          <h2 style={{
  marginBottom: "10px",
  marginTop:"-20px"
}}>
  Why Choose CodeCollab?
</h2>

<p style={{
  lineHeight: "1.5",
  fontSize: "17px",
  marginBottom: "15px"
}}>
  <strong>CodeCollab</strong> is a powerful
  real-time code collaboration platform that
  enables developers to work together from
  anywhere in the world. It provides a smooth
  and interactive coding environment where
  multiple users can write and edit code
  simultaneously.
</p>

<p style={{
  lineHeight: "1.5",
  fontSize: "17px",
  marginBottom: "15px"
}}>
  With CodeCollab, users can create coding
  rooms, invite teammates, and collaborate
  instantly without delays. The platform is
  designed to improve teamwork, enhance
  productivity, and make coding sessions
  faster and more efficient.
</p>

<ul style={{
  marginTop: "15px",
  lineHeight: "1.6",
  fontSize: "16px"
}}>

  <li>✔ Real-time collaborative coding</li>

  <li>✔ Instant room creation</li>

  <li>✔ Multi-user support</li>

  <li>✔ Secure authentication system</li>

  <li>✔ Cloud-based code access</li>

</ul>
        </div>

      </div>

      {/* Features */}

      <div style={{
        padding: "40px"
      }}>

        <h2 style={{
          textAlign: "center",
          marginBottom: "30px"
        }}>
          🚀 Features
        </h2>

        <div style={{

          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit, minmax(250px, 1fr))",

          gap: "25px"

        }}>

          {features.map((item, index) => (

            <div key={index} style={{

              background: "rgba(255,255,255,0.1)",

              padding: "20px",

              borderRadius: "10px",

              textAlign: "center"

            }}>

              <h3>{item.title}</h3>

              <p style={{
                color: "gray"
              }}>
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* Tech Stack */}

      {/* Technologies Section */}

<div style={{

  marginTop: "70px",

  textAlign: "center"

}}>

  <h2 style={{
    marginBottom: "25px"
  }}>
    🛠 Technologies Used
  </h2>

  <div style={{

    display: "flex",

    justifyContent: "center",

    flexWrap: "wrap",

    gap: "15px"

  }}>

    {technologies.map((tech, index) => (

      <a
        key={index}

        href={tech.link}

        target="_blank"

        rel="noopener noreferrer"

        style={{

          background: "white",

          color: "#065f46",

          padding: "12px 18px",

          borderRadius: "25px",

          textDecoration: "none",

          fontWeight: "500",

          boxShadow:
            "0 5px 15px rgba(0,0,0,0.1)",

          transition: "0.3s"

        }}

      >

        {tech.name}

      </a>

    ))}

  </div>

</div>

    </section>

  );

}

const features = [

  {
    title: "Real-Time Collaboration",
    desc: "Edit code live with your team instantly."
  },

  {
    title: "Secure Access",
    desc: "Authentication ensures data safety."
  },

  {
    title: "Multi-Language",
    desc: "Supports multiple programming languages."
  },

  {
    title: "Cloud Storage",
    desc: "Access your code anytime, anywhere."
  }

];

const technologies = [

  {
    name: "React.js",
    link: "https://www.w3schools.com/react/"
  },

  {
    name: "Node.js",
    link: "https://www.w3schools.com/nodejs/"
  },

  {
    name: "Socket.IO",
    link: "https://www.w3schools.com/js/"
  },

  {
    name: "MongoDB",
    link: "https://www.w3schools.com/mongodb/"
  }

];

export default About;