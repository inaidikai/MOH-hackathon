import { Trophy, Users, Star, Flame, Zap, Medal, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export default function LeaderboardPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-gray-900">Leaderboard</h1>
          <p className="text-xl text-gray-600 md:w-3/4 mx-auto">
            Compete with friends and the community. Climb the ranks and show off your fitness achievements!
          </p>
        </div>
      </section>

      {/* Your Stats */}
      <section className="py-8">
        <div className="container px-4 md:px-6">
          <div className="bg-gray rounded-3xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="h-16 w-16 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Your Stats</h3>
                    <div className="flex items-center gap-4 mt-1">
                      <div className="flex items-center gap-1 text-orange-500">
                        <Flame className="h-4 w-4" />
                        <span className="font-bold">12</span>
                        <span className="text-xs text-gray-500">day streak</span>
                      </div>
                      <div className="flex items-center gap-1 text-purple-500">
                        <Trophy className="h-4 w-4" />
                        <span className="font-bold">1,240</span>
                        <span className="text-xs text-gray-500">XP</span>
                      </div>
                      <div className="flex items-center gap-1 text-green-500">
                        <Star className="h-4 w-4" />
                        <span className="font-bold">Level 12</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full">
                    <Trophy className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium text-green-600">Rank #42 Global</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              <div className="p-6 text-center">
                <p className="text-sm text-gray-500 mb-1">Weekly XP</p>
                <p className="text-3xl font-bold text-purple-600">245</p>
                <p className="text-xs text-gray-500 mt-1">+45 from last week</p>
              </div>
              <div className="p-6 text-center">
                <p className="text-sm text-gray-500 mb-1">Workouts Completed</p>
                <p className="text-3xl font-bold text-blue-600">23</p>
                <p className="text-xs text-gray-500 mt-1">This month</p>
              </div>
              <div className="p-6 text-center">
                <p className="text-sm text-gray-500 mb-1">Achievements</p>
                <p className="text-3xl font-bold text-green-600">8/24</p>
                <p className="text-xs text-gray-500 mt-1">Unlocked</p>
              </div>
              <div className="p-6 text-center">
                <p className="text-sm text-gray-500 mb-1">Challenges Won</p>
                <p className="text-3xl font-bold text-orange-600">5</p>
                <p className="text-xs text-gray-500 mt-1">This season</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leaderboard Tabs */}
      <section className="py-8">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="global" className="w-full">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <TabsList className="mb-4 md:mb-0 bg-gray p-1 rounded-xl">
                <TabsTrigger
                  value="global"
                  className="rounded-lg data-[state=active]:bg-green-50 data-[state=active]:text-green-600 gap-2"
                >
                  <Trophy className="h-4 w-4" /> Global
                </TabsTrigger>
                <TabsTrigger
                  value="friends"
                  className="rounded-lg data-[state=active]:bg-green-50 data-[state=active]:text-green-600 gap-2"
                >
                  <Users className="h-4 w-4" /> Friends
                </TabsTrigger>
                <TabsTrigger
                  value="challenges"
                  className="rounded-lg data-[state=active]:bg-green-50 data-[state=active]:text-green-600 gap-2"
                >
                  <Star className="h-4 w-4" /> Challenges
                </TabsTrigger>
              </TabsList>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-gray rounded-lg p-1 border border-gray-200">
                  <Button variant="ghost" size="sm" className="rounded-md text-xs px-3 bg-green-50 text-green-600">
                    This Week
                  </Button>
                  <Button variant="ghost" size="sm" className="rounded-md text-xs px-3 text-gray-500">
                    This Month
                  </Button>
                  <Button variant="ghost" size="sm" className="rounded-md text-xs px-3 text-gray-500">
                    All Time
                  </Button>
                </div>
              </div>
            </div>

            <TabsContent value="global" className="mt-0">
              <div className="bg-gray rounded-3xl shadow-sm overflow-hidden">
                <div className="p-4 bg-green-50 border-b border-gray-200">
                  <div className="grid grid-cols-12 text-sm font-medium text-gray-500">
                    <div className="col-span-1 text-center">#</div>
                    <div className="col-span-5">User</div>
                    <div className="col-span-2 text-center">Level</div>
                    <div className="col-span-2 text-center">Streak</div>
                    <div className="col-span-2 text-center">Weekly XP</div>
                  </div>
                </div>

                <div className="divide-y divide-gray-100">
                  {/* Top 3 with special styling */}
                  <div className="grid grid-cols-12 items-center p-4 bg-gradient-to-r from-yellow-50 to-yellow-100">
                    <div className="col-span-1 text-center">
                      <div className="h-8 w-8 rounded-full bg-yellow-100 border-2 border-yellow-400 flex items-center justify-center mx-auto">
                        <Medal className="h-4 w-4 text-yellow-600" />
                      </div>
                    </div>
                    <div className="col-span-5 flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                      <div>
                        <p className="font-bold text-gray-900">Sarah Johnson</p>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-yellow-500" fill="currentColor" />
                          <Star className="h-3 w-3 text-yellow-500" fill="currentColor" />
                          <Star className="h-3 w-3 text-yellow-500" fill="currentColor" />
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2 text-center">
                      <span className="font-bold text-green-600">Lvl 24</span>
                    </div>
                    <div className="col-span-2 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Flame className="h-4 w-4 text-orange-500" />
                        <span className="font-bold text-orange-500">64</span>
                      </div>
                    </div>
                    <div className="col-span-2 text-center font-bold text-purple-600">2,112</div>
                  </div>

                  <div className="grid grid-cols-12 items-center p-4 bg-gradient-to-r from-gray-50 to-gray-100">
                    <div className="col-span-1 text-center">
                      <div className="h-8 w-8 rounded-full bg-gray-100 border-2 border-gray-300 flex items-center justify-center mx-auto">
                        <Medal className="h-4 w-4 text-gray-500" />
                      </div>
                    </div>
                    <div className="col-span-5 flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                      <div>
                        <p className="font-bold text-gray-900">Mike Thompson</p>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-gray-400" fill="currentColor" />
                          <Star className="h-3 w-3 text-gray-400" fill="currentColor" />
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2 text-center">
                      <span className="font-bold text-green-600">Lvl 21</span>
                    </div>
                    <div className="col-span-2 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Flame className="h-4 w-4 text-orange-500" />
                        <span className="font-bold text-orange-500">42</span>
                      </div>
                    </div>
                    <div className="col-span-2 text-center font-bold text-purple-600">1,845</div>
                  </div>

                  <div className="grid grid-cols-12 items-center p-4 bg-gradient-to-r from-orange-50 to-orange-100">
                    <div className="col-span-1 text-center">
                      <div className="h-8 w-8 rounded-full bg-orange-100 border-2 border-orange-300 flex items-center justify-center mx-auto">
                        <Medal className="h-4 w-4 text-orange-600" />
                      </div>
                    </div>
                    <div className="col-span-5 flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                      <div>
                        <p className="font-bold text-gray-900">Alex Rodriguez</p>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-orange-400" fill="currentColor" />
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2 text-center">
                      <span className="font-bold text-green-600">Lvl 19</span>
                    </div>
                    <div className="col-span-2 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Flame className="h-4 w-4 text-orange-500" />
                        <span className="font-bold text-orange-500">38</span>
                      </div>
                    </div>
                    <div className="col-span-2 text-center font-bold text-purple-600">1,632</div>
                  </div>

                  {/* Regular entries */}
                  {[4, 5, 6, 7, 8, 9, 10].map((position) => (
                    <div key={position} className="grid grid-cols-12 items-center p-4 hover:bg-gray-50">
                      <div className="col-span-1 text-center text-gray-500 font-medium">{position}</div>
                      <div className="col-span-5 flex items-center">
                        <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                        <div>
                          <p className="font-bold text-gray-900">User Name</p>
                          <div className="flex items-center gap-1">
                            {position <= 5 && <Star className="h-3 w-3 text-gray-400" fill="currentColor" />}
                          </div>
                        </div>
                      </div>
                      <div className="col-span-2 text-center">
                        <span className="font-bold text-green-600">Lvl {Math.max(10, 20 - position)}</span>
                      </div>
                      <div className="col-span-2 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <Flame className="h-4 w-4 text-orange-500" />
                          <span className="font-bold text-orange-500">{Math.max(10, 45 - position * 3)}</span>
                        </div>
                      </div>
                      <div className="col-span-2 text-center font-medium text-purple-600">{1600 - position * 80}</div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <div className="p-4 border-t border-gray-200 flex items-center justify-between">
                  <p className="text-sm text-gray-500">Showing 1-10 of 156 users</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="rounded-lg" disabled>
                      Previous
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-lg">
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="friends" className="mt-0">
              <div className="bg-gray rounded-3xl shadow-sm p-8">
                <div className="max-w-md mx-auto text-center">
                  <div className="h-24 w-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <Users className="h-12 w-12 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Connect with Friends</h3>
                  <p className="text-gray-600 mb-6">
                    Add friends to see how you compare and challenge them to fitness duels. Compete together and
                    motivate each other!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="gap-2 bg-green-500 hover:bg-green-600">
                      Find Friends <Users className="h-4 w-4" />
                    </Button>
                    <Button variant="outline">Invite via Email</Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="challenges" className="mt-0">
              <div className="bg-gray rounded-3xl shadow-sm p-8">
                <div className="text-center mb-8">
                  <div className="h-16 w-16 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Active Challenges</h3>
                  <p className="text-gray-600">
                    Join or create challenges to compete with others and earn special rewards.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 border border-gray-200 rounded-2xl hover:shadow-sm transition-shadow bg-gradient-to-r from-green-50 to-green-100">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                          <Zap className="h-5 w-5 text-green-500" />
                        </div>
                        <h4 className="font-bold text-gray-900">Weekly Jump Challenge</h4>
                      </div>
                      <span className="text-xs bg-green-200 text-green-700 px-2 py-1 rounded-full">Active</span>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Complete 500 jumps this week to earn bonus XP and a special badge.
                    </p>
                    <div className="mb-4">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-500">Your progress</span>
                        <span className="text-sm font-medium">325/500</span>
                      </div>
                      <Progress value={65} className="h-2" indicatorClassName="bg-green-500" />
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="h-6 w-6 rounded-full bg-gray-200 border-2 border-white"></div>
                        ))}
                        <div className="h-6 w-6 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs">
                          +19
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-green-600 border-green-200 bg-green-50 hover:bg-green-100"
                      >
                        View Challenge
                      </Button>
                    </div>
                  </div>

                  <div className="p-6 border border-gray-200 rounded-2xl hover:shadow-sm transition-shadow bg-gradient-to-r from-purple-50 to-purple-100">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                          <Trophy className="h-5 w-5 text-purple-500" />
                        </div>
                        <h4 className="font-bold text-gray-900">Strength Master</h4>
                      </div>
                      <span className="text-xs bg-yellow-200 text-yellow-700 px-2 py-1 rounded-full">Ending Soon</span>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Achieve the highest pulling strength score this month for a rare trophy.
                    </p>
                    <div className="mb-4">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-500">Your rank</span>
                        <span className="text-sm font-medium">#3 of 47</span>
                      </div>
                      <Progress value={85} className="h-2" indicatorClassName="bg-purple-500" />
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="h-6 w-6 rounded-full bg-gray-200 border-2 border-white"></div>
                        ))}
                        <div className="h-6 w-6 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs">
                          +43
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-purple-600 border-purple-200 bg-purple-50 hover:bg-purple-100"
                      >
                        View Challenge
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Button className="bg-yellow-500 hover:bg-yellow-600 gap-2">
                    Create Challenge <Star className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Achievements Showcase */}
      <section className="py-12 bg-gray">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-extrabold tracking-tight mb-2 text-gray-900">Your Achievements</h2>
            <p className="text-gray-600">Showcase your badges and trophies earned through your fitness journey.</p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {["Beginner", "Jump Master", "Strength Pro", "Early Bird", "Streak Hero", "Challenge Winner"].map(
                (badge, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      className={`h-20 w-20 rounded-full ${
                        index < 4 ? "bg-gradient-to-br from-purple-400 to-purple-600" : "bg-gray-200"
                      } flex items-center justify-center mb-2`}
                    >
                      {index < 4 ? (
                        <Star className={`h-10 w-10 text-white`} />
                      ) : (
                        <Star className="h-10 w-10 text-gray-400" />
                      )}
                    </div>
                    <span className={`text-sm font-medium ${index < 4 ? "text-gray-900" : "text-gray-400"}`}>
                      {badge}
                    </span>
                  </div>
                ),
              )}
            </div>

            <div className="mt-6 text-center">
              <Button variant="outline" className="gap-2">
                View All Achievements <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-gradient-to-r from-green-500 to-emerald-600 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-2xl font-extrabold tracking-tight mb-4">Ready to Climb the Ranks?</h2>
          <p className="md:w-3/4 mx-auto mb-6">
            Join the GymGo community today and start earning XP, unlocking achievements, and competing with friends!
          </p>
          <Button variant="secondary" size="lg" className="rounded-xl">
            Start Your Fitness Journey
          </Button>
        </div>
      </section>
    </main>
  )
}

