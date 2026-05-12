"use client";

import { useState } from "react";

const Logo = () => (
  <a
    href="/"
    style={{
      display: "flex",
      alignItems: "center",
      gap: "8px",
      textDecoration: "none",
    }}
  >
    <img
      src="/download.jpg"
      alt="6sense logo"
      style={{ height: "36px", width: "auto", objectFit: "contain" }}
    />
    <span style={{ fontWeight: "700", fontSize: "22px", color: "#1a1a1a" }}>
      6sense
    </span>
  </a>
);

const dropdownData: Record<
  string,
  { label: string; description: string; href: string }[]
> = {
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
  const items = dropdownData[label] || [];

  return (
    <div
      onMouseEnter={() => hasDropdown && setOpen(true)}
      onMouseLeave={() => hasDropdown && setOpen(false)}
      style={{ position: "relative" }}
    >
      <button
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "8px 14px",
          borderRadius: "8px",
          border: "none",
          background: open ? "rgba(184,142,60,0.10)" : "transparent",
          color: "#1a1a1a",
          fontWeight: "500",
          fontSize: "15px",
          cursor: "pointer",
          transition: "background 0.2s ease",
          whiteSpace: "nowrap",
        }}
      >
        <span>{label}</span>

        {hasDropdown && (
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            style={{
              display: "block",
              marginTop: "2px",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.25s ease",
            }}
          >
            <path
              d="M3 5L7 9L11 5"
              stroke="#555"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      {hasDropdown && open && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            paddingTop: "6px",
            zIndex: 100,
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "14px",
              boxShadow: "0 12px 40px rgba(0,0,0,0.13)",
              minWidth: "260px",
              padding: "10px",
              border: "1px solid rgba(184,142,60,0.15)",
            }}
          >
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  display: "block",
                  padding: "10px 14px",
                  borderRadius: "9px",
                  textDecoration: "none",
                  background: "transparent",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(184,142,60,0.09)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                <div
                  style={{
                    fontWeight: "600",
                    fontSize: "14px",
                    color: "#1a1a1a",
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontSize: "12.5px",
                    color: "#777",
                    marginTop: "2px",
                  }}
                >
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

export default function Navbar() {
  return (
    <nav
      style={{
        background: "#ffffff",
        borderBottom: "1px solid #f0ece4",
        boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
        position: "sticky",
        top: 0,
        zIndex: 200,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: "sans-serif",
        }}
      >
        <Logo />

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <NavItem label="Services" hasDropdown />
          <NavItem label="Solutions" hasDropdown />
          <NavItem label="Industries" hasDropdown />

          <a
            href="/cost-calculator"
            style={{
              padding: "7px 18px",
              borderRadius: "50px",
              border: "1.5px solid #B8903C",
              color: "#1a1a1a",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Cost Calculator
          </a>

          <NavItem label="Company" hasDropdown />

          <a
            href="/blog"
            style={{
              padding: "8px 14px",
              color: "#1a1a1a",
              borderBottom: "2px solid #B8903C",
              textDecoration: "none",
            }}
          >
            Blog
          </a>
        </div>

        <a
          href="/contact"
          style={{
            padding: "10px 24px",
            borderRadius: "8px",
            background: "#B8903C",
            color: "#fff",
            fontWeight: "700",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          Let&apos;s Talk
        </a>
      </div>
    </nav>
  );
}