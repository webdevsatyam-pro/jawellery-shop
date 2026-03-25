import React, { useEffect, useState } from "react";
import { navLinks } from "./data";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: scrolled ? "rgba(10,6,3,0.97)" : "rgba(10,6,3,0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: scrolled
            ? "1px solid rgba(201,168,76,0.3)"
            : "1px solid transparent",
          transition: "all 0.3s ease",
          padding: "0 5%",
        }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "72px",
          }}>
          {/* Logo */}
          <div
            style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span
              className="gold-text"
              style={{
                fontSize: "28px",
                fontWeight: "700",
                letterSpacing: "3px",
              }}>
              TANISHAQ
            </span>
            <span
              style={{
                fontSize: "10px",
                letterSpacing: "5px",
                color: "#c9a84c",
                opacity: 0.8,
                fontFamily: "'Cormorant Garamond', serif",
                textTransform: "uppercase",
              }}>
              Fine Jewellery
            </span>
          </div>

          {/* Nav Links */}
          <div
            style={{
              display: "flex",
              gap: "32px",
              fontSize: "14px",
              letterSpacing: "1px",
            }}>
            {navLinks.map((link) => (
              <span
                key={link}
                className="nav-link"
                style={{
                  color: "#f5e6c8",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "15px",
                }}>
                {link}
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <button
            className="btn-gold"
            style={{
              padding: "10px 24px",
              borderRadius: "2px",
              fontSize: "13px",
              letterSpacing: "2px",
              fontFamily: "'Playfair Display', serif",
            }}>
            BOOK VISIT
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
