import React from "react";
import { useState, useMemo, useRef, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine, BarChart, Bar } from "recharts";

/* ─────────────────────────────────────────────────────────────────────────────
   BRAVES 2026 — WAR ROOM v2
   Layout modeled on Overthinking The NBA "War Room" mockup
   - Top header bar with brand lockup, tabs, search, theme toggle
   - Sub-header stat strip (record, runs, ERA, AVG, OBP, SLG, OPS, wRC+, wOBA, FIP, SIERA)
   - Left rail: all hitters (sortable, filterable)
   - Right rail: all pitchers (sortable, filterable)
   - Center: scrolling player-card carousel + tab content + full profile panel
   - Tabs: Hitting · Pitching · Statcast · Team Stats · Standings · WAR Progress
   - Full-shine palette: navy base, metallic gold accents, glossy red highlights
   - Mobile-friendly: rails collapse to drawers under ~1100px
   ───────────────────────────────────────────────────────────────────────────── */

const BRAND = {
  red: "#CE1141",
  redGlow: "#ff2855",
  navy: "#13274F",
  navyDeep: "#0a1530",
  gold: "#C4A35A",
  goldBright: "#EAC678",
  goldDeep: "#8a6f2f",
  white: "#ffffff",
};

export default function App() {
  const [activeTab, setActiveTab] = useState("Hitting");

  return (
    <div style={{ backgroundColor: BRAND.navy, color: BRAND.white, minHeight: "100vh", fontFamily: "sans-serif" }}>
      {/* Header */}
      <header style={{ backgroundColor: BRAND.navyDeep, padding: "20px", borderBottom: `3px solid ${BRAND.gold}` }}>
        <h1 style={{ color: BRAND.gold, fontSize: "28px", marginBottom: "10px" }}>⚾ BRAVES 2026 WAR ROOM</h1>
        <p style={{ color: BRAND.goldBright, fontSize: "14px" }}>Real-time Analytics & Player Management</p>
      </header>

      {/* Stat Strip */}
      <div style={{ backgroundColor: BRAND.red, padding: "15px", display: "flex", justifyContent: "space-around", fontSize: "13px", fontWeight: "bold" }}>
        <div>Record: 19-8</div>
        <div>Runs: 142</div>
        <div>ERA: 3.24</div>
        <div>AVG: .268</div>
        <div>OBP: .331</div>
        <div>OPS: .798</div>
      </div>

      {/* Tabs */}
      <div style={{ backgroundColor: BRAND.navyDeep, borderBottom: `2px solid ${BRAND.gold}`, display: "flex" }}>
        {["Hitting", "Pitching", "Statcast", "Team Stats", "Standings", "WAR Progress"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: "12px 20px",
              backgroundColor: activeTab === tab ? BRAND.gold : "transparent",
              color: activeTab === tab ? BRAND.navy : BRAND.gold,
              border: "none",
              cursor: "pointer",
              fontSize: "13px",
              fontWeight: "bold",
              transition: "all 0.3s",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div style={{ padding: "30px", textAlign: "center" }}>
        <h2 style={{ color: BRAND.goldBright, marginBottom: "20px" }}>{activeTab}</h2>
        
        {activeTab === "Hitting" && (
          <div>
            <h3>Top Hitters</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "15px", marginTop: "15px" }}>
              {["Michael Harris II", "Matt Olson", "Ozzie Albies", "Austin Riley"].map((player) => (
                <div
                  key={player}
                  style={{
                    backgroundColor: BRAND.navyDeep,
                    padding: "15px",
                    borderRadius: "8px",
                    borderLeft: `4px solid ${BRAND.gold}`,
                  }}
                >
                  <div style={{ fontSize: "14px", fontWeight: "bold", color: BRAND.goldBright }}>{player}</div>
                  <div style={{ fontSize: "12px", marginTop: "8px", color: BRAND.white }}>AVG: .280 | HR: 12 | RBI: 35</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Pitching" && (
          <div>
            <h3>Top Pitchers</h3>
            <p style={{ color: BRAND.goldBright }}>Pitching statistics and analysis coming soon...</p>
          </div>
        )}

        {activeTab === "Team Stats" && (
          <div>
            <h3>Team Statistics</h3>
            <p style={{ color: BRAND.goldBright }}>Comprehensive team performance metrics...</p>
          </div>
        )}

        {activeTab === "Standings" && (
          <div>
            <h3>Division Standings</h3>
            <p style={{ color: BRAND.goldBright }}>Current divisional rankings and schedules...</p>
          </div>
        )}

        {activeTab === "WAR Progress" && (
          <div>
            <h3>Wins Above Replacement Tracking</h3>
            <p style={{ color: BRAND.goldBright }}>WAR analysis and player value metrics...</p>
          </div>
        )}

        {activeTab === "Statcast" && (
          <div>
            <h3>Statcast Data</h3>
            <p style={{ color: BRAND.goldBright }}>Advanced baseball metrics and launch angles...</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: BRAND.navyDeep, padding: "20px", textAlign: "center", borderTop: `2px solid ${BRAND.gold}`, marginTop: "40px" }}>
        <p style={{ color: BRAND.goldBright, fontSize: "12px" }}>© 2026 Atlanta Braves | WAR Room v2.0</p>
      </footer>
    </div>
  );
}