"use client";

import { useState, useRef, useEffect } from "react";

const Logo = () => (
  <a href="/" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
    <img src="/download.jpg" alt="6sense logo" style={{ height: "36px", width: "auto", objectFit: "contain" }} />
    <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: "700", fontSize: "22px", color: "#1a1a1a", letterSpacing: "-0.5px" }}>
      6sense
    </span>
  </a>
);

const dropdownData: Record<string, { label: string; description: string; href: string }[]> = {
  Services: [
    { label: "Managed Services", description: "End-to-end account management", href: "/services/managed" },
    { label: "Consulting", description: "Strategic GTM advisory", href: "/services/consulting" },
    { label: "Implementation", description: "Fast-track onboarding", href: "/services/implementation" },
    { label: "Support", description: "24/7 technical assistance", href: "/services/support" },
  ],
  Solutions: [
    { label: "Revenue AI", description: "Predict pipeline with precision", href: "/solutions/revenue-ai" },
    { label: "Advertising", description: "Reach in-market accounts", href: "/solutions/advertising" },
    { label: "Sales Intelligence", description: "Actionable buyer insights", href: "/solutions/sales-intelligence" },
    { label: "Conversational Email", description: "AI-powered outreach", href: "/solutions/email" },
  ],
  Industries: [
    { label: "Technology", description: "SaaS & enterprise tech", href: "/industries/technology" },
    { label: "Financial Services", description: "Banking & fintech", href: "/industries/financial-services" },
    { label: "Healthcare", description: "Life sciences & health IT", href: "/industries/healthcare" },
    { label: "Manufacturing", description: "Industrial & B2B", href: "/industries/manufacturing" },
  ],
  Company: [
    { label: "About Us", description: "Our mission & story", href: "/company/about" },
    { label: "Leadership", description: "Meet the team", href: "/company/leadership" },
    { label: "Careers", description: "Join the revolution", href: "/company/careers" },
    { label: "Newsroom", description: "Press & announcements", href: "/company/newsroom" },
  ],
};

type NavItemProps = {
  label: string;
  hasDropdown?: boolean;
};

const NavItem = ({ label, hasDropdown = false }: NavItemProps) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const items = dropdownData[label] || [];

  return (
    // The KEY FIX: onMouseEnter/Leave are on the WRAPPER div that covers
    // both the button AND the dropdown panel, so moving into the dropdown
    // never triggers a leave event on the button.
    <div
      ref={wrapperRef}
      onMouseEnter={() => hasDropdown && setOpen(true)}
      onMouseLeave={() => hasDropdown && setOpen(false)}
      style={{ position: "relative" }}
    >
      <button
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          padding: "8px 14px",
          borderRadius: "8px",
          border: "none",
          background: open ? "rgba(184,142,60,0.10)" : "transparent",
          color: "#1a1a1a",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: "500",
          fontSize: "15px",
          cursor: "pointer",
          transition: "background 0.2s ease",
          whiteSpace: "nowrap",
        }}
      >
        {label}
        {hasDropdown && (
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            style={{
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.25s ease",
              marginTop: "1px",
            }}
          >
            <path d="M3 5L7 9L11 5" stroke="#555" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>

      {hasDropdown && open && (
        <div
          style={{
            position: "absolute",
            top: "100%",           // flush with button bottom — no gap
            left: "50%",
            transform: "translateX(-50%)",
            paddingTop: "6px",    // visual gap via padding (not margin) so hover stays connected
            zIndex: 100,
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "14px",
              boxShadow: "0 12px 40px rgba(0,0,0,0.13), 0 2px 8px rgba(0,0,0,0.07)",
              minWidth: "260px",
              padding: "10px",
              border: "1px solid rgba(184,142,60,0.15)",
              animation: "dropFade 0.18s ease",
              position: "relative",
            }}
          >
            {/* Arrow tip */}
            <div style={{
              position: "absolute",
              top: "-7px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "14px",
              height: "7px",
              overflow: "hidden",
            }}>
              <div style={{
                width: "10px",
                height: "10px",
                background: "#fff",
                border: "1px solid rgba(184,142,60,0.2)",
                transform: "rotate(45deg)",
                margin: "3px auto 0",
                boxShadow: "-2px -2px 4px rgba(0,0,0,0.05)",
              }} />
            </div>

            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  display: "block",
                  padding: "10px 14px",
                  borderRadius: "9px",
                  cursor: "pointer",
                  textDecoration: "none",
                  background: "transparent",
                  transition: "background 0.15s",
                }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = "rgba(184,142,60,0.09)"}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = "transparent"}
              >
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: "600", fontSize: "14px", color: "#1a1a1a" }}>
                  {item.label}
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12.5px", color: "#777", marginTop: "2px" }}>
                  {item.description}
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default function SixSenseNavbar() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
        @keyframes dropFade {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>

      <nav style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 32px",
        height: "64px",
        background: "#ffffff",
        borderBottom: "1px solid #f0ece4",
        boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
        position: "sticky",
        top: 0,
        zIndex: 200,
        fontFamily: "'DM Sans', sans-serif",
      }}>

        {/* Logo */}
        <Logo />

        {/* Nav Links */}
        <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
          <NavItem label="Services" hasDropdown />
          <NavItem label="Solutions" hasDropdown />
          <NavItem label="Industries" hasDropdown />

          {/* Cost Calculator — outlined pill */}
          <a
            href="/cost-calculator"
            style={{
              padding: "7px 18px",
              borderRadius: "50px",
              border: "1.5px solid #B8903C",
              background: "transparent",
              color: "#1a1a1a",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: "500",
              fontSize: "15px",
              cursor: "pointer",
              margin: "0 6px",
              textDecoration: "none",
              display: "inline-block",
              transition: "background 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = "rgba(184,142,60,0.10)"}
            onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = "transparent"}
          >
            Cost Calculator
          </a>

          <NavItem label="Company" hasDropdown />

          {/* Blog */}
          <a
            href="/blog"
            style={{
              padding: "8px 14px",
              background: "transparent",
              color: "#1a1a1a",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: "500",
              fontSize: "15px",
              cursor: "pointer",
              borderBottom: "2px solid #B8903C",
              textDecoration: "none",
              display: "inline-block",
              transition: "background 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = "rgba(184,142,60,0.08)"}
            onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = "transparent"}
          >
            Blog
          </a>
        </div>

        {/* CTA */}
        <a
          href="/contact"
          style={{
            padding: "10px 24px",
            borderRadius: "8px",
            background: "#B8903C",
            color: "#fff",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: "700",
            fontSize: "15px",
            cursor: "pointer",
            letterSpacing: "0.2px",
            textDecoration: "none",
            display: "inline-block",
            transition: "background 0.2s, transform 0.15s",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#9e7a30";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#B8903C";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
          }}
        >
          Let's Talk
        </a>
      </nav>
    </>
  );
}
