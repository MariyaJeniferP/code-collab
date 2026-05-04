import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PageWrapper from "./PageWrapper";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isAboutPage = location.pathname === "/about";
  const isContactPage = location.pathname === "/contact";

  const pulseStyle = `
    @keyframes pulse {
      0% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.25); opacity: 0.7; }
      100% { transform: scale(1); opacity: 1; }
    }
  `;

  const navBg = isAboutPage
    ? "linear-gradient(135deg, #065f46, #10b981)"
    : isContactPage
    ? "linear-gradient(135deg, #94a3b8, #64748b)"
    : "linear-gradient(90deg, #4f46e5, #06b6d4)";

  return (
    <>
      <style>{pulseStyle}</style>
      <nav style={{ background: navBg, padding: "15px 0", position: "relative" }}>
        <PageWrapper>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          
            <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  background: "linear-gradient(135deg, #9333ea, #22d3ee)",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "12px",
                  fontSize: "18px",
                  fontWeight: "700",
                  marginRight: "12px",
                  position: "relative",
                  fontFamily: "Poppins",
                  
                }}
              >
                CC
                <span
                  style={{
                    position: "absolute",
                    top: "-7px",
                    right: "-6px",
                    fontSize: "18px",
                    animation: "pulse 1.5s infinite",
                    
                  }}
                >
                  ⚡
                </span>
              </div>
              <span
                style={{
                  fontSize: "30px",
                  fontWeight: "700",
                  color: "white",
                  letterSpacing: "1px",
                  fontFamily: "Poppins",
                }}
              >
                CodeCollab
              </span>
            </div>

            {/* Desktop Links */}
            <div className="nav-links-desktop">
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
              <Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link>
              <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link>
              <Link to="/signin" style={{ color: "white", textDecoration: "none" }}>Signin</Link>
              <Link to="/signup" style={{ color: "white", textDecoration: "none" }}>Signup</Link>
              <Link to="/live" style={{ color: "white", textDecoration: "none" }}>Live</Link>
            </div>

            {/* Hamburger */}
            <div
              className={`hamburger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </PageWrapper>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              position: "absolute",
              top: "100%",
              left: 0,
              width: "100%",
              background: navBg,
              padding: "20px",
              zIndex: 1000,
            }}
          >
            <Link to="/" style={{ color: "white", textDecoration: "none" }} onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" style={{ color: "white", textDecoration: "none" }} onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/contact" style={{ color: "white", textDecoration: "none" }} onClick={() => setMenuOpen(false)}>Contact</Link>
            <Link to="/signin" style={{ color: "white", textDecoration: "none" }} onClick={() => setMenuOpen(false)}>Signin</Link>
            <Link to="/signup" style={{ color: "white", textDecoration: "none" }} onClick={() => setMenuOpen(false)}>Signup</Link>
            <Link to="/live" style={{ color: "white", textDecoration: "none" }} onClick={() => setMenuOpen(false)}>Live</Link>
          </div>
        )}

        {/* Responsive Styles */}
        <style>{`
          .nav-links-desktop {
            display: flex !important;
            gap: 20px;
          }
          .hamburger {
            display: none;
            flex-direction: column;
            cursor: pointer;
            gap: 8px;
          }
          .hamburger span {
            width: 30px;
            height: 4px;
            background: white;
            border-radius: 2px;
            transition: 0.3s;
          }
          @media (max-width: 768px) {
            .nav-links-desktop {
              display: none !important;
            }
            .hamburger {
              display: flex !important;
            }
          }
            .hamburger.open span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.hamburger.open span:nth-child(2) {
  opacity: 0;
}
.hamburger.open span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}
        `}</style>
      </nav>
    </>
  );
}

export default Navbar;