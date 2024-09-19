"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Users, Trophy, Cpu, Calendar, Clock, DollarSign } from "lucide-react";
import Link from "next/link";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const schema = z.object({
  email: z.string().email(),
});

export function LandingPage3() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {} = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = schema.safeParse({ email });

    if (!result.success) {
      setError(result.error.message);
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch("/api/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, version: "3" }),
      });

      if (!response.ok) {
        setError("Failed to sign up");
        setIsLoading(false);
        setSuccess(false);
        return;
      }

      const data = await response.json();

      if (data && "error" in data) {
        alert(data.error);
        setIsLoading(false);
        setSuccess(false);
        setEmail("");
      } else {
        setEmail("");
        setSuccess(true);
        setError(null);
      }
    } catch (error) {
      setError("Failed to sign up");
      setSuccess(false);
      setEmail("");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <span className="text-2xl font-bold text-green-600">⛳</span>
          <span className="ml-2 text-2xl font-bold text-gray-900">
            Wednesdays
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#pricing"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#signup"
          >
            Sign Up
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-green-200 to-blue-200 z-0" />
          <motion.div
            className="absolute inset-0 opacity-30 z-10"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              backgroundImage: "url('/golf-pattern.png')",
              backgroundSize: "cover",
              opacity: 0.15,
            }}
          />
          <div className="absolute inset-0 bg-green-900 opacity-60 z-20" />
          <div className="container relative px-4 md:px-6 z-20 h-full">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white text-shadow-lg">
                  Revolutionize Your Golf Social Life
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-100 md:text-xl text-shadow">
                  Connect, compete, and improve your game with the most
                  innovative golf social platform. Launching Spring 2025!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold text-green-600 mb-2">
                    Early Bird Offer!
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Join our waiting list now and lock in{" "}
                    <span className="font-bold">$5/month</span> for the first
                    year!
                    <br />
                    (Regular price: $10/month)
                  </p>
                  {success ? (
                    <div className="flex flex-col items-center gap-4">
                      <p className="text-green-800">
                        Thanks for signing up! You&apos;ve secured your
                        discount. We&apos;ll keep you updated on our launch!
                      </p>
                    </div>
                  ) : (
                    <>
                      <form onSubmit={handleSubmit} className="flex space-x-2">
                        <Label htmlFor="email" className="sr-only">
                          Email
                        </Label>
                        <Input
                          className="max-w-lg flex-1"
                          placeholder="Enter your email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <Button
                          type="submit"
                          disabled={isLoading || success}
                          className="bg-green-600 hover:bg-green-700 text-white"
                        >
                          {isLoading ? "Loading..." : "Get Discount"}
                        </Button>
                      </form>
                      {error ? (
                        <p className="text-xs text-red-500 mt-2">{error}</p>
                      ) : (
                        <p className="text-xs text-gray-600 mt-2">
                          Limited time offer. Don&apos;t miss out!
                        </p>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Why Choose Wednesdays?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-lg p-6 bg-green-50">
                <h3 className="font-bold text-lg mb-2">Your Privacy Matters</h3>
                <p className="text-gray-700">
                  We never sell your data. Your email is used only for important
                  updates and you can unsubscribe anytime with one click.
                </p>
              </div>
              <div className="rounded-lg p-6 bg-green-50">
                <h3 className="font-bold text-lg mb-2">Quality Guaranteed</h3>
                <p className="text-gray-700">
                  Developed by golf enthusiasts, our app is rigorously tested.
                  If you&apos;re not satisfied, we offer a 30-day money-back
                  guarantee.
                </p>
              </div>
              <div className="rounded-lg p-6 bg-green-50">
                <h3 className="font-bold text-lg mb-2">
                  No Pressure, Just Golf
                </h3>
                <p className="text-gray-700">
                  We&apos;re here to enhance your golfing experience, not to
                  push sales. Enjoy our free features without any purchase
                  pressure.
                </p>
              </div>
              <div className="rounded-lg p-6 bg-green-50">
                <h3 className="font-bold text-lg mb-2">Secure by Design</h3>
                <p className="text-gray-700">
                  Your data&apos;s security is our top priority. We use
                  industry-leading encryption and regular security audits to
                  protect your information.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-green-50"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Features That Set Us Apart
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Exclusive Golf Clubs</h3>
                <p className="text-gray-600">
                  Create or join exclusive golf clubs and connect with fellow
                  enthusiasts.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Trophy className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Dynamic Leaderboards</h3>
                <p className="text-gray-600">
                  Compete on leaderboards and track your progress over time.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Cpu className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">AI Caddy</h3>
                <p className="text-gray-600">
                  Receive expert advice from our AI caddy to improve your game.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Calendar className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Easy Scheduling</h3>
                <p className="text-gray-600">
                  Organize golf outings effortlessly with our intuitive
                  interface.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Clock className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Score Tracking</h3>
                <p className="text-gray-600">
                  Track rounds and scores with ease, monitoring your
                  improvement.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <DollarSign className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Custom Game Modes</h3>
                <p className="text-gray-600">
                  Spice up your games with customizable and fun game modes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Unbeatable Value
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow-lg">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Regular Price
                  </h3>
                  <p className="text-4xl font-bold text-gray-900 mb-4">
                    $10<span className="text-lg font-normal">/month</span>
                  </p>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      All features included
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Regular updates
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full max-w-sm rounded-lg border-2 border-green-600 bg-white shadow-lg relative">
                <div className="absolute top-0 right-0 bg-green-600 text-white px-3 py-1 text-sm font-semibold rounded-bl">
                  Best Value
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Early Bird Offer
                  </h3>
                  <p className="text-4xl font-bold text-green-600 mb-4">
                    $5<span className="text-lg font-normal">/month</span>
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    For the first year
                  </p>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      All features included
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Priority updates
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Exclusive early access
                    </li>
                  </ul>
                  <a
                    href="#signup"
                    className="block w-full bg-green-600 text-white text-center py-2 rounded-md font-semibold hover:bg-green-700 transition duration-300"
                  >
                    Get the Discount
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="signup"
          className="w-full py-12 md:py-24 lg:py-32 bg-green-100"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Join the Wednesdays Community
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Be among the first to experience the future of social golfing.
                  Sign up now for exclusive updates, early access, and lock in
                  your discounted rate!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                {success ? (
                  <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg gap-4">
                    <p className="text-green-800">
                      Thanks for signing up! You&apos;ve secured your discount.
                      We&apos;ll keep you updated on our launch!
                    </p>
                  </div>
                ) : (
                  <>
                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col space-y-2"
                    >
                      <Label htmlFor="email" className="sr-only">
                        Email
                      </Label>
                      <Input
                        id="email"
                        placeholder="Enter your email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <Button
                        type="submit"
                        disabled={isLoading || success}
                        className="bg-green-600 hover:bg-green-700 text-white"
                      >
                        {isLoading ? "Loading..." : "Secure Your Discount"}
                      </Button>
                    </form>
                    {error ? (
                      <p className="text-xs text-red-500">{error}</p>
                    ) : (
                      <p className="text-xs text-gray-500">
                        By signing up, you agree to our Terms of Service and
                        Privacy Policy. Limited time offer for the first 1000
                        sign-ups.
                      </p>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">
          © 2024 Wednesdays Golf App. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
