import Link from "next/link"
import { ArrowRight, Zap, Trophy, Users, Flame, Gift, Star, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-green-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm text-green-600 mb-6">
                <Flame className="h-4 w-4 mr-1" /> 100,000+ active streaks
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-gray-900">
                Make Fitness <span className="text-green-500">Fun</span> with GymGo!
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Track workouts, earn XP, and level up your health with our gamified fitness app. Just 5 minutes a day
                keeps your streak alive!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2 bg-green-500 hover:bg-green-600 text-lg rounded-xl">
                  Start Your Streak <ArrowRight className="h-4 w-4" />
                </Button>
                <Link href="/features">
                  <Button variant="outline" size="lg" className="text-lg rounded-xl">
                    See How It Works
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gray rounded-3xl shadow-xl overflow-hidden border-8 border-white">
                <img
                  src="../a-lifestyle-product-advertisement-featur_lxvZX3JeRzqgbsiBoVIp8w_iiFtvQloRMmCbkrpNsUUhg.jpeg?height=500&width=500"
                  alt="GymGo app interface"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Gamification Elements */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Flame className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-sm text-white-500">Current Streak</p>
                    <p className="font-bold text-2xl text-orange-500">12 Days</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Trophy className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-sm text-white-500">Your XP</p>
                    <p className="font-bold text-2xl text-purple-500">1,240</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight mb-4 text-gray-900">How GymGo Works</h2>
            <p className="text-xl text-gray-600 md:w-3/4 mx-auto">
              Turn your fitness journey into a fun game with daily challenges, rewards, and friendly competition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center text-center p-6 bg-green-50 rounded-2xl">
              <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Zap className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Daily Challenges</h3>
              <p className="text-gray-600">
                Complete quick, fun workout challenges in just 5 minutes a day to maintain your streak.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-purple-50 rounded-2xl">
              <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <Trophy className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Earn XP & Level Up</h3>
              <p className="text-gray-600">
                Gain experience points for every workout. Level up to unlock new exercises and achievements.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-orange-50 rounded-2xl">
              <div className="h-16 w-16 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <Flame className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Keep Your Streak</h3>
              <p className="text-gray-600">
                Don't break your streak! Daily workouts build the habit and keep you motivated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gamification Features */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight mb-4 text-gray-900">Gamified Fitness Features</h2>
            <p className="text-xl text-gray-600 md:w-3/4 mx-auto">
              We've turned fitness into a game with these fun features that keep you coming back.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start mb-6">
                <div className="h-12 w-12 rounded-2xl bg-green-100 flex items-center justify-center mr-4">
                  <Gift className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Daily Rewards</h3>
                  <p className="text-gray-600">
                    Log in daily to collect rewards, bonus XP, and special items to help you on your fitness journey.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-700">Daily Reward Progress</span>
                  <span className="text-sm text-gray-500">Day 5/7</span>
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                    <div
                      key={day}
                      className={`aspect-square rounded-lg flex items-center justify-center ${
                        day <= 5 ? "bg-green-100 text-green-600 border-2 border-green-300" : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {day < 5 ? (
                        <CheckCircle2 className="h-5 w-5" />
                      ) : day === 5 ? (
                        <div className="h-6 w-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold">
                          5
                        </div>
                      ) : (
                        <div className="h-6 w-6 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-xs font-bold">
                          {day}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-3 text-center text-sm text-gray-500">Complete 7 days for a special reward!</div>
              </div>
            </div>

            <div className="bg-gray p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start mb-6">
                <div className="h-12 w-12 rounded-2xl bg-purple-100 flex items-center justify-center mr-4">
                  <Star className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Achievements & Badges</h3>
                  <p className="text-gray-600">
                    Unlock special badges and achievements as you hit fitness milestones and complete challenges.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {["Beginner", "Jump Master", "Strength Pro", "Early Bird"].map((badge, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      className={`h-16 w-16 rounded-full ${
                        index < 3 ? "bg-purple-100" : "bg-gray-100"
                      } flex items-center justify-center mb-2`}
                    >
                      {index < 3 ? (
                        <Star className={`h-8 w-8 text-purple-500`} />
                      ) : (
                        <Star className="h-8 w-8 text-gray-300" />
                      )}
                    </div>
                    <span className={`text-xs font-medium ${index < 3 ? "text-gray-900" : "text-gray-400"}`}>
                      {badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start mb-6">
                <div className="h-12 w-12 rounded-2xl bg-orange-100 flex items-center justify-center mr-4">
                  <Flame className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Streak Protection</h3>
                  <p className="text-gray-600">
                    Life happens! Use streak freezes to protect your streak on days you can't work out.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-bold text-gray-700">Your Streak</span>
                  <div className="flex items-center gap-1">
                    <Flame className="h-5 w-5 text-orange-500" />
                    <span className="font-bold text-orange-500">12 days</span>
                  </div>
                </div>
                <div className="flex gap-2 mb-4">
                  {Array(7)
                    .fill(0)
                    .map((_, i) => (
                      <div key={i} className="flex-1 h-2 bg-orange-100 rounded-full overflow-hidden">
                        <div className="h-full bg-orange-500 w-full"></div>
                      </div>
                    ))}
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-500 font-bold text-xs">2</span>
                    </div>
                    <span className="text-sm text-gray-600">Streak Freezes Available</span>
                  </div>
                  <Button variant="outline" size="sm" className="text-xs">
                    Use Freeze
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-gray p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start mb-6">
                <div className="h-12 w-12 rounded-2xl bg-blue-100 flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Friend Challenges</h3>
                  <p className="text-gray-600">
                    Challenge friends to fitness duels and see who can earn the most points in a week.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-bold text-gray-700">Weekly Challenge</span>
                  <span className="text-sm text-gray-500">3 days left</span>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200"></div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">You</span>
                      <span className="text-sm font-medium">245 XP</span>
                    </div>
                    <Progress value={65} className="h-2 bg-gray-200" indicatorClassName="bg-blue-500" />
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200"></div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Sarah</span>
                      <span className="text-sm font-medium">310 XP</span>
                    </div>
                    <Progress value={85} className="h-2 bg-gray-200" indicatorClassName="bg-red-500" />
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                    Challenge More Friends
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Level Progress */}
      <section className="py-20 bg-gray">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold tracking-tight mb-4 text-gray-900">Level Up Your Fitness</h2>
              <p className="text-xl text-gray-600">
                Track your progress, earn XP, and unlock new levels as you improve your fitness.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl">
              <div className="flex items-center gap-6 mb-8">
                <div className="h-20 w-20 rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="text-purple-500 font-extrabold text-2xl">12</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-2">
                    <span className="font-bold text-gray-900">Current Level</span>
                    <span className="text-purple-500 font-bold">1,240 / 1,500 XP</span>
                  </div>
                  <Progress value={82} className="h-3 bg-gray-200" indicatorClassName="bg-purple-500" />
                  <p className="text-sm text-gray-500 mt-2">260 XP needed to reach Level 13</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-gray p-4 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                      <Zap className="h-5 w-5 text-green-500" />
                    </div>
                    <span className="font-bold text-gray-900">Daily Workout</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Complete today's workout challenge</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Rewards</span>
                    <span className="text-sm font-bold text-purple-500">+50 XP</span>
                  </div>
                </div>

                <div className="bg-gray p-4 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                      <Flame className="h-5 w-5 text-orange-500" />
                    </div>
                    <span className="font-bold text-gray-900">3-Day Streak</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Keep your streak for 3 more days</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Rewards</span>
                    <span className="text-sm font-bold text-purple-500">+100 XP</span>
                  </div>
                </div>

                <div className="bg-gray p-4 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Users className="h-5 w-5 text-blue-500" />
                    </div>
                    <span className="font-bold text-gray-900">Win Challenge</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Beat Sarah in the weekly challenge</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Rewards</span>
                    <span className="text-sm font-bold text-purple-500">+200 XP</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button className="bg-purple-500 hover:bg-purple-600 gap-2">
                  View All Challenges <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-emerald-600 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight mb-4">Ready to Make Fitness Fun?</h2>
          <p className="text-xl md:w-3/4 mx-auto mb-8">
            Join thousands of users who are turning their fitness journey into an exciting game. Start your streak
            today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg rounded-xl">
              Start Your Streak
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-green-600 text-lg rounded-xl"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

