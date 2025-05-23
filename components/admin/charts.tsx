"use client"

import { useTheme } from "next-themes"

interface AdminChartsProps {
  type: "revenue" | "users" | "campaigns" | "userTypes"
}

export function AdminCharts({ type }: AdminChartsProps) {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  if (type === "userTypes") {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <svg width="100%" height="100%" viewBox="0 0 300 300">
          {/* Pie slices */}
          <path d="M 150 150 L 150 50 A 100 100 0 0 1 237 113 Z" fill="#FF4C4C" />
          <path d="M 150 150 L 237 113 A 100 100 0 0 1 250 150 Z" fill="#FFD93D" />
          <path d="M 150 150 L 250 150 A 100 100 0 0 1 150 250 Z" fill="#4CAF50" />
          <path d="M 150 150 L 150 250 A 100 100 0 0 1 50 150 Z" fill="#E67E22" />
          <path d="M 150 150 L 50 150 A 100 100 0 0 1 150 50 Z" fill="#6C757D" />

          {/* Legend */}
          <rect x="220" y="100" width="15" height="15" fill="#FF4C4C" />
          <text x="240" y="112" fill={isDark ? "#FFF" : "#333"} fontSize="12">
            Restaurants (74%)
          </text>

          <rect x="220" y="125" width="15" height="15" fill="#FFD93D" />
          <text x="240" y="137" fill={isDark ? "#FFF" : "#333"} fontSize="12">
            Agences (16%)
          </text>

          <rect x="220" y="150" width="15" height="15" fill="#4CAF50" />
          <text x="240" y="162" fill={isDark ? "#FFF" : "#333"} fontSize="12">
            Admins (10%)
          </text>
        </svg>
      </div>
    )
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg width="100%" height="100%" viewBox="0 0 600 300">
        {/* Grid lines */}
        <line x1="50" y1="250" x2="550" y2="250" stroke={isDark ? "#444" : "#ddd"} strokeWidth="1" />
        <line x1="50" y1="200" x2="550" y2="200" stroke={isDark ? "#444" : "#ddd"} strokeWidth="1" />
        <line x1="50" y1="150" x2="550" y2="150" stroke={isDark ? "#444" : "#ddd"} strokeWidth="1" />
        <line x1="50" y1="100" x2="550" y2="100" stroke={isDark ? "#444" : "#ddd"} strokeWidth="1" />
        <line x1="50" y1="50" x2="550" y2="50" stroke={isDark ? "#444" : "#ddd"} strokeWidth="1" />

        {/* Y-axis */}
        <line x1="50" y1="50" x2="50" y2="250" stroke={isDark ? "#666" : "#999"} strokeWidth="1" />

        {/* X-axis */}
        <line x1="50" y1="250" x2="550" y2="250" stroke={isDark ? "#666" : "#999"} strokeWidth="1" />

        {/* Data line */}
        <path
          d={
            type === "revenue"
              ? "M50,200 L100,180 L150,190 L200,150 L250,140 L300,100 L350,120 L400,90 L450,70 L500,80 L550,60"
              : type === "users"
                ? "M50,220 L100,210 L150,200 L200,190 L250,170 L300,150 L350,130 L400,120 L450,100 L500,90 L550,70"
                : "M50,180 L100,170 L150,160 L200,140 L250,130 L300,120 L350,100 L400,110 L450,90 L500,70 L550,50"
          }
          fill="none"
          stroke={type === "revenue" ? "#FF4C4C" : type === "users" ? "#FFD93D" : "#4CAF50"}
          strokeWidth="3"
        />

        {/* Data points */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
          const x = 50 + i * 50
          const y =
            type === "revenue"
              ? [200, 180, 190, 150, 140, 100, 120, 90, 70, 80, 60][i]
              : type === "users"
                ? [220, 210, 200, 190, 170, 150, 130, 120, 100, 90, 70][i]
                : [180, 170, 160, 140, 130, 120, 100, 110, 90, 70, 50][i]
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="4"
              fill={type === "revenue" ? "#FF4C4C" : type === "users" ? "#FFD93D" : "#4CAF50"}
            />
          )
        })}

        {/* X-axis labels */}
        <text x="50" y="270" textAnchor="middle" fill={isDark ? "#999" : "#666"} fontSize="12">
          Jan
        </text>
        <text x="150" y="270" textAnchor="middle" fill={isDark ? "#999" : "#666"} fontSize="12">
          Mar
        </text>
        <text x="250" y="270" textAnchor="middle" fill={isDark ? "#999" : "#666"} fontSize="12">
          Mai
        </text>
        <text x="350" y="270" textAnchor="middle" fill={isDark ? "#999" : "#666"} fontSize="12">
          Jul
        </text>
        <text x="450" y="270" textAnchor="middle" fill={isDark ? "#999" : "#666"} fontSize="12">
          Sep
        </text>
        <text x="550" y="270" textAnchor="middle" fill={isDark ? "#999" : "#666"} fontSize="12">
          Nov
        </text>

        {/* Y-axis labels */}
        <text x="40" y="250" textAnchor="end" fill={isDark ? "#999" : "#666"} fontSize="12">
          0
        </text>
        <text x="40" y="200" textAnchor="end" fill={isDark ? "#999" : "#666"} fontSize="12">
          {type === "revenue" ? "10k€" : type === "users" ? "50" : "250"}
        </text>
        <text x="40" y="150" textAnchor="end" fill={isDark ? "#999" : "#666"} fontSize="12">
          {type === "revenue" ? "20k€" : type === "users" ? "100" : "500"}
        </text>
        <text x="40" y="100" textAnchor="end" fill={isDark ? "#999" : "#666"} fontSize="12">
          {type === "revenue" ? "30k€" : type === "users" ? "150" : "750"}
        </text>
        <text x="40" y="50" textAnchor="end" fill={isDark ? "#999" : "#666"} fontSize="12">
          {type === "revenue" ? "40k€" : type === "users" ? "200" : "1000"}
        </text>
      </svg>
    </div>
  )
}
