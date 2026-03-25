import React from "react";

const Topbar = () => {
  return (
    <>
      <div
        style={{
          background: "linear-gradient(90deg, #b8921e, #e8c44a, #b8921e)",
          backgroundSize: "200% auto",
          animation: "shimmer 4s linear infinite",
          textAlign: "center",
          padding: "8px 16px",
          fontSize: "13px",
          color: "#0a0603",
          fontWeight: "600",
          letterSpacing: "1px",
        }}>
        ✨ Free Home Delivery on orders above ₹5000 | BIS Hallmark Certified
        Gold ✨
      </div>
    </>
  );
};

export default Topbar;
