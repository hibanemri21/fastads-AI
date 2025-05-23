"use client"

import { useTheme } from "next-themes"

export function LineChart() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

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
          d="M50,200 L100,180 L150,190 L200,150 L250,140 L300,100 L350,120 L400,90 L450,70 L500,80 L550,60"
          fill="none"
          stroke="#FF4C4C"
          strokeWidth="3"
        />

        {/* Data points */}
        <circle cx="50" cy="200" r="4" fill="#FF4C4C" />
        <circle cx="100" cy="180" r="4" fill="#FF4C4C" />
        <circle cx="150" cy="190" r="4" fill="#FF4C4C" />
        <circle cx="200" cy="150" r="4" fill="#FF4C4C" />
        <circle cx="250" cy="140" r="4" fill="#FF4C4C" />
        <circle cx="300" cy="100" r="4" fill="#FF4C4C" />
        <circle cx="350" cy="120" r="4" fill="#FF4C4C" />
        <circle cx="400" cy="90" r="4" fill="#FF4C4C" />
        <circle cx="450" cy="70" r="4" fill="#FF4C4C" />
        <circle cx="500" cy="80" r="4" fill="#FF4C4C" />
        <circle cx="550" cy="60" r="4" fill="#FF4C4C" />

        {/* X-axis labels */}
        <text x="50" y="270" textAnchor="middle" fill={isDark ? "#999" : "#666"} fontSize="12">
          1
        </text>
        <text x="150" y="270" textAnchor="middle" fill={isDark ? "#999" : "#666"} fontSize="12">
          5
        </text>
        <text x="250" y="270" textAnchor="middle" fill={isDark ? "#999" : "#666"} fontSize="12">
          10
        </text>
        <text x="350" y="270" textAnchor="middle" fill={isDark ? "#999" : "#666"} fontSize="12">
          15
        </text>
        <text x="450" y="270" textAnchor="middle" fill={isDark ? "#999" : "#666"} fontSize="12">
          20
        </text>
        <text x="550" y="270" textAnchor="middle" fill={isDark ? "#999" : "#666"} fontSize="12">
          25
        </text>

        {/* Y-axis labels */}
        <text x="40" y="250" textAnchor="end" fill={isDark ? "#999" : "#666"} fontSize="12">
          0
        </text>
        <text x="40" y="200" textAnchor="end" fill={isDark ? "#999" : "#666"} fontSize="12">
          500
        </text>
        <text x="40" y="150" textAnchor="end" fill={isDark ? "#999" : "#666"} fontSize="12">
          1000
        </text>
        <text x="40" y="100" textAnchor="end" fill={isDark ? "#999" : "#666"} fontSize="12">
          1500
        </text>
        <text x="40" y="50" textAnchor="end" fill={isDark ? "#999" : "#666"} fontSize="12">
          2000
        </text>
      </svg>
    </div>
  )
}

export function BarChart() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

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

        {/* Bars */}
        <rect x="70" y="100" width="40" height="150" fill="#FF4C4C" rx="4" />
        <rect x="140" y="150" width="40" height="100" fill="#FFD93D" rx="4" />
        <rect x="210" y="80" width="40" height="170" fill="#4CAF50" rx="4" />
        <rect x="280" y="120" width="40" height="130" fill="#FF4C4C" rx="4" />
        <rect x="350" y="180" width="40" height="70" fill="#FFD93D" rx="4" />
        <rect x="420" y="70" width="40" height="180" fill="#4CAF50" rx="4" />
        <rect x="490" y="130" width="40" height="120" fill="#FF4C4C" rx="4" />

        {/* X-axis labels */}
        <text x="90" y="270" textAnchor="middle" fill={isDark ? "#999" : "#666"} fontSize="12">
          Burger
        </text>
        <text x="160" y="270" textAnchor="middle" fill={isDark ? "#999" : "#666"} fontSize="12">
          Pizza
        </text>
        <text x="230" y="270" textAnchor="middle" fill={isDark ? "#999" : "#666"} fontSize="12">
          Menu
        </text>
        <text x="300" y="270" textAnchor="middle" fill={isDark ? "#999" : "#666"} fontSize="12">
          Dessert
        </text>
        <text x="370" y="270" textAnchor="middle" fill={isDark ? "#999" : "#666"} fontSize="12">
          Boisson
        </text>
        <text x="440" y="270" textAnchor="middle" fill={isDark ? "#999" : "#666"} fontSize="12">
          Promo
        </text>
        <text x="510" y="270" textAnchor="middle" fill={isDark ? "#999" : "#666"} fontSize="12">
          Livraison
        </text>

        {/* Y-axis labels */}
        <text x="40" y="250" textAnchor="end" fill={isDark ? "#999" : "#666"} fontSize="12">
          0%
        </text>
        <text x="40" y="200" textAnchor="end" fill={isDark ? "#999" : "#666"} fontSize="12">
          100%
        </text>
        <text x="40" y="150" textAnchor="end" fill={isDark ? "#999" : "#666"} fontSize="12">
          200%
        </text>
        <text x="40" y="100" textAnchor="end" fill={isDark ? "#999" : "#666"} fontSize="12">
          300%
        </text>
        <text x="40" y="50" textAnchor="end" fill={isDark ? "#999" : "#666"} fontSize="12">
          400%
        </text>
      </svg>
    </div>
  )
}

export function PieChart() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  // SVG path for pie slices
  const slice1 = "M 150 150 L 150 50 A 100 100 0 0 1 237 113 Z" // 45%
  const slice2 = "M 150 150 L 237 113 A 100 100 0 0 1 250 150 Z" // 15%
  const slice3 = "M 150 150 L 250 150 A 100 100 0 0 1 150 250 Z" // 25%
  const slice4 = "M 150 150 L 150 250 A 100 100 0 0 1 50 150 Z" // 25%
  const slice5 = "M 150 150 L 50 150 A 100 100 0 0 1 150 50 Z" // 15%

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg width="100%" height="100%" viewBox="0 0 300 300">
        {/* Pie slices */}
        <path d={slice1} fill="#FF4C4C" />
        <path d={slice2} fill="#FFD93D" />
        <path d={slice3} fill="#4CAF50" />
        <path d={slice4} fill="#6C757D" />
        <path d={slice5} fill="#007BFF" />

        {/* Legend */}
        <rect x="220" y="100" width="15" height="15" fill="#FF4C4C" />
        <text x="240" y="112" fill={isDark ? "#FFF" : "#333"} fontSize="12">
          Facebook (45%)
        </text>

        <rect x="220" y="125" width="15" height="15" fill="#FFD93D" />
        <text x="240" y="137" fill={isDark ? "#FFF" : "#333"} fontSize="12">
          Instagram (15%)
        </text>

        <rect x="220" y="150" width="15" height="15" fill="#4CAF50" />
        <text x="240" y="162" fill={isDark ? "#FFF" : "#333"} fontSize="12">
          TikTok (25%)
        </text>

        <rect x="220" y="175" width="15" height="15" fill="#6C757D" />
        <text x="240" y="187" fill={isDark ? "#FFF" : "#333"} fontSize="12">
          Google (10%)
        </text>

        <rect x="220" y="200" width="15" height="15" fill="#007BFF" />
        <text x="240" y="212" fill={isDark ? "#FFF" : "#333"} fontSize="12">
          Autres (5%)
        </text>
      </svg>
    </div>
  )
}
