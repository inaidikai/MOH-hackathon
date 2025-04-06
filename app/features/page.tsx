import { Mic, Activity, Trophy, Users, Share2, Zap, Smartphone, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FeaturesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-100">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">App Features</h1>
          <p className="text-xl text-gray-600 md:w-3/4 mx-auto">
            Discover how our AI-powered fitness app transforms your workout experience with cutting-edge technology and
            interactive features.
          </p>
        </div>
      </section>

      {/* Voice Activation */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600 mb-4">
                <Mic className="h-4 w-4 mr-2" /> Voice Technology
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Voice-Activated Exercise Guidance</h2>
              <p className="text-gray-600 mb-6">
                Control your workout experience hands-free with our advanced voice recognition technology. Simply speak
                to your device to:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 text-xs">✓</span>
                  </div>
                  <span>Start, pause, or end workout sessions</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 text-xs">✓</span>
                  </div>
                  <span>Ask for exercise instructions and demonstrations</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 text-xs">✓</span>
                  </div>
                  <span>Request real-time performance feedback</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 text-xs">✓</span>
                  </div>
                  <span>Log completed exercises and track progress</span>
                </li>
              </ul>
              <Button>Try Voice Commands</Button>
            </div>
            <div className="bg-gray p-6 rounded-xl shadow-md">
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <img
                  src="../image.png?height=300&width=500"
                  alt="Voice activation interface"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-medium mb-2">Example Voice Commands:</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>"Start jump workout"</li>
                  <li>"How many jumps have I done today?"</li>
                  <li>"Set timer for 30 seconds"</li>
                  <li>"Show my progress this week"</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sensor Integration */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gray p-6 rounded-xl shadow-md">
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <img
                    src="../image copy.png?height=300&width=500"
                    alt="Sensor technology visualization"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg text-center">
                    <p className="text-2xl font-bold text-green-600">127</p>
                    <p className="text-sm text-gray-500">Jumps Today</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg text-center">
                    <p className="text-2xl font-bold text-purple-600">42 kg</p>
                    <p className="text-sm text-gray-500">Force Applied</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm text-green-600 mb-4">
                <Activity className="h-4 w-4 mr-2" /> Sensor Technology
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Precision Sensor Integration</h2>
              <p className="text-gray-600 mb-6">
                Our advanced pressure and force sensors track every aspect of your workout with incredible accuracy. The
                sensors connect seamlessly with the app to:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span>Count jumps and repetitions automatically</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span>Measure force and power output during exercises</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span>Track movement patterns and form</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <span>Convert workout data into points and achievements</span>
                </li>
              </ul>
              <Button variant="outline">Learn About Our Sensors</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Points & Leaderboard */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-600 mb-4">
                <Trophy className="h-4 w-4 mr-2" /> Gamification
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Points & Leaderboard System</h2>
              <p className="text-gray-600 mb-6">
                Turn your fitness journey into an exciting game with our points system and competitive leaderboards.
                Stay motivated and track your progress:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-purple-600 text-xs">✓</span>
                  </div>
                  <span>Earn points for every jump, rep, and completed workout</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-purple-600 text-xs">✓</span>
                  </div>
                  <span>Unlock achievements and badges as you progress</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-purple-600 text-xs">✓</span>
                  </div>
                  <span>Compare your performance with friends and the community</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-purple-600 text-xs">✓</span>
                  </div>
                  <span>Track your progress over time with detailed analytics</span>
                </li>
              </ul>
              <Button>View Leaderboard</Button>
            </div>
            <div className="bg-gray p-6 rounded-xl shadow-md">
              <div className="bg-purple-50 p-4 rounded-lg mb-4">
                <h3 className="font-medium mb-2 flex items-center">
                  <Trophy className="h-5 w-5 text-purple-600 mr-2" /> Weekly Leaderboard
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-2 bg-gray rounded-lg">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                        <span className="text-purple-600 font-bold">1</span>
                      </div>
                      <span>Sarah J.</span>
                    </div>
                    <span className="font-bold">1,245 pts</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray rounded-lg">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                        <span className="text-purple-600 font-bold">2</span>
                      </div>
                      <span>Mike T.</span>
                    </div>
                    <span className="font-bold">1,120 pts</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray rounded-lg">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                        <span className="text-purple-600 font-bold">3</span>
                      </div>
                      <span>Alex R.</span>
                    </div>
                    <span className="font-bold">987 pts</span>
                  </div>
                </div>
              </div>
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <img
                  src="/image copy 2.png?height=200&width=400"
                  alt="Points system visualization"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Duels */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gray p-6 rounded-xl shadow-md">
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <img
                    src="/a-fitness-girl-and-another-fitness-guy-i_BsiCaw4nTEGmRuqsewwuqw_oqe8zCwuTzm56ll95akv4g.jpeg?height=300&width=500"
                    alt="Challenge duel interface"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h3 className="font-medium mb-2">Active Challenge</h3>
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <div className="h-12 w-12 rounded-full bg-gray-200 mx-auto mb-1"></div>
                      <p className="text-sm font-medium">You</p>
                      <p className="text-lg font-bold text-orange-600">87 pts</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-500">Jump Challenge</p>
                      <p className="text-xs">2:45 remaining</p>
                    </div>
                    <div className="text-center">
                      <div className="h-12 w-12 rounded-full bg-gray-200 mx-auto mb-1"></div>
                      <p className="text-sm font-medium">John</p>
                      <p className="text-lg font-bold text-orange-600">92 pts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-sm text-orange-600 mb-4">
                <Users className="h-4 w-4 mr-2" /> Social Fitness
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Challenge Duels</h2>
              <p className="text-gray-600 mb-6">
                Make fitness more fun by challenging friends or community members to real-time workout duels. Our
                challenge system lets you:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-orange-100 flex items-center justify-center">
                    <span className="text-orange-600 text-xs">✓</span>
                  </div>
                  <span>Invite friends to timed workout competitions</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-orange-100 flex items-center justify-center">
                    <span className="text-orange-600 text-xs">✓</span>
                  </div>
                  <span>Compete in real-time with live score updates</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-orange-100 flex items-center justify-center">
                    <span className="text-orange-600 text-xs">✓</span>
                  </div>
                  <span>Join community challenges with multiple participants</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-orange-100 flex items-center justify-center">
                    <span className="text-orange-600 text-xs">✓</span>
                  </div>
                  <span>Share results and celebrate victories on social media</span>
                </li>
              </ul>
              <Button variant="outline">Start a Challenge</Button>
            </div>
          </div>
        </div>
      </section>

      {/* More Features */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">More Powerful Features</h2>
            <p className="text-gray-600 md:w-3/4 mx-auto">
              Our app is packed with features designed to enhance your fitness journey and make tracking your progress
              easier than ever.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-gray rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Share2 className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-medium mb-2">Social Sharing</h3>
              <p className="text-gray-500 text-sm">
                Share your achievements and progress with friends on social media platforms.
              </p>
            </div>

            <div className="p-6 bg-gray rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <BarChart className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-lg font-medium mb-2">Detailed Analytics</h3>
              <p className="text-gray-500 text-sm">
                Track your progress with comprehensive charts and performance metrics.
              </p>
            </div>

            <div className="p-6 bg-gray rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Zap className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-medium mb-2">AI Workout Suggestions</h3>
              <p className="text-gray-500 text-sm">
                Get personalized workout recommendations based on your performance and goals.
              </p>
            </div>

            <div className="p-6 bg-gray rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Smartphone className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-lg font-medium mb-2">Mobile Accessibility</h3>
              <p className="text-gray-500 text-sm">
                Access your fitness data anywhere with our fully responsive mobile application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Transform Your Fitness Journey?</h2>
          <p className="md:w-3/4 mx-auto mb-8">
            Join thousands of users who are already experiencing the future of fitness tracking.
          </p>
          <Button variant="secondary" size="lg">
            Download Now
          </Button>
        </div>
      </section>
    </main>
  )
}

