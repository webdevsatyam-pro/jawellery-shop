import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = (field) =>
    `w-full bg-transparent border-b-2 py-3 px-1 text-[#2c2416] placeholder-[#b09c7e] outline-none transition-all duration-300 text-sm tracking-wide ${
      focused === field ? "border-[#c9a84c]" : "border-[#d6c9b0]"
    }`;
  return (
    <>
      <div
        className="min-h-screen font-serif"
        style={{
          background:
            "linear-gradient(135deg, #faf7f2 0%, #f3ede3 50%, #ede4d5 100%)",
          fontFamily: "'Georgia', 'Times New Roman', serif",
        }}>
        {/* Decorative top border */}
        <div
          className="h-1 w-full"
          style={{
            background: "linear-gradient(90deg, #c9a84c, #e8d5a3, #c9a84c)",
          }}
        />

        {/* Header */}
        <header className="text-center pt-16 pb-10 px-4">
          <p className="text-xs tracking-[0.4em] text-[#c9a84c] uppercase mb-3">
            ✦ Luxe Jewels ✦
          </p>
          <h1
            className="text-4xl md:text-5xl text-[#2c2416] mb-4"
            style={{ fontWeight: 300, letterSpacing: "0.05em" }}>
            Humse Sampark Karein
          </h1>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-px w-16" style={{ background: "#c9a84c" }} />
            <span className="text-[#c9a84c] text-lg">◆</span>
            <div className="h-px w-16" style={{ background: "#c9a84c" }} />
          </div>
          <p className="mt-5 text-[#7a6a52] text-sm tracking-widest max-w-md mx-auto leading-relaxed">
            Aapke sawaalon ka jawaab dena hamare liye khushi ki baat hai
          </p>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left Info Panel */}
            <div className="lg:col-span-2 space-y-10">
              {/* Store Info Cards */}
              {[
                {
                  icon: "📍",
                  title: "Hamara Pata",
                  lines: ["Dashashwamedh Ghat Road,", "Varanasi, UP — 221001"],
                },
                {
                  icon: "📞",
                  title: "Phone",
                  lines: ["+91 98765 43210", "+91 87654 32109"],
                },
                {
                  icon: "✉️",
                  title: "Email",
                  lines: ["info@luxejewels.in", "orders@luxejewels.in"],
                },
                {
                  icon: "⏰",
                  title: "Dukaan ka Samay",
                  lines: [
                    "Somvar – Shanivar: 10am – 8pm",
                    "Ravivar: 11am – 6pm",
                  ],
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-5">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-lg"
                    style={{
                      background: "#f8f2e8",
                      border: "1px solid #d6c9b0",
                    }}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xs tracking-[0.3em] uppercase text-[#c9a84c] mb-2">
                      {item.title}
                    </h3>
                    {item.lines.map((line, i) => (
                      <p
                        key={i}
                        className="text-[#2c2416] text-sm leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Social Links */}
              <div>
                <h3 className="text-xs tracking-[0.3em] uppercase text-[#c9a84c] mb-4">
                  Social Media
                </h3>
                <div className="flex gap-3">
                  {["Instagram", "Facebook", "WhatsApp"].map((s) => (
                    <button
                      key={s}
                      className="px-4 py-2 text-xs tracking-widest text-[#7a6a52] transition-all duration-300 hover:text-[#c9a84c]"
                      style={{
                        border: "1px solid #d6c9b0",
                        borderRadius: "2px",
                      }}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Form Panel */}
            <div className="lg:col-span-3">
              <div
                className="p-8 md:p-12"
                style={{
                  background: "rgba(255,255,255,0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid #dfd2bc",
                  borderRadius: "2px",
                  boxShadow: "0 4px 40px rgba(44,36,22,0.06)",
                }}>
                {submitted ? (
                  <div className="text-center py-16 space-y-6">
                    <div className="text-5xl">💌</div>
                    <div className="flex items-center justify-center gap-3">
                      <div
                        className="h-px w-12"
                        style={{ background: "#c9a84c" }}
                      />
                      <span className="text-[#c9a84c] text-sm">✦</span>
                      <div
                        className="h-px w-12"
                        style={{ background: "#c9a84c" }}
                      />
                    </div>
                    <h2
                      className="text-2xl text-[#2c2416]"
                      style={{ fontWeight: 300, letterSpacing: "0.05em" }}>
                      Shukriya, {formData.name}!
                    </h2>
                    <p className="text-[#7a6a52] text-sm tracking-wide">
                      Aapka sandesh humein mil gaya. Hum 24 ghante mein jawab
                      denge.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          subject: "",
                          message: "",
                        });
                      }}
                      className="text-xs tracking-[0.3em] uppercase text-[#c9a84c] hover:text-[#a8872e] transition-colors duration-300 border-b border-[#c9a84c] pb-1">
                      Wapas Jayen
                    </button>
                  </div>
                ) : (
                  <>
                    <h2
                      className="text-2xl text-[#2c2416] mb-1"
                      style={{ fontWeight: 300, letterSpacing: "0.05em" }}>
                      Sandesh Bhejein
                    </h2>
                    <p className="text-xs text-[#b09c7e] tracking-widest mb-10 uppercase">
                      Hum aapse milne ke liye uttejit hain
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-8">
                      {/* Name & Phone Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <label className="block text-xs tracking-[0.25em] text-[#b09c7e] uppercase mb-2">
                            Aapka Naam *
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => setFocused("name")}
                            onBlur={() => setFocused("")}
                            placeholder="Poora naam likhein"
                            className={inputClass("name")}
                          />
                        </div>
                        <div>
                          <label className="block text-xs tracking-[0.25em] text-[#b09c7e] uppercase mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            onFocus={() => setFocused("phone")}
                            onBlur={() => setFocused("")}
                            placeholder="+91 00000 00000"
                            className={inputClass("phone")}
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs tracking-[0.25em] text-[#b09c7e] uppercase mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocused("email")}
                          onBlur={() => setFocused("")}
                          placeholder="aapka@email.com"
                          className={inputClass("email")}
                        />
                      </div>

                      {/* Subject Dropdown */}
                      <div>
                        <label className="block text-xs tracking-[0.25em] text-[#b09c7e] uppercase mb-2">
                          Vishay *
                        </label>
                        <select
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          onFocus={() => setFocused("subject")}
                          onBlur={() => setFocused("")}
                          className={inputClass("subject")}
                          style={{ cursor: "pointer" }}>
                          <option value="">Vishay chunein...</option>
                          <option value="product">Product Enquiry</option>
                          <option value="custom">Custom Jewellery Order</option>
                          <option value="repair">Repair & Polish</option>
                          <option value="delivery">
                            Delivery / Order Status
                          </option>
                          <option value="other">Kuch aur</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs tracking-[0.25em] text-[#b09c7e] uppercase mb-2">
                          Aapka Sandesh *
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocused("message")}
                          onBlur={() => setFocused("")}
                          placeholder="Apni baat yahan likhein..."
                          className={inputClass("message")}
                          style={{ resize: "none", display: "block" }}
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="pt-4">
                        <button
                          type="submit"
                          className="group relative w-full py-4 text-xs tracking-[0.4em] uppercase overflow-hidden transition-all duration-500"
                          style={{
                            background: "#2c2416",
                            color: "#e8d5a3",
                            border: "none",
                            letterSpacing: "0.3em",
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.background = "#c9a84c";
                            e.target.style.color = "#2c2416";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.background = "#2c2416";
                            e.target.style.color = "#e8d5a3";
                          }}>
                          Sandesh Bhejein ◆
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1" style={{ background: "#d6c9b0" }} />
              <p className="text-xs tracking-[0.3em] uppercase text-[#b09c7e]">
                Hamein Dhundhein
              </p>
              <div className="h-px flex-1" style={{ background: "#d6c9b0" }} />
            </div>
            <div
              className="w-full h-56 flex flex-col items-center justify-center gap-3"
              style={{
                background: "#f0e8d8",
                border: "1px solid #d6c9b0",
                borderRadius: "2px",
              }}>
              <span className="text-4xl">🗺️</span>
              <p className="text-xs tracking-widest text-[#b09c7e] uppercase">
                Dashashwamedh Ghat Road, Varanasi
              </p>
              <button
                className="text-xs text-[#c9a84c] tracking-widest underline underline-offset-4 hover:text-[#a8872e] transition-colors"
                onClick={() =>
                  window.open(
                    "https://maps.google.com/?q=Dashashwamedh+Ghat+Varanasi",
                    "_blank",
                  )
                }>
                Google Maps mein kholein →
              </button>
            </div>
          </div>
        </main>

        {/* Footer Divider */}
        <div
          className="h-1 w-full"
          style={{
            background: "linear-gradient(90deg, #c9a84c, #e8d5a3, #c9a84c)",
          }}
        />
      </div>
    </>
  );
};

export default Contact;
