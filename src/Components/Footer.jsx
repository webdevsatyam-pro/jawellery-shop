import React from "react";

const Footer = () => {
  const footerCols = [
    {
      title: "Collections",
      links: [
        "Bridal Set",
        "Gold Necklace",
        "Diamond Ring",
        "Bangles",
        "Earrings",
      ],
    },
    {
      title: "Shop",
      links: ["New Arrivals", "Best Sellers", "Sale", "Gifts", "Custom Order"],
    },
    {
      title: "Help",
      links: [
        "Contact Us",
        "Track Order",
        "Return Policy",
        "Store Locator",
        "FAQ",
      ],
    },
  ];
  return (
    <>
      <footer
        style={{
          borderTop: "1px solid rgba(201,168,76,0.2)",
          padding: "60px 5% 40px",
        }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "48px",
            marginBottom: "48px",
          }}>
          {/* Brand Column */}
          <div>
            <div
              className="gold-text"
              style={{
                fontSize: "28px",
                fontWeight: "700",
                letterSpacing: "3px",
                marginBottom: "4px",
              }}>
              TANISHAQ
            </div>
            <div
              style={{
                fontSize: "10px",
                letterSpacing: "4px",
                color: "rgba(201,168,76,0.6)",
                marginBottom: "20px",
                fontFamily: "'Cormorant Garamond', serif",
              }}>
              FINE JEWELLERY
            </div>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "15px",
                color: "rgba(245,230,200,0.6)",
                lineHeight: "1.8",
                maxWidth: "280px",
              }}>
              25 saalon se trust ki woh dukaan jo aapke khaas moments ko aur
              khaas banati hai.
            </p>
          </div>

          {/* Link Columns */}
          {footerCols.map((col) => (
            <div key={col.title}>
              <h4
                style={{
                  color: "#c9a84c",
                  fontSize: "13px",
                  letterSpacing: "3px",
                  marginBottom: "20px",
                  fontFamily: "'Playfair Display', serif",
                }}>
                {col.title.toUpperCase()}
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}>
                {col.links.map((l) => (
                  <li
                    key={l}
                    style={{
                      fontSize: "14px",
                      color: "rgba(245,230,200,0.55)",
                      cursor: "pointer",
                      fontFamily: "'Cormorant Garamond', serif",
                      transition: "color 0.2s",
                    }}
                    onMouseOver={(e) => (e.target.style.color = "#c9a84c")}
                    onMouseOut={(e) =>
                      (e.target.style.color = "rgba(245,230,200,0.55)")
                    }>
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <hr className="divider-gold" />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "28px",
            fontSize: "13px",
            color: "rgba(245,230,200,0.4)",
            fontFamily: "'Cormorant Garamond', serif",
          }}>
          <span>© 2025 Tanishaq Fine Jewellery. Sabhi adhikar surakshit.</span>
          <span style={{ color: "rgba(201,168,76,0.6)" }}>
            Made with <span style={{ color: "#c9a84c" }}>✦</span> for khaas
            moments
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
