"use client"
import ElevenLabsWidget from "./ElevenLabsWidget"; 
import { useState, useEffect, useRef } from "react"
import { Mic, Play, Pause, SkipForward, Volume2, Flame, Trophy, Heart, Gift, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Define the SpeechRecognition type
interface SpeechRecognitionEvent extends Event {
  results: {
    [index: number]: {
      [index: number]: {
        transcript: string
      }
    }
  }
  error?: string
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean
  lang: string
  interimResults: boolean
  start: () => void
  stop: () => void
  onresult: (event: SpeechRecognitionEvent) => void
  onerror: (event: any) => void
  onend: () => void
}

// Add the global declarations
declare global {
  var SpeechRecognition:
    | {
        new (): SpeechRecognition
      }
    | undefined
  var webkitSpeechRecognition:
    | {
        new (): SpeechRecognition
      }
    | undefined
}

export default function DemoPage() {
  
  const [isListening, setIsListening] = useState(false)
  const [jumpCount, setJumpCount] = useState(0)
  const [xp, setXp] = useState(0)
  const [workoutActive, setWorkoutActive] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(60)
  const [message, setMessage] = useState("Press the microphone to start")
  const [hearts, setHearts] = useState(5)
  const [streak, setStreak] = useState(0)
  const [showReward, setShowReward] = useState(false)
  const recognitionRef = useRef<SpeechRecognition | null>(null)

  const startVoiceRecognition = () => {
    if (!isListening) {
      setIsListening(true)
      setMessage("Listening...")

      // Check if browser supports SpeechRecognition
      const SpeechRecognitionAPI =
        typeof window !== "undefined" ? window.SpeechRecognition || window.webkitSpeechRecognition : undefined

      if (!SpeechRecognitionAPI) {
        setMessage("Voice recognition not supported in this browser.")
        setIsListening(false)
        return
      }

      const recognition = new SpeechRecognitionAPI()
      recognitionRef.current = recognition

      recognition.continuous = false
      recognition.lang = "en-US"
      recognition.interimResults = false

      recognition.onresult = (event) => {
        const command = event.results[0][0].transcript
        setMessage(`Voice detected: "${command}"`)
        processCommand(command)
      }

      recognition.onerror = (event) => {
        setMessage(`Error: ${event.error}`)
        setIsListening(false)
      }

      recognition.onend = () => {
        setIsListening(false)
      }

      recognition.start()
    }
  }

  const handleVoiceCommand = () => {
    if (isListening) {
      if (recognitionRef.current) {
        recognitionRef.current.stop()
      }
      setIsListening(false)
    } else {
      // Try to use real voice recognition, fall back to simulation if not available
      try {
        startVoiceRecognition()
      } catch (error) {
        // Fall back to simulated voice commands
        simulateVoiceCommand()
      }
    }
  }

  // Simulate voice commands as a fallback
  const simulateVoiceCommand = () => {
    setIsListening(true)

    setTimeout(() => {
      const commands = ["Start jump workout", "Count my jumps", "How many XP do I have?", "End workout"]
      const randomCommand = commands[Math.floor(Math.random() * commands.length)]
      setMessage(`Voice detected: "${randomCommand}"`)

      setTimeout(() => {
        processCommand(randomCommand)
        setIsListening(false)
      }, 1000)
    }, 1500)
  }

  const processCommand = (command: string) => {
    if (command.toLowerCase().includes("start") && command.toLowerCase().includes("jump")) {
      startWorkout()
    } else if (command.toLowerCase().includes("count") && command.toLowerCase().includes("jumps")) {
      setMessage(`You have completed ${jumpCount} jumps so far.`)
    } else if (command.toLowerCase().includes("xp")) {
      setMessage(`You currently have ${xp} XP.`)
    } else if (command.toLowerCase().includes("end")) {
      endWorkout()
    } else {
      setMessage(`Command not recognized. Try saying "Start jump workout" or "Count my jumps".`)
    }
  }

  const startWorkout = () => {
    setWorkoutActive(true)
    setMessage("Workout started! Jump now!")
    if (hearts < 5) {
      setHearts(hearts - 1)
    }
  }

  const endWorkout = () => {
    setWorkoutActive(false)
    const earnedXp = jumpCount * 2
    setXp(xp + earnedXp)
    setStreak(streak + 1)

    setMessage(`Workout complete! You earned ${earnedXp} XP from ${jumpCount} jumps.`)

    if (jumpCount >= 10) {
      setTimeout(() => {
        setShowReward(true)
      }, 1000)
    } else {
      // Reset for next workout
      setTimeout(() => {
        setJumpCount(0)
        setTimeRemaining(60)
        setMessage("Press the microphone to start")
      }, 3000)
    }
  }

  // Handle reward claim
  const claimReward = () => {
    setXp(xp + 50)
    setShowReward(false)
    setJumpCount(0)
    setTimeRemaining(60)
    setMessage("Press the microphone to start")
  }

  // Add device motion detection when available
  useEffect(() => {
    if (workoutActive && typeof window !== "undefined" && window.DeviceMotionEvent) {
      const handleMotion = (event: DeviceMotionEvent) => {
        const acceleration = event.acceleration
        if (
          acceleration &&
          (Math.abs(acceleration.x || 0) > 10 ||
            Math.abs(acceleration.y || 0) > 10 ||
            Math.abs(acceleration.z || 0) > 15)
        ) {
          // Detected a jump-like motion
          setJumpCount((prev) => prev + 1)
          setMessage(`Jump detected! Total: ${jumpCount + 1}`)
        }
      }

      window.addEventListener("devicemotion", handleMotion)
      return () => window.removeEventListener("devicemotion", handleMotion)
    }
  }, [workoutActive, jumpCount])

  // Simulate jump detection as fallback
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (workoutActive) {
      interval = setInterval(() => {
        // Simulate random jumps
        if (Math.random() > 0.5) {
          const newJumps = jumpCount + 1
          setJumpCount(newJumps)

          setMessage(`Jump detected! Total: ${newJumps}`)
        }

        // Update timer
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(interval)
            endWorkout()
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [workoutActive, jumpCount])

  // Cleanup speech recognition on unmount
  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop()
      }
    }
  }, [])

  return (
    <main className="min-h-screen py-12 bg-gradient-to-b from-green-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold tracking-tight mb-2 text-gray-900">Try GymGo</h1>
            <p className="text-gray-600">Experience a simplified version of our gamified fitness tracking app.</p>
          </div>

          {/* Gamification Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
          <Card className="bg-white bg-opacity-90 border border-orange-200 shadow-md">
              <CardContent className="p-4 flex flex-col items-center">
                <Flame className="h-8 w-8 text-orange-500 mb-2" />
                <p className="text-xs text-gray-600">Current Streak</p>
                <p className="text-2xl font-bold text-orange-500">{streak} days</p>
              </CardContent>
            </Card>
            <Card className="bg-white bg-opacity-90 border border-orange-200 shadow-md">
              <CardContent className="p-4 flex flex-col items-center">
                <Trophy className="h-8 w-8 text-purple-500 mb-2" />
                <p className="text-xs text-gray-600">Total XP</p>
                <p className="text-2xl font-bold text-purple-500">{xp}</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
              <CardContent className="p-4 flex flex-col items-center">
                <div className="flex mb-2">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Heart
                        key={i}
                        className={`h-6 w-6 ${i < hearts ? "text-red-500" : "text-gray-300"}`}
                        fill={i < hearts ? "currentColor" : "none"}
                      />
                    ))}
                </div>
                <p className="text-xs text-gray-600">Lives Remaining</p>
                <p className="text-lg font-bold text-red-500">{hearts}/5</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8 border-green-200">
  <CardHeader className="bg-green-50 border-b border-green-100">
    <CardTitle className="text-gray-900">AI Exercise Tracker Demo</CardTitle>
    <CardDescription>
      Try out our motion-powered AI tracker.
    </CardDescription>
  </CardHeader>

  <CardContent className="flex flex-col items-center justify-center p-6">
    <a
      href="https://motionsensor.onrender.com"
      className="bg-green-600 hover:bg-green-700 text-white text-sm px-6 py-2 rounded-full font-medium transition-colors"
    >
      Try Me
    </a>
  </CardContent>
</Card>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-blue-200">
              <CardHeader className="bg-blue-50 border-b border-blue-100">
                <CardTitle className="text-gray-900">Workout Status</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Time Remaining</span>
                      <span className="text-sm font-medium">{timeRemaining}s</span>
                    </div>
                    <Progress value={(timeRemaining / 60) * 100} className="h-2" indicatorClassName="bg-blue-500" />
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Status</p>
                      <p className="font-medium">
                        {workoutActive ? (
                          <span className="text-green-600">Active</span>
                        ) : (
                          <span className="text-gray-500">Inactive</span>
                        )}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant={workoutActive ? "outline" : "default"}
                        onClick={() => (workoutActive ? endWorkout() : startWorkout())}
                        className={workoutActive ? "border-red-200 text-red-600" : "bg-green-500 hover:bg-green-600"}
                      >
                        {workoutActive ? <Pause className="h-4 w-4 mr-1" /> : <Play className="h-4 w-4 mr-1" />}
                        {workoutActive ? "Pause" : "Start"}
                      </Button>
                      <Button size="sm" variant="outline" onClick={endWorkout} className="border-gray-200">
                        <SkipForward className="h-4 w-4 mr-1" /> End
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-200">
              <CardHeader className="bg-purple-50 border-b border-purple-100">
                <CardTitle className="text-gray-900">Performance</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-xl text-center">
                    <p className="text-sm text-gray-500 mb-1">Jumps</p>
                    <p className="text-3xl font-bold text-blue-600">{jumpCount}</p>
                    <p className="text-xs text-gray-500 mt-1">Goal: 10 jumps</p>
                    <Progress value={(jumpCount / 10) * 100} className="h-2 mt-2" indicatorClassName="bg-blue-500" />
                  </div>
                  <div className="bg-purple-50 p-4 rounded-xl text-center">
                    <p className="text-sm text-gray-500 mb-1">XP to Earn</p>
                    <p className="text-3xl font-bold text-purple-600">{jumpCount * 2}</p>
                    <p className="text-xs text-gray-500 mt-1">+2 XP per jump</p>
                    <Progress
                      value={((jumpCount * 2) / 50) * 100}
                      className="h-2 mt-2"
                      indicatorClassName="bg-purple-500"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader className="bg-green-50 border-b border-green-100">
              <CardTitle className="text-gray-900">Sensor Simulation</CardTitle>
              <CardDescription>
                This demo simulates the sensor data that would be collected from our physical sensors.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="bg-gray-50 p-4 rounded-xl mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Jump Force</span>
                  <span className="text-sm text-gray-500">
                    {workoutActive ? `${Math.floor(Math.random() * 50) + 30} kg` : "0 kg"}
                  </span>
                </div>
                <Progress
                  value={workoutActive ? Math.random() * 100 : 0}
                  className="h-2 mb-4"
                  indicatorClassName="bg-green-500"
                />

                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Jump Height</span>
                  <span className="text-sm text-gray-500">
                    {workoutActive ? `${Math.floor(Math.random() * 20) + 10} cm` : "0 cm"}
                  </span>
                </div>
                <Progress
                  value={workoutActive ? Math.random() * 100 : 0}
                  className="h-2"
                  indicatorClassName="bg-green-500"
                />
              </div>
              <div>
      <h2>Another Section</h2>
      <ElevenLabsWidget />
       {<div className="fixed bottom-3 right-6 flex items-center gap-2 z-50">
  <span className="bg-green-500 text-white text-xl px-9 py-9 rounded-full shadow-lg flex items-center gap-2">
    <span role="img" aria-label="robot">🤖</span>
    AI Fitness Bud........
        </span>
</div>
}
    </div>
              <div className="text-center text-sm text-gray-500">
                <p>In the full app, real-time data from pressure and force sensors would be displayed here.</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t border-gray-100 p-4">
              <div className="flex items-center text-sm text-gray-500">
                <Volume2 className="h-4 w-4 mr-1" /> Sensor feedback enabled
              </div>
              <Button variant="outline" size="sm" className="border-green-200 text-green-600">
                Calibrate Sensors
              </Button>
            </CardFooter>
          </Card>

          {/* Reward Modal */}
          {showReward && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-gray rounded-3xl p-8 max-w-md mx-4 text-center animate-bounce-slow">
                <div className="h-24 w-24 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-4">
                  <Gift className="h-12 w-12 text-yellow-500" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Challenge Complete!</h3>
                <p className="text-gray-600 mb-6">
                  Congratulations! You've completed 10+ jumps and earned a bonus reward!
                </p>
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full">
                    <Trophy className="h-5 w-5 text-purple-500" />
                    <span className="font-bold text-purple-600">+50 XP</span>
                  </div>
                  <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                    <Star className="h-5 w-5 text-green-500" />
                    <span className="font-bold text-green-600">New Badge</span>
                  </div>
                </div>
                <Button
                  onClick={claimReward}
                  className="bg-yellow-500 hover:bg-yellow-600 text-lg px-8 py-6 rounded-xl"
                >
                  Claim Reward!
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

