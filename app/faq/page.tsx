import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 md:w-3/4 mx-auto">
            Find answers to common questions about our app, sensors, and fitness tracking technology.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            <Button variant="outline" className="justify-start">
              App Features
            </Button>
            <Button variant="outline" className="justify-start">
              Sensor Technology
            </Button>
            <Button variant="outline" className="justify-start">
              Account & Billing
            </Button>
            <Button variant="outline" className="justify-start">
              Troubleshooting
            </Button>
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">App Features</h2>

            <Accordion type="single" collapsible className="mb-8">
              <AccordionItem value="item-1">
                <AccordionTrigger>How does the voice activation feature work?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600 mb-4">
                    Our app uses advanced speech recognition technology to understand and respond to your voice
                    commands. You can control your workout, ask for guidance, or check your stats hands-free.
                  </p>
                  <p className="text-gray-600">
                    Simply enable the microphone permission when prompted, then use the wake phrase "Hey Fitness"
                    followed by your command. For example, "Hey Fitness, start jump workout" or "Hey Fitness, how many
                    jumps have I done today?"
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>How accurate is the jump and movement tracking?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">
                    Our sensors are accurate to within 0.1kg of force measurement and can detect movements with
                    precision. The jump tracking is over 99% accurate in counting jumps and can measure jump height
                    within 1cm of accuracy. The system has been tested and validated against professional-grade
                    equipment used in sports science laboratories.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>How does the points system work?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600 mb-4">Points are earned based on several factors:</p>
                  <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                    <li>Jump count: Each jump earns base points</li>
                    <li>Jump height: Higher jumps earn more points</li>
                    <li>Force applied: More powerful movements earn more points</li>
                    <li>Consistency: Consecutive workouts earn multipliers</li>
                    <li>Challenges: Completing challenges earns bonus points</li>
                  </ul>
                  <p className="text-gray-600">
                    The exact point formula is adjusted based on your fitness level and goals to ensure the system
                    remains challenging but achievable for all users.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Can I use the app without the sensors?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">
                    Yes, you can use the app without our physical sensors, but functionality will be limited. Without
                    sensors, you can still access workout plans, voice guidance, and manual tracking features. However,
                    automatic jump counting, force measurement, and the full points system require our sensors for
                    accurate data collection. We recommend using the sensors for the complete experience.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <h2 className="text-2xl font-bold mb-6">Sensor Technology</h2>

            <Accordion type="single" collapsible className="mb-8">
              <AccordionItem value="item-5">
                <AccordionTrigger>How do I set up the sensors?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600 mb-4">Setting up the sensors is simple:</p>
                  <ol className="list-decimal pl-6 mb-4 text-gray-600 space-y-2">
                    <li>Charge the sensors using the included USB-C cable</li>
                    <li>Download and install our app from the App Store or Google Play</li>
                    <li>Create an account or log in</li>
                    <li>Go to "Settings" > "Sensors" > "Add New Sensor"</li>
                    <li>Follow the on-screen instructions to pair your sensors via Bluetooth</li>
                    <li>Place the sensors according to the exercise you want to track</li>
                  </ol>
                  <p className="text-gray-600">
                    The app includes detailed setup guides and videos for different workout types.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>How long do the sensors' batteries last?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">
                    Our sensors are designed for long battery life. On a full charge, they typically last:
                  </p>
                  <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                    <li>Up to 30 days in standby mode</li>
                    <li>Up to 20 hours of continuous active use</li>
                    <li>Up to 7 days with average use (1-2 hours per day)</li>
                  </ul>
                  <p className="text-gray-600">
                    The sensors automatically enter power-saving mode when not in use to extend battery life. A full
                    charge takes approximately 2 hours using the included USB-C cable.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger>Are the sensors waterproof?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">Our sensors have an IP67 rating, which means they are:</p>
                  <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                    <li>Fully protected against dust</li>
                    <li>Protected against water immersion up to 1 meter for 30 minutes</li>
                  </ul>
                  <p className="text-gray-600">
                    This makes them sweat-proof and rain-proof, and they can handle brief accidental immersion. However,
                    they are not designed for swimming or underwater activities. After exposure to water, we recommend
                    drying the sensors before charging them.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger>Can I use the sensors with multiple devices?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">
                    Yes, our sensors can be paired with multiple devices, but they can only be actively connected to one
                    device at a time. Your sensor data is synced to your account in the cloud, so you can access your
                    workout history from any device where you're logged in. To switch devices, simply disconnect from
                    the current device and connect to the new one through the app's sensor settings.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <h2 className="text-2xl font-bold mb-6">Account & Billing</h2>

            <Accordion type="single" collapsible className="mb-8">
              <AccordionItem value="item-9">
                <AccordionTrigger>Is there a subscription fee for the app?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600 mb-4">We offer both free and premium subscription options:</p>
                  <ul className="mb-4">
                    <li className="mb-3">
                      <span className="font-medium">Free Plan:</span>
                      <ul className="list-disc pl-6 mt-1 text-gray-600 space-y-1">
                        <li>Basic sensor functionality</li>
                        <li>Jump and movement tracking</li>
                        <li>7-day workout history</li>
                        <li>Limited voice commands</li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-medium">Premium Plan ($9.99/month or $99.99/year):</span>
                      <ul className="list-disc pl-6 mt-1 text-gray-600 space-y-1">
                        <li>Advanced analytics and insights</li>
                        <li>Unlimited workout history</li>
                        <li>Full voice command functionality</li>
                        <li>Custom workout programs</li>
                        <li>Priority customer support</li>
                        <li>Ad-free experience</li>
                      </ul>
                    </li>
                  </ul>
                  <p className="text-gray-600">
                    When you purchase our sensor packages, they include a free 3-month premium subscription.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger>What is your return policy?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600 mb-4">
                    We offer a 30-day satisfaction guarantee on all sensor purchases. If you're not completely satisfied
                    with your purchase, you can return it within 30 days of delivery for a full refund or exchange.
                  </p>
                  <p className="text-gray-600 mb-4">
                    To be eligible for a return, your item must be in the same condition that you received it, unused,
                    and in its original packaging. You'll also need the receipt or proof of purchase.
                  </p>
                  <p className="text-gray-600">
                    To initiate a return, please contact our customer support team through the app or visit our
                    website's support section.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-11">
                <AccordionTrigger>How can I cancel my subscription?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600 mb-4">You can cancel your premium subscription at any time:</p>
                  <ol className="list-decimal pl-6 mb-4 text-gray-600 space-y-2">
                    <li>Open the app and go to "Settings"</li>
                    <li>Select "Account"</li>
                    <li>Tap "Subscription"</li>
                    <li>Select "Cancel Subscription"</li>
                    <li>Follow the prompts to confirm cancellation</li>
                  </ol>
                  <p className="text-gray-600">
                    After cancellation, your premium features will remain active until the end of your current billing
                    period. You can continue to use the free version of the app after your premium subscription ends.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <h2 className="text-2xl font-bold mb-6">Troubleshooting</h2>

            <Accordion type="single" collapsible className="mb-8">
              <AccordionItem value="item-12">
                <AccordionTrigger>My sensors won't connect to the app. What should I do?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600 mb-4">
                    If you're having trouble connecting your sensors, try these troubleshooting steps:
                  </p>
                  <ol className="list-decimal pl-6 mb-4 text-gray-600 space-y-2">
                    <li>Ensure the sensors are charged (check the LED indicator)</li>
                    <li>Make sure Bluetooth is enabled on your device</li>
                    <li>Bring the sensors closer to your device (within 3 feet/1 meter)</li>
                    <li>Restart the app and your device</li>
                    <li>Reset the sensors by pressing and holding the button for 10 seconds</li>
                    <li>Check if your device's operating system is up to date</li>
                    <li>Uninstall and reinstall the app</li>
                  </ol>
                  <p className="text-gray-600">
                    If these steps don't resolve the issue, please contact our support team through the app or website.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-13">
                <AccordionTrigger>The voice commands aren't working properly. How can I fix this?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600 mb-4">
                    If you're experiencing issues with voice commands, try these solutions:
                  </p>
                  <ol className="list-decimal pl-6 mb-4 text-gray-600 space-y-2">
                    <li>Check that your device's microphone is working properly</li>
                    <li>Ensure the app has microphone permissions (check your device settings)</li>
                    <li>Speak clearly and use the correct wake phrase "Hey Fitness"</li>
                    <li>Reduce background noise in your environment</li>
                    <li>Make sure you're using supported commands (see the voice command guide in the app)</li>
                    <li>Check your internet connection, as voice processing requires connectivity</li>
                    <li>Update to the latest version of the app</li>
                  </ol>
                  <p className="text-gray-600">
                    Voice recognition may vary based on accent and environmental conditions. You can retrain the voice
                    model in Settings > Voice > Calibrate Voice Recognition.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-14">
                <AccordionTrigger>The app is not counting my jumps correctly. What's wrong?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600 mb-4">
                    If the app isn't accurately counting your jumps, check these potential issues:
                  </p>
                  <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                    <li>Sensor placement: Ensure the sensor is placed on a flat, stable surface</li>
                    <li>Sensor calibration: Recalibrate the sensor in the app settings</li>
                    <li>Battery level: Low battery can affect sensor performance</li>
                    <li>Surface type: Very soft surfaces may absorb impact and reduce accuracy</li>
                    <li>Jump technique: Very light jumps might not register properly</li>
                    <li>Distance from device: Make sure your device is within Bluetooth range</li>
                    <li>Interference: Other electronic devices might cause interference</li>
                  </ul>
                  <p className="text-gray-600">
                    Try adjusting the sensitivity in Settings > Sensors > Sensitivity Adjustment. If problems persist,
                    you can manually calibrate the sensor by performing 10 test jumps and confirming the count.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-15">
                <AccordionTrigger>How do I update the sensor firmware?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600 mb-4">
                    Updating your sensor firmware is important for optimal performance and new features:
                  </p>
                  <ol className="list-decimal pl-6 mb-4 text-gray-600 space-y-2">
                    <li>Make sure your sensors are charged at least 50%</li>
                    <li>Connect the sensors to your device</li>
                    <li>Open the app and go to "Settings" > "Sensors"</li>
                    <li>Select the sensor you want to update</li>
                    <li>If an update is available, you'll see an "Update Firmware" button</li>
                    <li>Tap the button and follow the on-screen instructions</li>
                    <li>Keep the sensors close to your device during the update (which takes 2-5 minutes)</li>
                  </ol>
                  <p className="text-gray-600">
                    Do not disconnect the sensors or close the app during the update process. If the update fails, try
                    again after restarting both the sensors and your device.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-medium mb-2">Still have questions?</h3>
              <p className="text-gray-600 mb-4">
                If you couldn't find the answer you were looking for, our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button>Contact Support</Button>
                <Button variant="outline">View User Guide</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

