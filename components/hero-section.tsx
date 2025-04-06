import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 z-0" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              AI-Powered Fitness Tracking for Your Jump Workouts
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Track jumps, strength, and movements with precision using our sensor technology. Get real-time feedback
              and turn your workouts into points.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
              <Link href="/features">
                <Button variant="outline" size="lg">
                  Explore Features
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video bg-gray rounded-xl shadow-2xl overflow-hidden">
              <img
                src="../WhatsApp Image 2025-04-06 at 07.54.54.jpeg?height=400&width=600"
                alt="Fitness app interface showing jump tracking"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gray p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">87</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Today's Score</p>
                  <p className="font-medium">Jump Points</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

