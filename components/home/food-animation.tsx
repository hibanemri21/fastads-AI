"use client"

import type React from "react"

import { useEffect, useState } from "react"

export function FoodAnimation() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative w-full h-[400px] bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg overflow-hidden">
      {/* Maqloub */}
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 animate-float transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "0.2s" }}
      >
        <div className="w-full h-full bg-[url('/placeholder.svg?height=256&width=256&text=Maqloub')] bg-cover bg-center rounded-full shadow-lg"></div>
      </div>

      {/* Tacos */}
      <div
        className={`absolute top-[30%] right-[15%] w-20 h-32 animate-bounce-slow transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "0.4s" }}
      >
        <div className="w-full h-full bg-[url('/placeholder.svg?height=128&width=80&text=Tacos')] bg-cover bg-center"></div>
      </div>

      {/* Soda */}
      <div
        className={`absolute bottom-[20%] left-[15%] w-16 h-28 animate-pulse-slow transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "0.6s" }}
      >
        <div className="w-full h-full bg-[url('/placeholder.svg?height=112&width=64&text=Soda')] bg-cover bg-center"></div>
      </div>

      {/* Pizza Slice */}
      <div
        className={`absolute top-[20%] left-[25%] w-24 h-24 animate-wiggle transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "0.8s" }}
      >
        <div className="w-full h-full bg-[url('/placeholder.svg?height=96&width=96&text=Pizza')] bg-cover bg-center"></div>
      </div>

      {/* Social Media Icons */}
      <div
        className={`absolute top-[15%] right-[25%] w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center text-white animate-spin-slow transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "1s" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      </div>

      <div
        className={`absolute bottom-[30%] right-[30%] w-12 h-12 rounded-full bg-[#E4405F] flex items-center justify-center text-white animate-spin-slow transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "1.2s", animationDelay: "0.5s" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      </div>

      {/* AI Sparkles */}
      <div
        className={`absolute top-[40%] left-[10%] w-8 h-8 transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "1.4s" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 text-accent animate-pulse-slow"
        >
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
          <path d="M5 3v4" />
          <path d="M19 17v4" />
          <path d="M3 5h4" />
          <path d="M17 19h4" />
        </svg>
      </div>

      <div
        className={`absolute bottom-[15%] right-[10%] w-8 h-8 transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "1.6s" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 text-primary animate-pulse-slow"
          style={{ animationDelay: "0.5s" }}
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          <path d="M12 12 8.5 8.5" />
          <path d="M12 9a3 3 0 0 0 0 6 3 3 0 0 0 0-6Z" />
        </svg>
      </div>

      {/* Ad Campaign Popup */}
      <div
        className={`absolute bottom-8 right-8 p-4 bg-background/90 backdrop-blur-sm rounded-lg shadow-lg max-w-xs transition-all duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDelay: "1.8s" }}
      >
        <p className="font-bangers text-xl text-primary">Yekhdem feek? 🔥</p>
        <p className="text-sm mt-1">Maqloub Express - Livraison gratuite ce weekend!</p>
        <div className="mt-2 flex justify-end">
          <Button className="bg-primary hover:bg-primary/90 text-xs py-1 h-auto">Commander</Button>
        </div>
      </div>

      {/* Stats Popup */}
      <div
        className={`absolute top-8 left-8 p-3 bg-background/90 backdrop-blur-sm rounded-lg shadow-lg transition-all duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDelay: "2s" }}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-green-500"
            >
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
              <polyline points="16 7 22 7 22 13"></polyline>
            </svg>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Conversions</p>
            <p className="font-medium text-sm">+27% cette semaine</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Button({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <button
      className={`px-3 py-2 rounded-md bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors ${
        className || ""
      }`}
    >
      {children}
    </button>
  )
}
