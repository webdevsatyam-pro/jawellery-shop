import { useState, useRef, useEffect } from "react";

const NAV_LINKS = [
  "Gold",
  "Diamond",
  "Platinum",
  "Silver",
  "Solitaires",
  "Coins & Bars",
  "Wedding",
  "Collections",
  "Gifting",
  "Offers",
];

function SearchIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
function GridIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}
function MicIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8">
      <rect x="9" y="2" width="6" height="13" rx="3" />
      <path d="M5 10a7 7 0 0 0 14 0" />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="9" y1="22" x2="15" y2="22" />
    </svg>
  );
}
function StarIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
function HomeIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}
function HeartIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
function UserIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
function BagIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}
function GiftIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7">
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect x="2" y="7" width="20" height="5" />
      <line x1="12" y1="22" x2="12" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  );
}
function ChatIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
function MenuIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}
function CloseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// Profile Dropdown
function ProfileDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const timerRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timerRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    // Small delay so mouse can travel from button to dropdown without it closing
    timerRef.current = setTimeout(() => setOpen(false), 80);
  };

  useEffect(() => () => clearTimeout(timerRef.current), []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {/* Icon Button */}
      <button
        className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-red-50 transition-colors duration-200"
        style={{ color: "#8B1A2E" }}
        aria-label="Account">
        <UserIcon />
      </button>

      {/* Invisible bridge — fills the gap between button and dropdown so hover is seamless */}
      <div
        className="absolute right-0 top-full w-full h-2"
        style={{ zIndex: 49 }}
      />

      {/* Dropdown */}
      <div
        className={`absolute right-0 w-52 bg-white rounded-xl border border-gray-100 overflow-hidden transition-all duration-200 z-50 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        style={{
          top: "calc(100% + 8px)",
          boxShadow: "0 8px 32px rgba(139,26,46,0.13)",
        }}>
        {/* Login / Signup */}
        <a
          href="#"
          className="flex items-center gap-3 px-5 py-4 transition-colors duration-150 border-b border-gray-100"
          style={{ color: "#2a2a2a", textDecoration: "none" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#fef2f2")}
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "transparent")
          }>
          <span style={{ color: "#8B1A2E" }}>
            <GiftIcon />
          </span>
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "16px",
              fontWeight: 600,
              letterSpacing: "0.3px",
            }}>
            Log in / Sign up
          </span>
        </a>

        {/* Contact Us */}
        <a
          href="#"
          className="flex items-center gap-3 px-5 py-4 transition-colors duration-150"
          style={{ color: "#2a2a2a", textDecoration: "none" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#fef2f2")}
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "transparent")
          }>
          <span style={{ color: "#8B1A2E" }}>
            <ChatIcon />
          </span>
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "16px",
              fontWeight: 600,
              letterSpacing: "0.3px",
            }}>
            Contact Us
          </span>
        </a>
      </div>
    </div>
  );
}

// Mobile Drawer
function MobileDrawer({ open, onClose }) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 ${open ? "opacity-40 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />
      {/* Panel */}
      <div
        className={`fixed top-0 left-0 bottom-0 z-50 w-64 bg-white shadow-2xl flex flex-col transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "22px",
              fontWeight: 700,
              color: "#8B1A2E",
              letterSpacing: "2px",
            }}>
            TANISHQ
          </span>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700">
            <CloseIcon />
          </button>
        </div>
        <nav className="flex flex-col overflow-y-auto">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="px-6 py-4 border-b border-gray-50 text-sm font-medium tracking-widest uppercase hover:pl-9 transition-all duration-200"
              style={{
                color: "#2a2a2a",
                fontFamily: "'Montserrat', sans-serif",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#8B1A2E")}
              onMouseLeave={(e) => (e.target.style.color = "#2a2a2a")}>
              {link}
            </a>
          ))}
        </nav>
        <div className="mt-auto px-6 py-6 border-t border-gray-100 flex flex-col gap-3">
          <a
            href="#"
            className="flex items-center gap-3"
            style={{
              color: "#8B1A2E",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "15px",
              fontWeight: 600,
            }}>
            <GiftIcon /> Log in / Sign up
          </a>
          <a
            href="#"
            className="flex items-center gap-3"
            style={{
              color: "#8B1A2E",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "15px",
              fontWeight: 600,
            }}>
            <ChatIcon /> Contact Us
          </a>
        </div>
      </div>
    </>
  );
}

