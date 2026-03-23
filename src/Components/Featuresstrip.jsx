import React from "react";

const Featuresstrip = () => {
  return (
    <>
      <section style={{ padding: "60px 5%" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
          }}>
          {offers.map((o) => (
            <div
              key={o.title}
              className="card-hover"
              style={{
                background: "rgba(201,168,76,0.04)",
                border: "1px solid rgba(201,168,76,0.15)",
                borderRadius: "4px",
                padding: "28px 24px",
                textAlign: "center",
              }}>
              <div style={{ fontSize: "36px", marginBottom: "12px" }}>
                {o.icon}
              </div>
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                  color: "#c9a84c",
                  marginBottom: "6px",
                }}>
                {o.title}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "rgba(245,230,200,0.6)",
                  fontFamily: "'Cormorant Garamond', serif",
                }}>
                {o.desc}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Featuresstrip;
