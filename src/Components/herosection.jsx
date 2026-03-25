import React from "react";

const HeroSection = () => {
  return (
    <>
      <section
        style={{
          position: "relative",
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          padding: "60px 5%",
        }}>
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 70% 50%, rgba(201,168,76,0.12) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(201,168,76,0.07) 0%, transparent 50%)",
          }}
        />

        {/* Sparkle dots */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="sparkle"
            style={{
              position: "absolute",
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              background: "#c9a84c",
              top: `${15 + i * 12}%`,
              left: `${5 + i * 8}%`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
            width: "100%",
          }}>
          {/* Left: Text Content */}
          <div>
            <div
              className="hero-animate"
              style={{
                display: "inline-block",
                border: "1px solid rgba(201,168,76,0.4)",
                padding: "6px 16px",
                fontSize: "12px",
                letterSpacing: "4px",
                color: "#c9a84c",
                marginBottom: "24px",
                fontFamily: "'Cormorant Garamond', serif",
              }}>
              ✦ NEW COLLECTION 2025 ✦
            </div>

            <h1
              className="hero-animate-2"
              style={{
                fontSize: "clamp(36px, 5vw, 64px)",
                lineHeight: "1.15",
                marginBottom: "24px",
              }}>
              Har Gehne Mein{" "}
              <span className="gold-text" style={{ fontStyle: "italic" }}>
                Ek Kahani
              </span>
              <br />
              Tanishaq Ka <span style={{ color: "#c9a84c" }}>Vaada</span>
            </h1>

            <p
              className="hero-animate-3"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "18px",
                lineHeight: "1.8",
                color: "rgba(245,230,200,0.75)",
                marginBottom: "40px",
                fontWeight: "300",
              }}>
              Shuddh sone aur heere se bane gehne jo aapki khaas moments ko aur
              bhi khaas banate hain. Traditions aur modernity ka anokha sangam.
            </p>

            {/* Buttons */}
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <button
                className="btn-gold"
                style={{
                  padding: "16px 40px",
                  fontSize: "14px",
                  borderRadius: "2px",
                  letterSpacing: "2px",
                  fontFamily: "'Playfair Display', serif",
                }}>
                COLLECTIONS DEKHEIN
              </button>
              <button
                style={{
                  padding: "16px 32px",
                  background: "transparent",
                  border: "1px solid rgba(201,168,76,0.5)",
                  color: "#c9a84c",
                  fontSize: "14px",
                  letterSpacing: "2px",
                  borderRadius: "2px",
                  cursor: "pointer",
                  fontFamily: "'Playfair Display', serif",
                  transition: "all 0.3s",
                }}
                onMouseOver={(e) =>
                  (e.target.style.background = "rgba(201,168,76,0.1)")
                }
                onMouseOut={(e) => (e.target.style.background = "transparent")}>
                ▶ VIDEO DEKHEIN
              </button>
            </div>

            {/* Stats */}
            <div
              style={{
                display: "flex",
                gap: "40px",
                marginTop: "56px",
                paddingTop: "40px",
                borderTop: "1px solid rgba(201,168,76,0.2)",
              }}>
              {[
                { num: "25+", label: "Saal ka Tajurba" },
                { num: "50K+", label: "Khush Grahak" },
                { num: "5000+", label: "Unique Designs" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="gold-text"
                    style={{ fontSize: "32px", fontWeight: "700" }}>
                    {stat.num}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "rgba(245,230,200,0.6)",
                      letterSpacing: "1px",
                      fontFamily: "'Cormorant Garamond', serif",
                    }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Floating Image */}
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}>
            {/* Glow circle */}
            <div
              style={{
                position: "absolute",
                width: "400px",
                height: "400px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />

            {/* Image */}
            <div
              className="float-img"
              style={{
                position: "relative",
                width: "380px",
                height: "480px",
                borderRadius: "200px 200px 0 0",
                overflow: "hidden",
                border: "2px solid rgba(201,168,76,0.3)",
                boxShadow:
                  "0 30px 80px rgba(201,168,76,0.2), inset 0 0 60px rgba(201,168,76,0.05)",
              }}>
              <img
                src="https://i.pinimg.com/736x/02/2a/fc/022afca81f24dffce05974f2310fc08f.jpg"
                alt="Tanishaq Jewellery"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to bottom, transparent 50%, rgba(10,6,3,0.5) 100%)",
                }}
              />
            </div>

            {/* Floating badge */}
            <div
              style={{
                position: "absolute",
                bottom: "40px",
                right: "-10px",
                background: "rgba(10,6,3,0.95)",
                border: "1px solid rgba(201,168,76,0.5)",
                borderRadius: "4px",
                padding: "16px 20px",
                backdropFilter: "blur(12px)",
              }}>
              <div
                className="gold-text"
                style={{ fontSize: "22px", fontWeight: "700" }}>
                BIS ✦
              </div>
              <div
                style={{
                  fontSize: "11px",
                  letterSpacing: "2px",
                  color: "rgba(245,230,200,0.7)",
                }}>
                HALLMARK CERTIFIED
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
