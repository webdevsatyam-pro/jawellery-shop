import React, { useEffect, useState } from "react";

const Testimonials = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((p) => (p + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <section style={{ padding: "80px 5%", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "12px",
              letterSpacing: "5px",
              color: "#c9a84c",
              marginBottom: "12px",
              fontFamily: "'Cormorant Garamond', serif",
            }}>
            ✦ HAMARE GRAHAK ✦
          </p>
          <h2 style={{ fontSize: "36px", marginBottom: "48px" }}>
            Woh Kehte Hain{" "}
            <span className="gold-text" style={{ fontStyle: "italic" }}>
              Tanishaq
            </span>
          </h2>

          {/* Review Card */}
          <div
            style={{
              background: "rgba(201,168,76,0.05)",
              border: "1px solid rgba(201,168,76,0.2)",
              borderRadius: "8px",
              padding: "40px",
              position: "relative",
              minHeight: "200px",
            }}>
            <div
              style={{
                fontSize: "60px",
                color: "rgba(201,168,76,0.2)",
                lineHeight: 1,
                marginBottom: "16px",
              }}>
              "
            </div>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "20px",
                lineHeight: "1.8",
                color: "rgba(245,230,200,0.9)",
                marginBottom: "24px",
                fontStyle: "italic",
              }}>
              {testimonials[active].text}
            </p>
            <div
              style={{
                color: "#c9a84c",
                fontSize: "20px",
                marginBottom: "8px",
              }}>
              {"★".repeat(testimonials[active].stars)}
            </div>
            <div style={{ fontWeight: "600", marginBottom: "4px" }}>
              {testimonials[active].name}
            </div>
            <div
              style={{
                fontSize: "13px",
                color: "rgba(245,230,200,0.5)",
                fontFamily: "'Cormorant Garamond', serif",
              }}>
              {testimonials[active].city}
            </div>
          </div>

          {/* Dot Navigation */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              marginTop: "24px",
            }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  width: i === active ? "24px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  background: i === active ? "#c9a84c" : "rgba(201,168,76,0.3)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
