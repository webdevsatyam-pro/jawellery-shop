import React from "react";
import { collections } from "./data";

const Collectionsgrid = () => {
  return (
    <>
      <section style={{ padding: "80px 5%" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Section Header */}
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <p
              style={{
                fontSize: "12px",
                letterSpacing: "5px",
                color: "#c9a84c",
                marginBottom: "12px",
                fontFamily: "'Cormorant Garamond', serif",
              }}>
              ✦ HAMARI COLLECTIONS ✦
            </p>
            <h2
              style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: "1.2" }}>
              Khaas Moments Ke Liye{" "}
              <span className="gold-text" style={{ fontStyle: "italic" }}>
                Khaas Gehne
              </span>
            </h2>
          </div>

          {/* Cards Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "24px",
            }}>
            {collections.map((col) => (
              <div
                key={col.name}
                className="card-hover"
                style={{
                  position: "relative",
                  borderRadius: "4px",
                  overflow: "hidden",
                  cursor: "pointer",
                  border: "1px solid rgba(201,168,76,0.15)",
                }}>
                {/* Image */}
                <div style={{ position: "relative", height: "280px" }}>
                  <img
                    src={col.img}
                    alt={col.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to bottom, transparent 40%, rgba(10,6,3,0.85) 100%)",
                    }}
                  />
                  {/* Tag Badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: "12px",
                      right: "12px",
                      background: "linear-gradient(135deg, #b8921e, #e8c44a)",
                      color: "#0a0603",
                      fontSize: "10px",
                      fontWeight: "700",
                      padding: "4px 10px",
                      borderRadius: "2px",
                      letterSpacing: "1px",
                    }}>
                    {col.tag}
                  </div>
                </div>

                {/* Card Info */}
                <div
                  style={{ padding: "20px", background: "rgba(15,10,5,0.95)" }}>
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      marginBottom: "6px",
                    }}>
                    {col.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "rgba(245,230,200,0.6)",
                      fontFamily: "'Cormorant Garamond', serif",
                      marginBottom: "16px",
                    }}>
                    {col.desc}
                  </p>
                  <span
                    style={{
                      fontSize: "13px",
                      color: "#c9a84c",
                      letterSpacing: "1px",
                    }}>
                    Dekho →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Collectionsgrid;
