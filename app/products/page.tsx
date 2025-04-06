import Link from "next/link"
import { ArrowRight, Bluetooth, Zap, Shield, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-100">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-6">
                Gymgo - Portable Powered Gym
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Lightweight and compact system allowing users to exercise anywhere-making fitness more accessible and flexible
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2">
                  Shop Now <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gray rounded-xl shadow-2xl overflow-hidden">
                <img
                  src="/WhatsApp Image 2025-04-06 at 07.54.54.jpeg?height=500&width=500"
                  alt="Fitness sensor product"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gray p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Bluetooth className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Wireless</p>
                    <p className="font-medium">Bluetooth 5.0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Sensor Features</h2>
            <p className="text-gray-600 md:w-3/4 mx-auto">
              Our sensors are designed to provide accurate, real-time data for all your fitness activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Portable</CardTitle>
                <CardDescription>Accurate wieght to within 12kg ,making it easy to transport </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  the entire system contains Smart Resisitance System, Mat(Doubles as a Bag), Foldable Treadmill and Barbells.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Bluetooth className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Wireless Connectivity</CardTitle>
                <CardDescription>Seamless Bluetooth 5.0 connection with long battery life.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Connect wirelessly to your smartphone or tablet with stable, low-latency Bluetooth 5.0 technology. The
                  battery lasts up to 30 days on a single charge.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Durable Design</CardTitle>
                <CardDescription>Water-resistant and shock-proof for all workout conditions.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Built to withstand intense workouts, our sensors are water-resistant and can handle drops and impacts,
                  making them perfect for any fitness environment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      {/* Product Comparison */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Product Shopping</h2>
            <p className="text-gray-600 md:w-3/4 mx-auto">Get ready to keep moving.</p>
          </div>

          <div className="grid grid-cols-1 md:px-6 gap-8">
            <Card className="border-2 border-gray-200">
              <CardHeader>
                <CardTitle>Gymgo Kit</CardTitle>
                <CardDescription>Perfect for fitness enthusiasts.</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">7000AED</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>No Recurring Fees</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Comprehensive Features</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Life-time investment</span>
                  </li>
                  <li className="flex items-center text-green-400">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Lightwieght</span>
                  </li>
                  <li className="flex items-center text-green-400">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>No Subscription payments</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Buy Now</Button>
              </CardFooter>
            </Card>

          </div>
        </div>
      </section>

      {/* Data Visualization */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gray p-6 rounded-xl shadow-md">
                <h3 className="font-medium mb-4 flex items-center">
                  <BarChart className="h-5 w-5 text-blue-600 mr-2" /> Performance Analytics
                </h3>
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <img
                    src="../a-visually-compelling-infographic-for-po_V8ylkmWtQtGgh7DX-OnJxg_3dqiqWMOQTWVSaVkDQrfjg.jpeg?height=300&width=500"
                    alt="Data visualization"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <p className="text-sm text-gray-500">
                  Sample data visualization from our app showing jump height and force over time.
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold tracking-tight mb-6">Powerful Data Insights</h2>
              <p className="text-gray-600 mb-6">
                Our app transforms raw sensor data into meaningful insights that help you understand and improve your
                performance.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-3">
                    <span className="text-blue-600 text-xs">✓</span>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Performance Trends</h3>
                    <p className="text-sm text-gray-500">
                      Track your progress over time with detailed charts and graphs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-3">
                    <span className="text-blue-600 text-xs">✓</span>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Personalized Recommendations</h3>
                    <p className="text-sm text-gray-500">
                      Get AI-powered suggestions to improve your technique and performance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-3">
                    <span className="text-blue-600 text-xs">✓</span>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Exportable Reports</h3>
                    <p className="text-sm text-gray-500">
                      Share your data with coaches or trainers for professional analysis.
                    </p>
                  </div>
                </div>
              </div>

              <Button variant="outline">Learn More About Analytics</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Transform Your Workouts?</h2>
          <p className="md:w-3/4 mx-auto mb-8">
            Get started with our sensors and app today and experience the future of fitness tracking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Shop Now
            </Button>
            <Link href="/demo">
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-blue-700">
                Try Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

