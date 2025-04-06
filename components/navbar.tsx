"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Flame, Trophy, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <span className="font-bold text-xl hidden md:inline-block text-green-500">GymGo</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-green-500 ${
              isActive("/") ? "text-green-500" : "text-gray-600"
            }`}
          >
            Home
          </Link>
          <Link
            href="/features"
            className={`text-sm font-medium transition-colors hover:text-green-500 ${
              isActive("/features") ? "text-green-500" : "text-gray-600"
            }`}
          >
            Features
          </Link>
          <Link
            href="/leaderboard"
            className={`text-sm font-medium transition-colors hover:text-green-500 ${
              isActive("/leaderboard") ? "text-green-500" : "text-gray-600"
            }`}
          >
            Leaderboard
          </Link>
          <Link
            href="/products"
            className={`text-sm font-medium transition-colors hover:text-green-500 ${
              isActive("/products") ? "text-green-500" : "text-gray-600"
            }`}
          >
            Shop
          </Link>
          <Link
            href="/demo"
            className={`text-sm font-medium transition-colors hover:text-green-500 ${
              isActive("/demo") ? "text-green-500" : "text-gray-600"
            }`}
          >
            Try It
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-6">
          {/* Gamification Elements */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-orange-500">
              <Flame className="h-5 w-5" />
              <span className="font-bold">12</span>
              <span className="text-xs text-gray-500">day streak</span>
            </div>
            <div className="flex items-center gap-1 text-purple-500">
              <Trophy className="h-5 w-5" />
              <span className="font-bold">1,240</span>
              <span className="text-xs text-gray-500">XP</span>
            </div>
            <div className="flex items-center gap-1 text-red-500">
              <Heart className="h-5 w-5" fill="currentColor" />
              <Heart className="h-5 w-5" fill="currentColor" />
              <Heart className="h-5 w-5" fill="currentColor" />
              <Heart className="h-5 w-5" fill="currentColor" />
              <Heart className="h-5 w-5" stroke="currentColor" fill="white" />
            </div>
          </div>

          <Button size="sm" className="bg-green-500 hover:bg-green-600">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 flex flex-col gap-4">
            {/* Mobile Gamification Elements */}
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg mb-2">
              <div className="flex items-center gap-1 text-orange-500">
                <Flame className="h-5 w-5" />
                <span className="font-bold">12</span>
                <span className="text-xs text-gray-500">day streak</span>
              </div>
              <div className="flex items-center gap-1 text-purple-500">
                <Trophy className="h-5 w-5" />
                <span className="font-bold">1,240</span>
                <span className="text-xs text-gray-500">XP</span>
              </div>
              <div className="flex items-center gap-1 text-red-500">
                <Heart className="h-5 w-5" fill="currentColor" />
                <Heart className="h-5 w-5" fill="currentColor" />
                <Heart className="h-5 w-5" fill="currentColor" />
                <Heart className="h-5 w-5" fill="currentColor" />
                <Heart className="h-5 w-5" stroke="currentColor" fill="none" />
              </div>
            </div>

            <Link
              href="/"
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                isActive("/") ? "bg-green-50 text-green-600" : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/features"
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                isActive("/features") ? "bg-green-50 text-green-600" : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/leaderboard"
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                isActive("/leaderboard") ? "bg-green-50 text-green-600" : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Leaderboard
            </Link>
            <Link
              href="/products"
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                isActive("/products") ? "bg-green-50 text-green-600" : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/demo"
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                isActive("/demo") ? "bg-green-50 text-green-600" : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Try It
            </Link>

            <div className="border-t pt-4 mt-2">
              <Button className="w-full justify-center bg-green-500 hover:bg-green-600">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

