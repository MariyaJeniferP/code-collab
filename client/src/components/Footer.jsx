import React from "react";
import { Link } from "react-router-dom";

function Footer() {

  return (

    <footer style={{

      background: "#0f172a",
      color: "white",

      padding: "60px 40px",

      marginTop: "80px"

    }}>

      <div style={{

        display: "grid",

        gridTemplateColumns:
          "repeat(auto-fit, minmax(220px, 1fr))",

        gap: "40px",

        maxWidth: "1200px",
        margin: "0 auto"

      }}>

        {/* Logo + Description */}

        <div>

          <h2 style={{
            marginBottom: "15px",
            fontSize: "26px"
          }}>
            Code-Collab ⚡
          </h2>

          <p style={{
            color: "#cbd5e1",
            lineHeight: "1.6"
          }}>
            Code-Collab is a real-time coding
            collaboration platform that allows
            developers to write, share, and
            execute code together from anywhere.
          </p>

        </div>

        {/* Quick Links */}

        <div>

          <h3 style={{
            marginBottom: "15px"
          }}>
            Quick Links
          </h3>

          <p>
            <Link to="/" style={{
              color: "#cbd5e1",
              textDecoration: "none"
            }}>
              Home
            </Link>
          </p>

          <p>
            <Link to="/about" style={{
              color: "#cbd5e1",
              textDecoration: "none"
            }}>
              About
            </Link>
          </p>

          <p>
            <Link to="/contact" style={{
              color: "#cbd5e1",
              textDecoration: "none"
            }}>
              Contact
            </Link>
          </p>

        </div>

        {/* Features Links */}

        <div>

          <h3 style={{
            marginBottom: "15px"
          }}>
            Features
          </h3>

          <p style={{color:"#cbd5e1"}}>
            Real-Time Collaboration
          </p>

          <p style={{color:"#cbd5e1"}}>
            Multi-User Rooms
          </p>

          <p style={{color:"#cbd5e1"}}>
            Secure Authentication
          </p>

          <p style={{color:"#cbd5e1"}}>
            Cloud Storage
          </p>

        </div>

        {/* Contact Info */}

        <div>

          <h3 style={{
            marginBottom: "15px"
          }}>
            Contact
          </h3>

          <p style={{color:"#cbd5e1"}}>
            📧 Email:
            jeraldjenifer20@gmail.com
          </p>

          <p style={{color:"#cbd5e1"}}>
            🌐 GitHub:
            github.com/jenifer3006
          </p>

          <p style={{color:"#cbd5e1"}}>
            📍 Location:
            India
          </p>

        </div>

      </div>

      {/* Social Icons */}

      <div style={{

        textAlign: "center",

        marginTop: "40px"

      }}>

        <span style={{
          marginRight: "15px",
          fontSize: "22px",
          cursor: "pointer"
        }}>
          🔗
        </span>

        <span style={{
          marginRight: "15px",
          fontSize: "22px",
          cursor: "pointer"
        }}>
          🐱
        </span>

        <span style={{
          fontSize: "22px",
          cursor: "pointer"
        }}>
          💼
        </span>

      </div>

      {/* Bottom Line */}

      <div style={{

        textAlign: "center",

        marginTop: "30px",

        borderTop: "1px solid #334155",

        paddingTop: "20px",

        color: "#94a3b8"

      }}>

        © 2026 Code-Collab.
        All rights reserved.

      </div>

    </footer>

  );

}

export default Footer;