export default function TanishqNavbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Gold");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Montserrat:wght@300;400;500&display=swap');
        .menu-link-underline { position: relative; }
        .menu-link-underline::after {
          content: '';
          position: absolute;
          bottom: 0; left: 12px; right: 12px;
          height: 2px;
          background: #8B1A2E;
          transform: scaleX(0);
          transition: transform 0.25s;
        }
        .menu-link-underline:hover::after,
        .menu-link-underline.active::after { transform: scaleX(1); }
      `}</style>

      <div className="sticky top-0 z-30">
        {/* TOP STRIP */}
        <div
          className="text-center text-white text-xs tracking-widest py-2 px-4"
          style={{
            background: "#8B1A2E",
            fontFamily: "'Montserrat', sans-serif",
          }}>
          FREE SHIPPING ON ORDERS ABOVE ₹5,000 &nbsp;|&nbsp; VISIT YOUR NEAREST
          STORE
        </div>

        {/* MAIN NAV */}
        <nav
          className="flex items-center  gap-3 px-6 h-16 border-b"
          style={{ background: "#FAFAF8", borderColor: "#e8e0d5" }}>
          {/* Hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full hover:bg-red-50 transition-colors"
            style={{ color: "#8B1A2E" }}
            onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </button>

          {/* LOGO */}
          <a
            href="#"
            className="flex flex-col items-center flex-shrink-0 mr-2"
            style={{ textDecoration: "none" }}>
            <svg width="26" height="20" viewBox="0 0 40 32" fill="none">
              <rect x="18" y="0" width="4" height="32" rx="2" fill="#8B1A2E" />
              <rect x="0" y="14" width="40" height="4" rx="2" fill="#8B1A2E" />
              <circle cx="20" cy="16" r="4" fill="#8B1A2E" />
            </svg>
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "20px",
                fontWeight: 700,
                color: "#8B1A2E",
                letterSpacing: "2px",
                lineHeight: 1,
              }}>
              TANISHQ
            </span>
          </a>

          {/* SEARCH */}
          <div className="flex-1 max-w-xl mx-auto relative flex items-center">
            <span className="absolute left-3.5 text-gray-400 pointer-events-none">
              <SearchIcon />
            </span>
            <input
              type="text"
              placeholder="Search for diamond jewellery"
              className="w-full pl-10 pr-20 py-2.5 rounded-full text-sm outline-none transition-all duration-200"
              style={{
                border: "1.5px solid #e8e0d5",
                fontFamily: "'Montserrat', sans-serif",
                background: "#fff",
                letterSpacing: "0.3px",
                color: "#2a2a2a",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#8B1A2E";
                e.target.style.boxShadow = "0 0 0 3px rgba(139,26,46,0.08)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e8e0d5";
                e.target.style.boxShadow = "none";
              }}
            />
            <div className="absolute right-3.5 flex items-center gap-2">
              <button className="text-gray-400 hover:text-red-800 transition-colors">
                <GridIcon />
              </button>
              <div style={{ width: 1, height: 16, background: "#e8e0d5" }} />
              <button className="text-gray-400 hover:text-red-800 transition-colors">
                <MicIcon />
              </button>
            </div>
          </div>

          {/* RIGHT ICONS */}
          <div className="flex items-center gap-0.5 ml-2">
            <button
              className="hidden md:flex items-center justify-center w-9 h-9 rounded-full hover:bg-red-50 transition-colors"
              style={{ color: "#8B1A2E" }}
              title="Jewellery Check">
              <StarIcon />
            </button>
            <button
              className="hidden md:flex items-center justify-center w-9 h-9 rounded-full hover:bg-red-50 transition-colors"
              style={{ color: "#8B1A2E" }}
              title="Store Locator">
              <HomeIcon />
            </button>
            <button
              className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-red-50 transition-colors"
              style={{ color: "#8B1A2E" }}
              title="Wishlist">
              <HeartIcon />
            </button>

            {/* PROFILE WITH DROPDOWN */}
            <ProfileDropdown />

            {/* CART */}
            <button
              className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-red-50 transition-colors relative"
              style={{ color: "#8B1A2E" }}
              title="Cart">
              <BagIcon />
              <span
                className="absolute top-1 right-1 flex items-center justify-center rounded-full text-white"
                style={{
                  width: 15,
                  height: 15,
                  fontSize: 9,
                  background: "#8B1A2E",
                  fontWeight: 700,
                  lineHeight: 1,
                }}>
                0
              </span>
            </button>
          </div>
        </nav>

        {/* CATEGORY MENU */}
        <div
          className="hidden md:flex items-center overflow-x-auto px-6 border-b"
          style={{ background: "#fff", borderColor: "#e8e0d5" }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              onClick={() => setActiveLink(link)}
              className={`menu-link-underline flex-shrink-0 px-3 py-3 text-xs font-medium tracking-widest uppercase transition-colors duration-200 ${activeLink === link ? "active" : ""}`}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                color: activeLink === link ? "#8B1A2E" : "#2a2a2a",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                if (activeLink !== link)
                  e.currentTarget.style.color = "#8B1A2E";
              }}
              onMouseLeave={(e) => {
                if (activeLink !== link)
                  e.currentTarget.style.color = "#2a2a2a";
              }}>
              {link}
            </a>
          ))}
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
