import React from "react";
import { useState, useEffect, useRef } from "react";

const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
};

const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
      }}>
      {children}
    </div>
  );
};

const Divider = () => (
  <div className="flex items-center justify-center gap-4 my-3">
    <div className="h-px w-16" style={{ background: "#c9a84c" }} />
    <span style={{ color: "#c9a84c", fontSize: 18 }}>◆</span>
    <div className="h-px w-16" style={{ background: "#c9a84c" }} />
  </div>
);

const stats = [
  { number: "1985", label: "Sthapana Varsh" },
  { number: "40+", label: "Saal Ka Anubhav" },
  { number: "15K+", label: "Khush Grahak" },
  { number: "3", label: "Peedhiyan" },
];

const values = [
  {
    icon: "💎",
    title: "Shuddhata",
    desc: "Har gehna BIS hallmark certified hai. Hum sirf shuddh sone aur chandi ka upyog karte hain.",
  },
  {
    icon: "✋",
    title: "Haath Ka Kaam",
    desc: "Hamare kaarigaron ne Varanasi ki paramparik kala ko saalon tak seekha hai.",
  },
  {
    icon: "♾️",
    title: "Virasat",
    desc: "Teen peedhiyon se parivaar ki parampara ko aage badhana humara sankalp hai.",
  },
  {
    icon: "🤝",
    title: "Vishwaas",
    desc: "Har gehne ke saath transparency, fair pricing aur lifetime service hamara vaada hai.",
  },
];

const team = [
  {
    initials: "RG",
    name: "Ramesh Gupta",
    role: "Sansthapak & Mukhya Kaarigar",
    years: "40+ saal ka anubhav",
  },
  {
    initials: "PG",
    name: "Priya Gupta",
    role: "Design Director",
    years: "15 saal ka anubhav",
  },
  {
    initials: "AG",
    name: "Arjun Gupta",
    role: "Grahak Seva & Operations",
    years: "10 saal ka anubhav",
  },
];

const timeline = [
  {
    year: "1985",
    event:
      "Varanasi ke Dashashwamedh Ghat par choti si dukaan kholke humne shuruat ki.",
  },
  {
    year: "1998",
    event:
      "Pahli baar BIS hallmark certification mili aur dukaan ka vistar hua.",
  },
  {
    year: "2008",
    event: "Doosri peedhi ne kaam sambhala aur modern designs ki shuruaat hui.",
  },
  {
    year: "2016",
    event: "Online presence shuru ki aur poore Bharat mein delivery dene lage.",
  },
  {
    year: "2024",
    event: "15,000 se zyada khush grahak aur nayi workshop ka udghaatan.",
  },
];

