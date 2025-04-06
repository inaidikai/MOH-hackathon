import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray border-t border-gray-200">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="font-bold text-xl text-green-500">GymGo</span>
            </div>
            <p className="text-gray-600 mb-4">
              Make fitness fun! Track workouts, earn XP, and level up your health with our gamified approach.
            </p>
            <div className="flex space-x-4">
            
            </div>
          </div>

         

  

        
       
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} GymGo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

