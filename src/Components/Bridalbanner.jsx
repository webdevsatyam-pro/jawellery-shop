import React from "react";

const Bridalbanner = () => {
  return (
    <>
      <section
        style={{
          margin: "0 5% 80px",
          borderRadius: "8px",
          overflow: "hidden",
        }}>
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(201,168,76,0.15) 0%, rgba(184,146,30,0.08) 50%, rgba(201,168,76,0.12) 100%)",
            border: "1px solid rgba(201,168,76,0.3)",
            borderRadius: "8px",
            padding: "64px 5%",
            textAlign: "center",
            position: "relative",
          }}>
          {/* Diagonal pattern overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "8px",
              backgroundImage:
                "repeating-linear-gradient(45deg, rgba(201,168,76,0.03) 0px, rgba(201,168,76,0.03) 1px, transparent 1px, transparent 12px)",
            }}
          />

          <p
            style={{
              fontSize: "12px",
              letterSpacing: "5px",
              color: "#c9a84c",
              marginBottom: "16px",
              fontFamily: "'Cormorant Garamond', serif",
              position: "relative",
            }}>
            ✦ BRIDAL SPECIAL ✦
          </p>

          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 44px)",
              marginBottom: "16px",
              position: "relative",
            }}>
            Aapki{" "}
            <span className="gold-text" style={{ fontStyle: "italic" }}>
              Shaadi
            </span>{" "}
            Ko Banaiye Aur Khaas
          </h2>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "18px",
              color: "rgba(245,230,200,0.7)",
              maxWidth: "500px",
              margin: "0 auto 40px",
              position: "relative",
            }}>
            Hamare bridal experts se miliye aur apna dream jewellery set
            banwaiye
          </p>

          <button
            className="btn-gold"
            style={{
              padding: "18px 48px",
              fontSize: "14px",
              borderRadius: "2px",
              letterSpacing: "3px",
              fontFamily: "'Playfair Display', serif",
              position: "relative",
            }}>
            APPOINTMENT LEIN
          </button>
        </div>
      </section>
    </>
  );
};

export default Bridalbanner;