const About = () => {
  const [activeVal, setActiveVal] = useState(0);
  return (
    <>
      <div
        className="min-h-screen"
        style={{
          background:
            "linear-gradient(160deg, #faf7f2 0%, #f3ede3 60%, #ede4d5 100%)",
          fontFamily: "'Georgia', 'Times New Roman', serif",
          color: "#2c2416",
        }}>
        {/* Gold top border */}
        <div
          className="h-1 w-full"
          style={{
            background: "linear-gradient(90deg, #c9a84c, #e8d5a3, #c9a84c)",
          }}
        />

        {/* ── HERO ── */}
        <section className="relative text-center pt-20 pb-24 px-6 overflow-hidden">
          {/* Large decorative background text */}
          <div
            className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
            style={{
              fontSize: "clamp(80px,18vw,220px)",
              fontWeight: 700,
              color: "rgba(201,168,76,0.06)",
              lineHeight: 1,
            }}
            aria-hidden>
            LUXE
          </div>

          <div className="relative z-10">
            <p
              className="text-xs tracking-[0.45em] uppercase mb-4"
              style={{ color: "#c9a84c" }}>
              ✦ Hamari Kahani ✦
            </p>
            <h1
              className="text-4xl md:text-6xl mb-6"
              style={{
                fontWeight: 300,
                letterSpacing: "0.04em",
                lineHeight: 1.2,
              }}>
              Anubhav, Aastha
              <br />
              <em style={{ fontStyle: "italic", color: "#c9a84c" }}>
                aur Aabhooshan
              </em>
            </h1>
            <Divider />
            <p
              className="mt-6 max-w-xl mx-auto text-sm leading-8 tracking-wide"
              style={{ color: "#7a6a52" }}>
              1985 se Varanasi ki dharohar aur kala ko apne gehno mein pirote
              hue, Luxe Jewels har cheez ko ek yaadgaar anubhav banaata hai.
            </p>
          </div>
        </section>

        {/* ── STATS ── */}
        <FadeIn>
          <section className="max-w-4xl mx-auto px-6 pb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="text-center py-8 px-4"
                  style={{
                    background: "rgba(255,255,255,0.6)",
                    border: "1px solid #dfd2bc",
                    backdropFilter: "blur(8px)",
                  }}>
                  <p
                    className="text-3xl md:text-4xl mb-2"
                    style={{ color: "#c9a84c", fontWeight: 300 }}>
                    {s.number}
                  </p>
                  <p
                    className="text-xs tracking-widest uppercase"
                    style={{ color: "#b09c7e" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* ── STORY ── */}
        <section className="max-w-5xl mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Image placeholder */}
            <FadeIn delay={0.1}>
              <div className="relative">
                <div
                  className="w-full aspect-square flex flex-col items-center justify-center gap-4"
                  style={{
                    background: "linear-gradient(135deg, #f0e8d8, #e8d9c0)",
                    border: "1px solid #d6c9b0",
                  }}>
                  <span style={{ fontSize: 72 }}>🏛️</span>
                  <p
                    className="text-xs tracking-widest uppercase"
                    style={{ color: "#b09c7e" }}>
                    Hamari Dukaan — 1985
                  </p>
                </div>
                {/* Decorative offset box */}
                <div
                  className="absolute -bottom-4 -right-4 w-3/4 h-3/4 -z-10"
                  style={{ border: "2px solid #c9a84c", opacity: 0.35 }}
                />
              </div>
            </FadeIn>

            {/* Story text */}
            <FadeIn delay={0.2}>
              <div>
                <p
                  className="text-xs tracking-[0.35em] uppercase mb-3"
                  style={{ color: "#c9a84c" }}>
                  Hamaare Baare Mein
                </p>
                <h2
                  className="text-3xl mb-6"
                  style={{ fontWeight: 300, lineHeight: 1.4 }}>
                  Teen Peedhiyon Ki{" "}
                  <em style={{ color: "#c9a84c" }}>Prem Kahani</em>
                </h2>
                <div
                  className="space-y-4 text-sm leading-8"
                  style={{ color: "#5a4a35" }}>
                  <p>
                    Ramesh Gupta ne 1985 mein Varanasi ke pavitra Dashashwamedh
                    Ghat ke paas ek choti si dukaan kholke Luxe Jewels ki neev
                    rakhi. Unka sapna tha ki har insaan ko ek aisa gehna mile jo
                    sirf dhaat nahi, balki ek yaad ban jaye.
                  </p>
                  <p>
                    Aaj unki beti Priya aur beta Arjun is virasat ko nayi
                    oochain par le ja rahe hain. Paramparik Varanasi kala ko
                    modern design ke saath milaakar hum aisa jewellery banate
                    hain jo dil ko chhu le.
                  </p>
                  <p>
                    Har gehna hamare kaarigar ke haathon se guzarkar aata hai —
                    ek ek nag, ek ek design mein unka dil lagaa hota hai.
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <div
                    className="h-px flex-1"
                    style={{ background: "#d6c9b0" }}
                  />
                  <span
                    className="text-xs tracking-widest uppercase"
                    style={{ color: "#c9a84c" }}>
                    Varanasi, UP
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── TIMELINE ── */}
        <section
          className="py-20 px-6"
          style={{ background: "rgba(44,36,22,0.96)" }}>
          <FadeIn>
            <div className="text-center mb-14">
              <p
                className="text-xs tracking-[0.4em] uppercase mb-3"
                style={{ color: "#c9a84c" }}>
                ✦ Hamara Safar ✦
              </p>
              <h2
                className="text-3xl"
                style={{
                  fontWeight: 300,
                  color: "#f3ede3",
                  letterSpacing: "0.04em",
                }}>
                40 Saal Ki Yatra
              </h2>
            </div>
          </FadeIn>

          <div className="max-w-3xl mx-auto space-y-0">
            {timeline.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div
                  className="flex gap-6 md:gap-10 items-start py-6"
                  style={{
                    borderBottom:
                      i < timeline.length - 1
                        ? "1px solid rgba(201,168,76,0.2)"
                        : "none",
                  }}>
                  <div
                    className="flex-shrink-0 text-right"
                    style={{ minWidth: 56 }}>
                    <span
                      className="text-sm font-mono tracking-widest"
                      style={{ color: "#c9a84c" }}>
                      {item.year}
                    </span>
                  </div>
                  <div
                    className="flex-shrink-0 w-3 h-3 rounded-full mt-1"
                    style={{
                      background: "#c9a84c",
                      boxShadow: "0 0 10px rgba(201,168,76,0.5)",
                    }}
                  />
                  <p className="text-sm leading-7" style={{ color: "#c4b99e" }}>
                    {item.event}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ── VALUES ── */}
        <section className="max-w-5xl mx-auto px-6 py-24">
          <FadeIn>
            <div className="text-center mb-14">
              <p
                className="text-xs tracking-[0.4em] uppercase mb-3"
                style={{ color: "#c9a84c" }}>
                ✦ Hamare Siddhant ✦
              </p>
              <h2
                className="text-3xl"
                style={{ fontWeight: 300, letterSpacing: "0.04em" }}>
                Hum Kyun Alag Hain
              </h2>
              <Divider />
            </div>
          </FadeIn>

          {/* Interactive Value Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {values.map((v, i) => (
              <button
                key={i}
                onClick={() => setActiveVal(i)}
                className="px-5 py-2 text-xs tracking-widest uppercase transition-all duration-300"
                style={{
                  background: activeVal === i ? "#2c2416" : "transparent",
                  color: activeVal === i ? "#e8d5a3" : "#7a6a52",
                  border: `1px solid ${activeVal === i ? "#2c2416" : "#d6c9b0"}`,
                }}>
                {v.icon} {v.title}
              </button>
            ))}
          </div>

          <FadeIn>
            <div
              className="text-center py-12 px-8 max-w-lg mx-auto"
              style={{
                background: "rgba(255,255,255,0.65)",
                border: "1px solid #dfd2bc",
                backdropFilter: "blur(8px)",
              }}>
              <div className="text-5xl mb-4">{values[activeVal].icon}</div>
              <h3
                className="text-xl mb-4"
                style={{ fontWeight: 300, color: "#c9a84c" }}>
                {values[activeVal].title}
              </h3>
              <p className="text-sm leading-8" style={{ color: "#5a4a35" }}>
                {values[activeVal].desc}
              </p>
            </div>
          </FadeIn>
        </section>

        {/* ── TEAM ── */}
        <section className="px-6 pb-24">
          <FadeIn>
            <div className="text-center mb-14">
              <p
                className="text-xs tracking-[0.4em] uppercase mb-3"
                style={{ color: "#c9a84c" }}>
                ✦ Hamaari Team ✦
              </p>
              <h2
                className="text-3xl"
                style={{ fontWeight: 300, letterSpacing: "0.04em" }}>
                Jinke Haath Banate Hain Khwaab
              </h2>
              <Divider />
            </div>
          </FadeIn>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((m, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div
                  className="text-center py-10 px-6 group transition-all duration-400"
                  style={{
                    background: "rgba(255,255,255,0.6)",
                    border: "1px solid #dfd2bc",
                    backdropFilter: "blur(8px)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = "#c9a84c")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = "#dfd2bc")
                  }>
                  {/* Avatar */}
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-base font-medium mx-auto mb-5"
                    style={{
                      background: "#f0e8d8",
                      border: "2px solid #c9a84c",
                      color: "#8a6f2e",
                    }}>
                    {m.initials}
                  </div>
                  <h3 className="text-base mb-1" style={{ fontWeight: 400 }}>
                    {m.name}
                  </h3>
                  <p
                    className="text-xs tracking-widest uppercase mb-2"
                    style={{ color: "#c9a84c" }}>
                    {m.role}
                  </p>
                  <p className="text-xs" style={{ color: "#b09c7e" }}>
                    {m.years}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <FadeIn>
          <section
            className="text-center py-20 px-6"
            style={{ background: "linear-gradient(135deg, #2c2416, #3d3020)" }}>
            <p
              className="text-xs tracking-[0.45em] uppercase mb-4"
              style={{ color: "#c9a84c" }}>
              ✦ Aiye Milte Hain ✦
            </p>
            <h2
              className="text-3xl mb-6"
              style={{
                fontWeight: 300,
                color: "#f3ede3",
                letterSpacing: "0.04em",
              }}>
              Apna Sapna Gehna Banayein
            </h2>
            <p
              className="text-sm mb-10 max-w-sm mx-auto leading-8"
              style={{ color: "#c4b99e" }}>
              Custom order, repair, ya bas ek baat — hum hamesha aapke liye
              yahan hain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="px-10 py-4 text-xs tracking-[0.4em] uppercase transition-all duration-300"
                style={{
                  background: "#c9a84c",
                  color: "#2c2416",
                  border: "none",
                }}
                onMouseEnter={(e) => (e.target.style.background = "#e8d5a3")}
                onMouseLeave={(e) => (e.target.style.background = "#c9a84c")}>
                Humse Milein ◆
              </button>
              <button
                className="px-10 py-4 text-xs tracking-[0.4em] uppercase transition-all duration-300"
                style={{
                  background: "transparent",
                  color: "#e8d5a3",
                  border: "1px solid rgba(232,213,163,0.4)",
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = "#c9a84c";
                  e.target.style.color = "#c9a84c";
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = "rgba(232,213,163,0.4)";
                  e.target.style.color = "#e8d5a3";
                }}>
                Collection Dekhein
              </button>
            </div>
          </section>
        </FadeIn>

        {/* Gold bottom border */}
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

export default About;
